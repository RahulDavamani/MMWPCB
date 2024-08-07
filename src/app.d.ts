import type { PrismaClient } from '@prisma/client';
import type { Session, User } from 'lucia';

declare global {
	namespace App {
		interface Locals {
			user?: User;
			session?: Session;
		}
	}

	// eslint-disable-next-line no-var
	var prisma: PrismaClient;
}

export {};
