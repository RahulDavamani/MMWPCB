<script lang="ts">
	import type { ChartData } from 'chart.js';
	import type { RouterOutput } from '../../../../trpc/routers/app.router';
	import { Bar } from 'svelte-chartjs';

	export let data: RouterOutput['order']['getDashboard'];

	$: topOrders = data.completedOrders
		.map((order) => {
			const standardPcbs = order.standardPcbs.reduce((acc, pcb) => acc + (pcb.finalPrice ?? 0), 0);
			const advancedPcbs = order.advancedPcbs.reduce((acc, pcb) => acc + (pcb.finalPrice ?? 0), 0);
			const flexiblePcbs = order.flexiblePcbs.reduce((acc, pcb) => acc + (pcb.finalPrice ?? 0), 0);
			const rigidFlexes = order.rigidFlexes.reduce((acc, pcb) => acc + (pcb.finalPrice ?? 0), 0);
			const assemblies = order.assemblies.reduce((acc, pcb) => acc + (pcb.finalPrice ?? 0), 0);
			const stencils = order.stencils.reduce((acc, pcb) => acc + (pcb.finalPrice ?? 0), 0);
			const cncs = order.cncs.reduce((acc, pcb) => acc + (pcb.finalPrice ?? 0), 0);
			const sheetMetals = order.sheetMetals.reduce((acc, pcb) => acc + (pcb.finalPrice ?? 0), 0);
			const threePrintings = order.threePrintings.reduce((acc, pcb) => acc + (pcb.finalPrice ?? 0), 0);
			const injectionMoldings = order.injectionMoldings.reduce((acc, pcb) => acc + (pcb.finalPrice ?? 0), 0);
			const vacuumCastings = order.vacuumCastings.reduce((acc, pcb) => acc + (pcb.finalPrice ?? 0), 0);

			return (
				standardPcbs +
				advancedPcbs +
				flexiblePcbs +
				rigidFlexes +
				assemblies +
				stencils +
				cncs +
				sheetMetals +
				threePrintings +
				injectionMoldings +
				vacuumCastings
			);
		})
		.slice(0, 5);

	$: chartData = {
		labels: topOrders.map((sale) => `$${sale}`),
		datasets: [
			{
				label: 'Amount',
				data: topOrders,
				backgroundColor: 'rgba(98, 182, 239,0.4)',
				borderColor: 'rgba(98, 182, 239, 1)',
				borderWidth: 2,
				borderRadius: 3
			}
		]
	} as ChartData<'bar', (number | [number, number])[], unknown>;
</script>

<div class="border rounded-lg shadow p-4 h-72">
	<Bar
		data={chartData}
		options={{
			maintainAspectRatio: false,
			indexAxis: 'y',
			plugins: {
				title: {
					display: true,
					text: 'Top Sales',
					font: { size: 20 },
					padding: { top: 10, bottom: 20 }
				},
				legend: { position: 'bottom' }
			},
			scales: {
				x: { grid: { display: false } },
				y: { grid: { display: false } }
			}
		}}
	/>
</div>
