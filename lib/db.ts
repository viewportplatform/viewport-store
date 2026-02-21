import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Only create Prisma client if DATABASE_URL is available
export const prisma = process.env.DATABASE_URL
  ? (globalForPrisma.prisma ||
    new PrismaClient({
      log: ['query'],
    }))
  : null as any;

if (process.env.NODE_ENV !== 'production' && process.env.DATABASE_URL) globalForPrisma.prisma = prisma;
