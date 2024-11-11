<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { RouterOutput } from '../../../../trpc/routers/app.router';

	export let data: RouterOutput['order']['getDashboard'];
	export let dates: Date[];

	$: ({ completedOrders } = data);
	$: totalDays = Math.floor((dates[1].getTime() - dates[0].getTime()) / (1000 * 60 * 60 * 24)) + 1;

	const parseOrder = (order: RouterOutput['order']['getDashboard']['completedOrders'][0]) => {
		const {
			standardPcbs,
			advancedPcbs,
			flexiblePcbs,
			rigidFlexes,
			assemblies,
			stencils,
			cncs,
			sheetMetals,
			threePrintings,
			injectionMoldings,
			vacuumCastings
		} = order;
		const products = [
			...standardPcbs,
			...advancedPcbs,
			...flexiblePcbs,
			...rigidFlexes,
			...assemblies,
			...stencils,
			...cncs,
			...sheetMetals,
			...threePrintings,
			...injectionMoldings,
			...vacuumCastings
		];
		const sales = products.reduce((acc, { finalPrice }) => acc + (finalPrice ?? 0), 0);
		const quantity = products.reduce((acc, { quantity }) => {
			if (typeof quantity === 'object') return acc + quantity.reduce((a, q) => a + q, 0);
			else return acc + quantity;
		}, 0);
		return { sales, quantity };
	};

	$: totalOrders = completedOrders.length;
	$: totalSales = completedOrders.reduce((acc, order) => acc + parseOrder(order).sales, 0);
	$: totalQuantity = completedOrders.reduce((acc, order) => acc + parseOrder(order).quantity, 0);

	$: stats = [
		{
			title: 'Total Sales',
			value: totalSales.toFixed(2),
			desc: `Average: $${(totalSales / totalDays).toFixed(2)} / day`,
			icon: 'mdi:dollar'
		},
		{
			title: 'Orders Completed',
			value: totalOrders,
			desc: `Average: ${(totalOrders / totalDays).toFixed(2)} / day`,
			icon: 'mdi:local-shipping'
		},
		{
			title: 'Total Units Sold',
			value: totalQuantity,
			desc: `Average: ${(totalQuantity / totalDays).toFixed(2)} / day`,
			icon: 'mdi:package'
		}
	];
</script>

<div class="flex justify-between">
	{#each stats as { title, value, desc, icon }}
		<div class="stats border shadow">
			<div class="stat w-60">
				<div class="mr-1">
					<div class="stat-title">{title}</div>
					<div class="stat-value">{value}</div>
					<div class="stat-desc mt-1">{desc}</div>
				</div>
				<div class="stat-figure text-info">
					<Icon {icon} width={50} />
				</div>
			</div>
		</div>
	{/each}
</div>
