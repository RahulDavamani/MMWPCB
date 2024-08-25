import { z } from 'zod';
import { procedure, router } from '../../server';
import { en } from '$lib/locales/en';
import { zh } from '$lib/locales/zh';
import { fr } from '$lib/locales/fr';
import { es } from '$lib/locales/es';

export const lang = router({
	get: procedure
		.input(z.object({ language: z.enum(['en', 'zh', 'fr', 'es']) }))
		.query(async ({ input: { language } }) => ({ en, zh, fr, es })[language])
});
