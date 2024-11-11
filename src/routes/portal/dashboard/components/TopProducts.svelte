<script lang="ts">
	import type { ChartData } from 'chart.js';
	import type { RouterOutput } from '../../../../trpc/routers/app.router';
	import { Pie } from 'svelte-chartjs';

	export let data: RouterOutput['order']['getDashboard'];

	$: products = data.completedOrders.reduce(
		(acc, order) => {
			acc.standardPcb.sales =
				acc.standardPcb.sales + order.standardPcbs.reduce((acc, { finalPrice }) => acc + (finalPrice ?? 0), 0);
			acc.standardPcb.quantity =
				acc.standardPcb.quantity + order.standardPcbs.reduce((acc, { quantity }) => acc + quantity, 0);
			acc.advancedPcb.sales =
				acc.advancedPcb.sales + order.advancedPcbs.reduce((acc, { finalPrice }) => acc + (finalPrice ?? 0), 0);
			acc.advancedPcb.quantity =
				acc.advancedPcb.quantity + order.advancedPcbs.reduce((acc, { quantity }) => acc + quantity, 0);
			acc.flexiblePcb.sales =
				acc.flexiblePcb.sales + order.flexiblePcbs.reduce((acc, { finalPrice }) => acc + (finalPrice ?? 0), 0);
			acc.flexiblePcb.quantity =
				acc.flexiblePcb.quantity + order.flexiblePcbs.reduce((acc, { quantity }) => acc + quantity, 0);
			acc.rigidFlex.sales =
				acc.rigidFlex.sales + order.rigidFlexes.reduce((acc, { finalPrice }) => acc + (finalPrice ?? 0), 0);
			acc.rigidFlex.quantity =
				acc.rigidFlex.quantity + order.rigidFlexes.reduce((acc, { quantity }) => acc + quantity, 0);
			acc.assembly.sales =
				acc.assembly.sales + order.assemblies.reduce((acc, { finalPrice }) => acc + (finalPrice ?? 0), 0);
			acc.assembly.quantity = acc.assembly.quantity + order.assemblies.reduce((acc, { quantity }) => acc + quantity, 0);
			acc.stencil.sales =
				acc.stencil.sales + order.stencils.reduce((acc, { finalPrice }) => acc + (finalPrice ?? 0), 0);
			acc.stencil.quantity = acc.stencil.quantity + order.stencils.reduce((acc, { quantity }) => acc + quantity, 0);
			acc.cnc.sales = acc.cnc.sales + order.cncs.reduce((acc, { finalPrice }) => acc + (finalPrice ?? 0), 0);
			acc.cnc.quantity =
				acc.cnc.quantity + order.cncs.reduce((acc, { quantity }) => acc + quantity.reduce((a, q) => a + q), 0);
			acc.sheetMetal.sales =
				acc.sheetMetal.sales + order.sheetMetals.reduce((acc, { finalPrice }) => acc + (finalPrice ?? 0), 0);
			acc.sheetMetal.quantity =
				acc.sheetMetal.quantity +
				order.sheetMetals.reduce((acc, { quantity }) => acc + quantity.reduce((a, q) => a + q), 0);
			acc.threePrinting.sales =
				acc.threePrinting.sales + order.threePrintings.reduce((acc, { finalPrice }) => acc + (finalPrice ?? 0), 0);
			acc.threePrinting.quantity =
				acc.threePrinting.quantity +
				order.threePrintings.reduce((acc, { quantity }) => acc + quantity.reduce((a, q) => a + q), 0);
			acc.injectionMolding.sales =
				acc.injectionMolding.sales +
				order.injectionMoldings.reduce((acc, { finalPrice }) => acc + (finalPrice ?? 0), 0);
			acc.injectionMolding.quantity =
				acc.injectionMolding.quantity + order.injectionMoldings.reduce((acc, { quantity }) => acc + quantity, 0);
			acc.vacuumCasting.sales =
				acc.vacuumCasting.sales + order.vacuumCastings.reduce((acc, { finalPrice }) => acc + (finalPrice ?? 0), 0);

			return acc;
		},
		{
			standardPcb: { title: 'Standard PCB', sales: 0, quantity: 0 },
			advancedPcb: { title: 'Advanced PCB', sales: 0, quantity: 0 },
			flexiblePcb: { title: 'Flexible PCB', sales: 0, quantity: 0 },
			rigidFlex: { title: 'Rigid-Flex', sales: 0, quantity: 0 },
			assembly: { title: 'Assembly', sales: 0, quantity: 0 },
			stencil: { title: 'Stencil', sales: 0, quantity: 0 },
			cnc: { title: 'CNC Machining', sales: 0, quantity: 0 },
			sheetMetal: { title: 'Sheet Metal', sales: 0, quantity: 0 },
			threePrinting: { title: '3D Printing', sales: 0, quantity: 0 },
			injectionMolding: { title: 'Injection Molding', sales: 0, quantity: 0 },
			vacuumCasting: { title: 'Vacuum Casting', sales: 0, quantity: 0 }
		}
	);

	$: salesData = Object.values(products)
		.sort((a, b) => b.sales - a.sales)
		.slice(0, 5);
	$: quantityData = Object.values(products)
		.sort((a, b) => b.quantity - a.quantity)
		.slice(0, 5);

	let tab = 1;

	$: chartData = {
		labels: tab == 1 ? salesData.map(({ title }) => title) : quantityData.map(({ title }) => title),
		datasets: [
			{
				data: tab === 1 ? salesData.map(({ sales }) => sales) : quantityData.map(({ quantity }) => quantity),
				backgroundColor: [
					'rgba(255, 76, 76, 1)',
					'rgba(255, 120, 71, 1)',
					'rgba(255, 165, 0, 1)',
					'rgba(255, 184, 77, 1)',
					'rgba(255, 215, 0, 1)'
				]
			}
		]
	} as ChartData<'pie', number[], unknown>;
</script>

<div class="border rounded-lg shadow p-4">
	<div class="text-center font-bold text-xl opacity-70">Top Products</div>

	<div role="tablist" class="tabs tabs-boxed my-4 mx-8 font-semibold">
		<button class="tab {tab === 1 && 'tab-active'}" on:click={() => (tab = 1)}>Sales</button>
		<button class="tab {tab === 2 && 'tab-active'}" on:click={() => (tab = 2)}>Units Sold</button>
	</div>

	<div class="h-[305px]">
		<Pie
			data={chartData}
			options={{
				responsive: true,
				plugins: { legend: { position: 'bottom' } },
				maintainAspectRatio: false
			}}
		/>
	</div>
</div>
