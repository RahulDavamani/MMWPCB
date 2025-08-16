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

	$: section = $servicesStore.circuitTestPlatforms;
	$: services = Object.values(section.services);
	$: l = section.l;

	let filters = {
		search: '',
		sortBy: 'title',
		sortOrder: true,

		categories: [] as string[],
		frequency: [0, 0]
	};

	$: categories = getValues(services, 'category');
	$: maxFrequency = getMax(services, 'maxFrequency');

	onMount(() => {
		filters.frequency[1] = maxFrequency;
	});

	$: filteredServices = services
		.filter(({ l: { title }, category, minFrequency, maxFrequency }) => {
			if (!title.toLowerCase().includes(filters.search.toLowerCase())) return false;
			if (filters.categories.length && !filters.categories.includes(category)) return false;
			if (filters.frequency[0] > minFrequency || filters.frequency[1] < maxFrequency) return false;
			return true;
		})
		.sort((a, b) => sortServices(filters, a, b));
</script>

<Layout pageTitle={l.title}>
	<SectionHeader title={l.title} count={services.length} />

	<div class="flex flex-col md:flex-row gap-10">
		<div class="w-full md:w-1/4">
			<ListFilter title={l.specs.categories} list={categories} bind:values={filters.categories} />
			<RangeFilter title={l.specs.frequency} unit="GHz" max={maxFrequency} bind:values={filters.frequency} />
		</div>

		<div class="w-full mt-4">
			<SearchSort
				bind:filters
				sortBys={[
					{ title: l.specs.title, value: 'title' },
					{ title: l.specs.category, value: 'category' },
					{ title: l.specs.frequency, value: 'maxFrequency' }
				]}
			/>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
				{#each filteredServices as service}
					{@const { code, minFrequency, maxFrequency } = service}
					<ProductCard
						{service}
						href="/services/{$servicesStore.circuitTestPlatforms.code}/{code}"
						specs={[
							{
								title: l.specs.frequency,
								value: `${minFrequency} - ${maxFrequency} GHz`
							}
						]}
					/>
				{/each}
			</div>
		</div>
	</div>
</Layout>
