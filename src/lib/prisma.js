import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Evitamos que Next.js cree múltiples conexiones a la base de datos cada vez que guardamos un archivo mientras estamos programando (Hot Reload).

const globalForPrisma = globalThis;

// Si no existe una conexión activa, la creamos
if (!globalForPrisma.prisma) {
  const pool = new Pool({ 
    connectionString: process.env.DATABASE_URL 
  });
  const adapter = new PrismaPg(pool);

  globalForPrisma.prisma = new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;