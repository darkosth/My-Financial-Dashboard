import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = globalThis as typeof globalThis & { prisma?: PrismaClient };

const createPrismaClient = () => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const adapter = new PrismaPg(pool);

  return new PrismaClient({ adapter });
};

if (
  !globalForPrisma.prisma ||
  !globalForPrisma.prisma.creditCardPaymentHistory ||
  !globalForPrisma.prisma.appSettings ||
  !globalForPrisma.prisma.user ||
  !globalForPrisma.prisma.workspace ||
  !globalForPrisma.prisma.workspaceMember ||
  !globalForPrisma.prisma.userPreference
) {
  globalForPrisma.prisma = createPrismaClient();
}

export const prisma = globalForPrisma.prisma;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;

