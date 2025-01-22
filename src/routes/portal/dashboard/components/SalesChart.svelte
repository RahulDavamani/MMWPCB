<script lang="ts">
	import type { ChartData, Point } from 'chart.js';
	import type { RouterOutput } from '../../../../trpc/routers/app.router';
	import { Line } from 'svelte-chartjs';

	export let data: RouterOutput['order']['getDashboard'];
	export let dates: Date[];

	const parseData = (data: RouterOutput['order']['getDashboard'], dates: Date[]) => {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		const { completedOrders } = data;
		const startDate = new Date(dates[0]);
		const endDate = new Date(dates[1]);

		const labels = [];
		const sales = [];

		while (
			startDate.getFullYear() < endDate.getFullYear() ||
			(startDate.getFullYear() === endDate.getFullYear() && startDate.getMonth() <= endDate.getMonth())
		) {
			const month = startDate.getMonth();
			const year = startDate.getFullYear();
			labels.push(`${months[month]} ${year}`);

			const orders = completedOrders?.filter(
				({ completedAt }) => completedAt?.getMonth() === month && completedAt?.getFullYear() === year
			);
			const sale = orders.reduce((acc, order) => {
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
				return acc + products.reduce((acc, { finalPrice }) => acc + (finalPrice ?? 0), 0);
			}, 0);
			sales.push(sale);

			startDate.setMonth(startDate.getMonth() + 1);
			startDate.setDate(1);
		}

		return { labels, sales };
	};

	$: ({ labels, sales } = parseData(data, dates));

	$: chartData = {
		labels: labels,
		datasets: [
			{
				label: 'Sales',
				data: sales,
				backgroundColor: 'rgba(220, 177, 60, 0.4)',
				borderColor: 'rgba(220, 177, 60, 1)',
				borderWidth: 2
			}
		]
	} as ChartData<'line', (number | Point)[], unknown>;
</script>

<div class="border rounded-lg shadow p-4 h-72">
	<Line
		data={chartData}
		options={{
			maintainAspectRatio: false,
			plugins: {
				title: {
					display: true,
					text: 'Sales',
					font: { size: 20 },
					padding: { top: 10, bottom: 20 }
				},
				legend: { position: 'bottom' }
			}
		}}
	/>
</div>
