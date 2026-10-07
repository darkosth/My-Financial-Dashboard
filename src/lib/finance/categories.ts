import { parseRequiredText } from '@/lib/actions/validation';
import { atomic, audit, categoryFor } from './core';

const catalog: Record<string, string[]> = {
  Vivienda: ['Renta', 'Hipoteca', 'Mantenimiento', 'Reparaciones', 'Aire acondicionado', 'Muebles', 'Artículos del hogar'],
  Servicios: ['Electricidad', 'Agua y alcantarillado', 'Gas doméstico', 'Internet', 'Telefonía', 'Basura'],
  Alimentación: ['Supermercado', 'Restaurantes', 'Comida a domicilio', 'Café', 'Comida rápida'],
  Transporte: ['Combustible', 'Transporte público', 'Taxi y viajes compartidos', 'Estacionamiento', 'Peajes', 'Mantenimiento', 'Registro'],
  Salud: ['Consultas', 'Medicamentos', 'Dental', 'Visión', 'Terapia', 'Hospital'],
  Seguros: ['Salud', 'Vehículo', 'Vivienda', 'Vida', 'Discapacidad'],
  Entretenimiento: ['Videojuegos', 'Streaming', 'Cine', 'Eventos', 'Aficiones', 'Deportes'],
  Compras: ['Ropa', 'Calzado', 'Tecnología', 'Electrónica', 'Cuidado personal', 'Artículos del hogar'],
  Educación: ['Cursos', 'Matrícula', 'Libros', 'Material', 'Certificaciones'],
  'Familia y mascotas': ['Cuidado infantil', 'Apoyo familiar', 'Alimento de mascotas', 'Veterinario', 'Actividades infantiles'],
  Viajes: ['Transporte', 'Alojamiento', 'Actividades', 'Comidas', 'Equipaje'],
  Finanzas: ['Préstamos', 'Intereses', 'Comisiones bancarias', 'Pago de tarjeta', 'Ahorro e inversión'],
  Impuestos: ['Renta', 'Propiedad', 'Ventas', 'Otros impuestos'],
  Suscripciones: ['Software', 'Membresías', 'Prensa', 'Almacenamiento digital'],
  Trabajo: ['Equipo', 'Software', 'Transporte', 'Materiales', 'Servicios profesionales'],
  'Regalos y donaciones': ['Regalos', 'Donaciones', 'Caridad'],
  Ingresos: ['Salario', 'Trabajo independiente', 'Intereses', 'Ayudas', 'Reembolsos', 'Otros ingresos'],
  'Transferencias propias': ['Entre bancos', 'Retiro a Efectivo', 'Depósito desde Efectivo'],
  Otros: ['Otros gastos', 'Sin clasificar'],
};

const key = (name: string) => name.normalize('NFKC').toLocaleLowerCase('es');

export async function seedCategories(workspaceId: string) {
  return atomic(workspaceId, async (tx) => {
    if (await tx.financeCategory.count({ where: { workspaceId } })) return;
    for (const [name, subcategories] of Object.entries(catalog)) {
      await tx.financeCategory.create({
        data: {
          workspaceId,
          name,
          nameKey: key(name),
          subcategories: {
            create: subcategories.map((subcategoryName) => ({
              name: subcategoryName,
              nameKey: key(subcategoryName),
            })),
          },
        },
      });
    }
  });
}

export async function createCategory(
  workspaceId: string,
  userId: string,
  input: { name: string; parentId?: string },
) {
  const name = parseRequiredText(input.name);
  return atomic(workspaceId, async (tx) => {
    if (input.parentId) await categoryFor(tx, workspaceId, input.parentId);
    const row = input.parentId
      ? await tx.financeSubcategory.create({
          data: { categoryId: input.parentId, name, nameKey: key(name) },
        })
      : await tx.financeCategory.create({
          data: { workspaceId, name, nameKey: key(name) },
        });
    await audit(tx, workspaceId, userId, 'CATEGORY_CREATED', null, {
      id: row.id,
      name,
    });
    return { id: row.id };
  });
}

export async function updateCategory(
  workspaceId: string,
  userId: string,
  input: {
    id: string;
    name?: string;
    archived?: boolean;
    isSubcategory?: boolean;
  },
) {
  return atomic(workspaceId, async (tx) => {
    const name =
      input.name === undefined ? undefined : parseRequiredText(input.name);
    const data = {
      ...(name ? { name, nameKey: key(name) } : {}),
      ...(typeof input.archived === 'boolean'
        ? { archived: input.archived }
        : {}),
    };
    const result = input.isSubcategory
      ? await tx.financeSubcategory.updateMany({
          where: { id: input.id, category: { workspaceId } },
          data,
        })
      : await tx.financeCategory.updateMany({
          where: { id: input.id, workspaceId },
          data,
        });
    if (!result.count) throw new Error('Categoría no encontrada.');
    await audit(tx, workspaceId, userId, 'CATEGORY_UPDATED', null, {
      id: input.id,
      ...data,
    });
  });
}
