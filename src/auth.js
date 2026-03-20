import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    // 1. EL CANDADO: Si no tienes sesión iniciada, te manda a la página de login
    authorized({ auth }) {
      const isLoggedIn = !!auth?.user;
      return isLoggedIn; 
    },
    // 2. LA LISTA VIP: Si iniciaste sesión, verifica si eres tú o tu esposa
    async signIn({ user }) {
      const allowedEmails = [
        "darkosthgx@gmail.com", 
        "raquel19nunez@gmail.com"
      ];

      if (allowedEmails.includes(user.email)) {
        return true; // Puerta abierta
      } else {
        return false; // ¡Rebotado!
      }
    }
  }
})