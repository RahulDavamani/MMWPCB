import { procedure, router } from '../../server';
import { EXCHANGE_RATE_API_KEY } from '$env/static/private';
import pe from '../../../prisma/pe';

export const exchangeRate = router({
	get: procedure.query(async () => {
		const exchangeRate = await prisma.exchangeRate
			.findFirst({ select: { id: true, createdAt: true, eur: true, gbp: true }, orderBy: { createdAt: 'desc' } })
			.catch(pe);

		if (!exchangeRate || exchangeRate.createdAt.toDateString() !== new Date().toDateString()) {
			const response = await fetch(`https://v6.exchangerate-api.com/v6/${EXCHANGE_RATE_API_KEY}/latest/USD`);
			const { EUR, GBP, HKD } = (await response.json()).conversion_rates as { EUR: number; GBP: number; HKD: number };

			return await prisma.exchangeRate
				.create({ data: { eur: EUR, gbp: GBP, hkd: HKD }, select: { eur: true, gbp: true } })
				.catch(pe);
		}

		return exchangeRate;
	})
});
