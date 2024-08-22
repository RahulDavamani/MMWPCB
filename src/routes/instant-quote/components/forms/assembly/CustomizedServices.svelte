<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { Assembly } from '../../../../../zod/products/assembly.schema';
	import FormItem from '../../FormItem.svelte';
	import XrayTest from './XrayTest.svelte';

	$: l = $lg.instantQuote.assembly.customizedServices;
	$: ({ customizedServices } = $quote.assembly);

	$: values = [
		{ ...l.options.depanelBoards, value: 'DEPANEL_BOARDS' },
		{ ...l.options.functionTest, value: 'FUNCTION_TEST' },
		{ ...l.options.conformalCoating, value: 'CONFORMAL_COATING' },
		{ ...l.options.firmwareLoading, value: 'FIRMWARE_LOADING' },
		{ ...l.options.pressFit, value: 'PRESS_FIT' },
		{ ...l.options.boxBuild, value: 'BOX_BUILD' },
		{ ...l.options.cableWireHarness, value: 'CABLE_WIRE_HARNESS' },
		{ ...l.options.packageBox, value: 'PACKAGE_BOX' }
	] as {
		title?: string;
		description?: string;
		url?: string;
		imgSrc?: string;
		value: Assembly['customizedServices'][number];
	}[];

	let collapseOpen = false;
</script>

<div class="collapse collapse-arrow mt-6 {collapseOpen && 'overflow-visible'}">
	<input type="checkbox" class="peer" bind:checked={collapseOpen} />
	<div class="collapse-title bg-base-200 rounded-box font-semibold">{l.title}</div>
	<div class="collapse-content">
		<div class="my-4 text-sm text-secondary">{l.description}</div>

		<div class="flex flex-wrap gap-x-8 text-sm">
			{#each values as { value, ...l }}
				<FormItem {l} classes="items-center">
					<input
						type="checkbox"
						class="checkbox checkbox-primary checkbox-xs rounded-md"
						checked={customizedServices.includes(value)}
						on:click={() => {
							if (customizedServices.includes(value))
								$quote.assembly.customizedServices = customizedServices.filter((v) => v !== value);
							else $quote.assembly.customizedServices = [...customizedServices, value];
						}}
					/>
				</FormItem>
			{/each}
		</div>

		<XrayTest />
	</div>
</div>
