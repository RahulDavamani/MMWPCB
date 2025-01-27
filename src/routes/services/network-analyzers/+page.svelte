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

	$: section = $servicesStore.networkAnalyzers;
	$: services = Object.values(section.services);
	$: l = section.l;

	let filters = {
		search: '',
		sortBy: 'title',
		sortOrder: true,

		categories: [] as string[],
		builtInPorts: [0, 0],
		maxFrequency: [0, 0],
		internalSources: [0, 0],
		vnaSeries: [] as string[],
		vnaTypes: [] as string[]
	};

	$: categories = getValues(services, 'category');
	$: maxBuiltInPorts = getMax(services, 'builtInPorts');
	$: maxMaxFrequency = getMax(services, 'maxFrequency');
	$: maxInternalSources = getMax(services, 'internalSources');
	$: vnaSeries = getValues(services, 'vnaSeries');
	$: vnaTypes = getValues(services, 'vnaType');

	onMount(() => {
		filters.builtInPorts[1] = maxBuiltInPorts;
		filters.maxFrequency[1] = maxMaxFrequency;
		filters.internalSources[1] = maxInternalSources;
	});

	$: filteredServices = services
		.filter(({ l: { title }, category, builtInPorts, maxFrequency, internalSources, vnaSeries, vnaType }) => {
			if (!title.toLowerCase().includes(filters.search.toLowerCase())) return false;
			if (filters.categories.length && !filters.categories.includes(category)) return false;
			if (!builtInPorts.some((port) => port >= filters.builtInPorts[0] && port <= filters.builtInPorts[1]))
				return false;
			if (maxFrequency < filters.maxFrequency[0] || maxFrequency > filters.maxFrequency[1]) return false;
			if (
				!internalSources.some((source) => source >= filters.internalSources[0] && source <= filters.internalSources[1])
			)
				return false;
			if (filters.vnaSeries.length && !filters.vnaSeries.includes(vnaSeries)) return false;
			if (filters.vnaTypes.length && !filters.vnaTypes.includes(vnaType)) return false;
			return true;
		})
		.sort((a, b) => sortServices(filters, a, b));
</script>

<Layout pageTitle={l.title}>
	<SectionHeader title={l.title} count={services.length} />

	<div class="flex gap-10">
		<div class="w-1/4">
			<ListFilter title={l.specs.categories} list={categories} bind:values={filters.categories} />
			<RangeFilter title={l.specs.builtInPorts} unit="" max={maxBuiltInPorts} bind:values={filters.builtInPorts} />
			<RangeFilter title={l.specs.maxFrequency} unit="GHz" max={maxMaxFrequency} bind:values={filters.maxFrequency} />
			<RangeFilter
				title={l.specs.internalSources}
				unit=""
				max={maxInternalSources}
				bind:values={filters.internalSources}
			/>
			<ListFilter title={l.specs.vnaSeries} list={vnaSeries} bind:values={filters.vnaSeries} />
			<ListFilter title={l.specs.vnaTypes} list={vnaTypes} bind:values={filters.vnaTypes} />
		</div>

		<div class="w-full mt-4">
			<SearchSort
				bind:filters
				sortBys={[
					{ title: l.specs.title, value: 'title' },
					{ title: l.specs.category, value: 'category' },
					{ title: l.specs.maxFrequency, value: 'maxFrequency' },
					{ title: l.specs.vnaSeries, value: 'vnaSeries' },
					{ title: l.specs.vnaType, value: 'vnaType' }
				]}
			/>

			<div class="grid grid-cols-3 gap-10 mt-6">
				{#each filteredServices as service}
					{@const { href, builtInPorts, maxFrequency, internalSources, vnaSeries, vnaType } = service}
					<ProductCard
						{service}
						href="/services{$servicesStore.networkAnalyzers.href}{href}"
						specs={[
							{ title: l.specs.builtInPorts, value: builtInPorts.join(', ') },
							{
								title: l.specs.maxFrequency,
								value: maxFrequency < 1 ? `${maxFrequency * 1000} MHz` : `${maxFrequency} GHz`
							},
							{ title: l.specs.internalSources, value: internalSources.join(', ') },
							{ title: l.specs.vnaSeries, value: vnaSeries },
							{ title: l.specs.vnaType, value: vnaType }
						]}
					/>
				{/each}
			</div>
		</div>
	</div>
</Layout>
