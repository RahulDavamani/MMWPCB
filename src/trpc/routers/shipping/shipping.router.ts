import { z } from 'zod';
import { procedure, router } from '../../server';

export const shipping = router({
	getCountries: procedure.query(
		async () => await prisma.shippingCountry.findMany({ select: { id: true, name: true, _count: true } })
	),

	getMethods: procedure.input(z.object({ countryId: z.string().min(1) })).query(
		async ({ input: { countryId } }) =>
			await prisma.shippingMethod.findMany({
				where: { countryId },
				select: {
					id: true,
					name: true,
					price: true,
					deliveryTime: true,
					restriction: true,
					countryId: true,
					country: { select: { name: true } }
				}
			})
	)
});
