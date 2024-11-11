<script lang="ts">
	import Flatpickr from 'svelte-flatpickr';
	import Layout from '../components/Layout.svelte';
	import OrdersChart from './components/OrdersChart.svelte';
	import SalesChart from './components/SalesChart.svelte';
	import Stats from './components/Stats.svelte';
	import TopProducts from './components/TopProducts.svelte';
	import TopSales from './components/TopSales.svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { onMount } from 'svelte';
	import { ui } from '../../../stores/ui.store';
	import {
		Chart,
		Title,
		Tooltip,
		Legend,
		CategoryScale,
		LinearScale,
		BarElement,
		LineElement,
		PointElement,
		ArcElement
	} from 'chart.js';
	Chart.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement);

	let data: RouterOutput['order']['getDashboard'] | undefined;
	let dates: Date[] = [new Date(new Date().setMonth(new Date().getMonth() - 6)), new Date()];

	const fetchOrders = ui.loaderWrapper(
		{ title: 'Fetching Data' },
		async () => (data = await trpc().order.getDashboard.query({ fromDate: dates[0], toDate: dates[1] }).catch(tce))
	);

	onMount(fetchOrders);
</script>

<Layout pageTitle="Dashboard">
	<div class="flex justify-between items-center mb-4">
		<div class="text-2xl font-semibold pl-2 font-serif">Sales Overview</div>
		<Flatpickr
			class="input input-bordered text-center font-semibold w-96"
			options={{ mode: 'range', dateFormat: 'j M Y', plugins: [] }}
			value={dates}
			on:close={(e) => {
				if (e.detail[0].length === 2) {
					dates = [new Date(e.detail[0][0].setHours(0, 0, 0, 0)), new Date(e.detail[0][1].setHours(23, 0, 0, 0))];
					fetchOrders();
				}
			}}
		/>
	</div>

	{#if data}
		<div class="flex gap-20">
			<div class="grow space-y-8">
				<Stats {data} {dates} />
				<OrdersChart {data} {dates} />
				<SalesChart {data} {dates} />
			</div>
			<div class="w-1/3 space-y-8">
				<TopProducts {data} />
				<TopSales {data} />
			</div>
		</div>
	{/if}
</Layout>
