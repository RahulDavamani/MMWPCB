import { procedure, router } from '../../server';
import { EXCHANGE_RATE_API_KEY } from '$env/static/private';
import pe from '../../../prisma/pe';

export const exchangeRate = router({
	get: procedure.query(async () => {
		const exchangeRate = await prisma.exchangeRate
			.findFirst({ select: { id: true, updatedAt: true, rate: true } })
			.catch(pe);

		if (!exchangeRate || exchangeRate.updatedAt.toDateString() !== new Date().toDateString()) {
			const response = await fetch(`https://v6.exchangerate-api.com/v6/${EXCHANGE_RATE_API_KEY}/latest/USD`);
			const rate = (await response.json()).conversion_rates.EUR as number;

			if (exchangeRate)
				await prisma.exchangeRate
					.update({
						where: { id: exchangeRate.id },
						data: { rate, updatedAt: new Date() }
					})
					.catch(pe);
			else await prisma.exchangeRate.create({ data: { rate } }).catch(pe);
			return rate;
		}

		return exchangeRate.rate;
	})
});
