<script lang="ts">
	import { onMount } from 'svelte';
	import { services as servicesStore } from '../../../stores/service.store';
	import Layout from '../../components/layout/Layout.svelte';
	import ProductCard from '../components/ProductCard.svelte';
	import SearchSort from '../components/SearchSort.svelte';
	import ListFilter from '../components/ListFilter.svelte';
	import RangeFilter from '../components/RangeFilter.svelte';
	import { sortServices } from '../utils/sortServices';
	import { getMax } from '../utils/getMax';
	import { getValues } from '../utils/getValues';
	import SectionHeader from '../components/SectionHeader.svelte';

	$: section = $servicesStore.oscilloscopes;
	$: services = Object.values(section.services);
	$: l = section.l;

	let filters = {
		search: '',
		sortBy: 'title',
		sortOrder: true,

		categories: [] as string[],
		bandwidth: [0, 0],
		maxMemoryDepth: [0, 0],
		maxSampleRate: [0, 0],
		types: [] as string[]
	};

	$: categories = getValues(services, 'category');
	$: maxBandwidth = getMax(services, 'bandwidth');
	$: maxMaxMemoryDepth = getMax(services, 'maxMemoryDepth');
	$: maxMaxSampleRate = getMax(services, 'maxSampleRate');
	$: types = getValues(services, 'type');

	onMount(() => {
		filters.bandwidth[1] = maxBandwidth;
		filters.maxMemoryDepth[1] = maxMaxMemoryDepth;
		filters.maxSampleRate[1] = maxMaxSampleRate;
	});

	$: filteredServices = services
		.filter(({ l: { title }, category, bandwidth, maxMemoryDepth, maxSampleRate, type }) => {
			if (!title.toLowerCase().includes(filters.search.toLowerCase())) return false;
			if (filters.categories.length && !filters.categories.includes(category)) return false;
			if (bandwidth < filters.bandwidth[0] || bandwidth > filters.bandwidth[1]) return false;
			if (maxMemoryDepth < filters.maxMemoryDepth[0] || maxMemoryDepth > filters.maxMemoryDepth[1]) return false;
			if (maxSampleRate < filters.maxSampleRate[0] || maxSampleRate > filters.maxSampleRate[1]) return false;
			if (filters.types.length && !filters.types.includes(type ?? '')) return false;
			return true;
		})
		.sort((a, b) => sortServices(filters, a, b));
</script>

<Layout pageTitle={l.title}>
	<SectionHeader title={l.title} count={services.length} />

	<div class="flex gap-10">
		<div class="w-1/4">
			<ListFilter title={l.specs.categories} list={categories} bind:values={filters.categories} />
			<RangeFilter title={l.specs.bandwidth} unit="GHz" max={maxBandwidth} bind:values={filters.bandwidth} />
			<RangeFilter
				title={l.specs.maxMemoryDepth}
				unit="Mpts"
				max={maxMaxMemoryDepth}
				bind:values={filters.maxMemoryDepth}
			/>
			<RangeFilter
				title={l.specs.maxSampleRate}
				unit="GSa/s"
				max={maxMaxSampleRate}
				bind:values={filters.maxSampleRate}
			/>
			<ListFilter title={l.specs.types} list={types} bind:values={filters.types} />
		</div>

		<div class="w-full mt-4">
			<SearchSort
				bind:filters
				sortBys={[
					{ title: l.specs.title, value: 'title' },
					{ title: l.specs.category, value: 'category' },
					{ title: l.specs.bandwidth, value: 'bandwidth' },
					{ title: l.specs.maxMemoryDepth, value: 'maxMemoryDepth' },
					{ title: l.specs.maxSampleRate, value: 'maxSampleRate' },
					{ title: l.specs.type, value: 'type' }
				]}
			/>

			<div class="grid grid-cols-3 gap-10 mt-6">
				{#each filteredServices as service}
					{@const { href, bandwidth, maxMemoryDepth, maxSampleRate, type } = service}
					<ProductCard
						{service}
						href="/services{$servicesStore.oscilloscopes.href}{href}"
						specs={[
							{
								title: l.specs.bandwidth,
								value: bandwidth < 1 ? `${bandwidth * 1000} MHz` : `${bandwidth} GHz`
							},
							{ title: l.specs.maxMemoryDepth, value: `${maxMemoryDepth} Mpts` },
							{ title: l.specs.maxSampleRate, value: `${maxSampleRate} GSa/s` },
							{ title: l.specs.type, value: type ?? 'N/A' }
						]}
					/>
				{/each}
			</div>
		</div>
	</div>
</Layout>
