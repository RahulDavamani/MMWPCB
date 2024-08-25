import { z } from 'zod';
import { procedure, router } from '../../server';
import pe from '../../../prisma/pe';

export const shipping = router({
	getCountries: procedure.query(
		async () => await prisma.shippingCountry.findMany({ include: { _count: true } }).catch(pe)
	),

	getMethods: procedure.input(z.object({ countryId: z.string().min(1) })).query(
		async ({ input: { countryId } }) =>
			await prisma.shippingMethod
				.findMany({
					where: { countryId },
					include: { country: { select: { name: true } } }
				})
				.catch(pe)
	)
});
