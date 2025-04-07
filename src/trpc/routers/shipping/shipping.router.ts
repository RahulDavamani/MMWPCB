import { z } from 'zod';
import { procedure, router } from '../../server';
import pe from '../../../prisma/pe';

export const shipping = router({
	getCountries: procedure.query(async () => {
		const res = await fetch('https://api.fuuffy.com/country/getCountryOptionList');
		const data = (await res.json()) as { country_list: { country: string }[] };
		return data.country_list.map(({ country }) => country);
	}),

	getMethods: procedure.input(z.object({ country: z.string().min(1) })).query(async ({ input: { country } }) => {
		const res = await fetch(
			`https://api.fuuffy.com/order/getCourierShippingList?package_array=[{"length":"10","height":"10","width":"10","package_type":"parcel","act_weight":"0.5"}]&export_country=HONG KONG&country=${country}&package_type=parcel'`
		);
		const data = (await res.json()) as {
			ava_shipping_way: {
				id: string;
				icon_path: string;
				shipping_name: string;
				cost_price: number;
				delivery_time: string;
			}[];
		};

		const { hkd } = await prisma.exchangeRate.findFirstOrThrow({ select: { hkd: true } }).catch(pe);

		return data.ava_shipping_way.map((method) => ({
			country,
			id: method.id,
			icon: method.icon_path,
			method: method.shipping_name,
			price: method.cost_price / hkd,
			deliveryTime: method.delivery_time
		}));
	})
});
