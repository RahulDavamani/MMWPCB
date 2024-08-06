import { PrismaClient } from '@prisma/client';
import { ENV } from '$env/static/private';

export const prisma = global.prisma || new PrismaClient();

if (ENV === 'DEV') global.prisma = prisma;
