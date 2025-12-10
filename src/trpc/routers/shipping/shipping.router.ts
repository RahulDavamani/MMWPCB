import { z } from 'zod';
import { procedure, router } from '../../server';
import pe from '../../../prisma/pe';
import { FUUFFY_TOKEN } from '$env/static/private';

export const shipping = router({
	getCountries: procedure.query(async () => {
		const data = (await fetch('https://api.fuuffy.com/country/getCountryOptionList', {
			headers: { Authorization: `Bearer ${FUUFFY_TOKEN}` }
		}).then((res) => res.json())) as { country_list: { country: string }[] };
		const countries = data.country_list.map(({ country }) => country);
		return countries;
	}),

	getMethods: procedure.input(z.object({ country: z.string().min(1) })).query(async ({ input: { country } }) => {
		const params = new URLSearchParams({
			package_type: 'parcel',
			package_array: JSON.stringify([{ length: '30', width: '20', height: '15', act_weight: '2.0' }]),
			export_country: 'HONG KONG',
			country
		});
		const data = (await fetch(`https://api.fuuffy.com/order/getCourierShippingList?${params.toString()}`, {
			headers: { Authorization: `Bearer ${FUUFFY_TOKEN}` }
		}).then((res) => res.json())) as {
			ava_shipping_way: {
				id: string;
				icon_path: string;
				shipping_name: string;
				cost_price: number;
				delivery_time: string;
			}[];
		};

		const { hkd } = await prisma.exchangeRate.findFirstOrThrow({ select: { hkd: true } }).catch(pe);
		const methods = data.ava_shipping_way.map((method) => ({
			country,
			id: method.id,
			icon: method.icon_path,
			method: method.shipping_name,
			price: method.cost_price / hkd,
			deliveryTime: method.delivery_time
		}));

		return methods;
	})
});
