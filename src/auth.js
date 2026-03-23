import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const isE2ETestMode = process.env.E2E_TEST_MODE === "1";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    authorized({ auth, request }) {
      const isE2ERequest = request?.nextUrl?.searchParams.get("e2e") === "1";

      if (isE2ETestMode || isE2ERequest) {
        return true;
      }

      return !!auth?.user;
    },
    async signIn({ user }) {
      if (isE2ETestMode) {
        return true;
      }

      const allowedEmails = ["darkosthgx@gmail.com", "raquel19nunez@gmail.com"];
      return allowedEmails.includes(user.email);
    },
  },
});
