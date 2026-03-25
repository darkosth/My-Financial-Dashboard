"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function generateInviteToken(workspaceId) {
  try {
    // 1. Generamos un código criptográfico único (ej. "d28b9f14-...")
    const token = crypto.randomUUID();

    // 2. Lo registramos en la base de datos atado a tu espacio
    await prisma.workspaceInvite.create({
      data: {
        token: token,
        workspaceId: workspaceId,
      },
    });

    return { success: true, token: token };
  } catch (error) {
    console.error("Error generating invite:", error);
    return { success: false, error: "Failed to generate invite link" };
  }
}

export async function acceptWorkspaceInvite(token) {
  try {
    // 1. Verificamos quién es la persona que hizo clic
    const session = await auth();
    if (!session || !session.user?.email) {
      return { success: false, error: "Debes iniciar sesión primero" };
    }

    // Buscamos al usuario en la base de datos
    const user = await prisma.user.findUnique({ 
      where: { email: session.user.email } 
    });
    if (!user) return { success: false, error: "Usuario no encontrado" };

    // 2. Revisamos si el Pase VIP existe y es válido
    const invite = await prisma.workspaceInvite.findUnique({
      where: { token: token },
      include: { workspace: true }
    });

    if (!invite || !invite.active) {
      return { success: false, error: "El enlace de invitación es inválido o ha expirado" };
    }

    // 3. Revisamos si ya es miembro (para no duplicar)
    const existingMember = await prisma.workspaceMember.findUnique({
      where: { 
        userId_workspaceId: { userId: user.id, workspaceId: invite.workspaceId } 
      }
    });

    // Si no es miembro, la agregamos
    if (!existingMember) {
      await prisma.workspaceMember.create({
        data: {
          userId: user.id,
          workspaceId: invite.workspaceId,
          role: "MEMBER"
        }
      });
    }

    // 4. LA MAGIA: Le cambiamos su espacio activo al tuyo
    await prisma.userPreference.upsert({
      where: { userId: user.id },
      update: { activeWorkspaceId: invite.workspaceId },
      create: { userId: user.id, activeWorkspaceId: invite.workspaceId }
    });

    return { success: true };
  } catch (error) {
    console.error("Error aceptando invitación:", error);
    return { success: false, error: "Error al procesar la invitación" };
  }
}

