<script lang="ts">
	import type { ChartData } from 'chart.js';
	import type { RouterOutput } from '../../../../trpc/routers/app.router';
	import { Bar } from 'svelte-chartjs';

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

		const { createdOrders, completedOrders } = data;
		const startDate = new Date(dates[0]);
		const endDate = new Date(dates[1]);

		const labels = [];
		const createdOrdersCount = [];
		const completedOrdersCount = [];

		while (startDate.getMonth() <= endDate.getMonth()) {
			const month = startDate.getMonth();
			const year = startDate.getFullYear();
			labels.push(`${months[month]} ${year}`);
			createdOrdersCount.push(
				createdOrders?.filter(({ createdAt }) => createdAt.getMonth() === month && createdAt.getFullYear() === year)
					.length
			);
			completedOrdersCount.push(
				completedOrders?.filter(
					({ completedAt }) => completedAt?.getMonth() === month && completedAt?.getFullYear() === year
				).length
			);

			startDate.setMonth(startDate.getMonth() + 1);
		}

		return { labels, createdOrdersCount, completedOrdersCount };
	};

	$: ({ labels, createdOrdersCount, completedOrdersCount } = parseData(data, dates));

	$: chartData = {
		labels: labels,
		datasets: [
			{
				label: 'Orders Created',
				data: createdOrdersCount,
				backgroundColor: 'rgba(98, 182, 239,0.4)',
				borderColor: 'rgba(98, 182, 239, 1)',
				borderWidth: 2,
				borderRadius: 6
			},
			{
				label: 'Orders Completed',
				data: completedOrdersCount,
				backgroundColor: 'rgba(128, 205, 0, 0.4)',
				borderColor: 'rgba(128, 205, 0, 1)',
				borderWidth: 2,
				borderRadius: 6
			}
		]
	} as ChartData<'bar', (number | [number, number])[], unknown>;
</script>

<div class="border rounded-lg shadow p-4 h-72">
	<Bar
		data={chartData}
		options={{
			maintainAspectRatio: false,
			plugins: {
				title: {
					display: true,
					text: 'Orders',
					font: { size: 20 },
					padding: { top: 10, bottom: 20 }
				},
				legend: { position: 'bottom' }
			},
			scales: {
				x: { grid: { display: false } }
			}
		}}
	/>
</div>
