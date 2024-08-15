<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.material;
	$: ({ layers, material, surfaceFinish } = $quote.standardPcb);

	$: values = [
		{
			name: l.options.fr4,
			value: 'FR_4'
		},
		{
			name: l.options.aluminum,
			description: `≤4 ${$lg.instantQuote.standardPcb.layers.layers}`,
			value: 'ALUMINUM'
		},
		{
			name: l.options.rogers,
			value: 'ROGERS'
		},
		{
			name: l.options.hdi,
			description: `≥4 ${$lg.instantQuote.standardPcb.layers.layers}`,
			value: 'HDI'
		},
		{
			name: l.options.copperBase,
			description: `≤4 ${$lg.instantQuote.standardPcb.layers.layers}`,
			value: 'COPPER_BASE'
		}
	] as { name: string; description?: string; value: StandardPcb['material'] }[];

	const selectMaterial = (value: StandardPcb['material']) => {
		if (material !== value) {
			$quote.standardPcb.material = value;
			switch (value) {
				case 'FR_4':
					$quote.standardPcb = {
						...$quote.standardPcb,
						fr4TG: layers <= 2 ? 'TG150_160' : 'S1000H_TG150',
						rogers: undefined,
						thermalConductivity: undefined,
						thermoElectricSeparation: undefined,
						structureOfMCPCB: undefined
					};
					break;

				case 'ALUMINUM':
					$quote.standardPcb = {
						...$quote.standardPcb,
						fr4TG: undefined,
						rogers: undefined,
						thermalConductivity: 1,
						thermoElectricSeparation: undefined,
						structureOfMCPCB: layers > 1 ? 'METAL_CORE_MIDDLE' : undefined
					};
					break;

				case 'ROGERS':
					$quote.standardPcb = {
						...$quote.standardPcb,
						fr4TG: undefined,
						rogers: 'ROGERS_4003C',
						thermalConductivity: undefined,
						thermoElectricSeparation: undefined,
						structureOfMCPCB: undefined
					};
					break;

				case 'HDI':
					$quote.standardPcb = {
						...$quote.standardPcb,
						fr4TG: 'S1000H_TG150',
						rogers: undefined,
						thermalConductivity: undefined,
						thermoElectricSeparation: undefined,
						structureOfMCPCB: undefined,
						surfaceFinish: surfaceFinish.includes('HASL') ? 'IMMERSION_GOLD' : surfaceFinish
					};
					break;

				case 'COPPER_BASE':
					$quote.standardPcb = {
						...$quote.standardPcb,
						fr4TG: undefined,
						rogers: undefined,
						thermalConductivity: 2,
						thermoElectricSeparation: false,
						structureOfMCPCB: layers > 1 ? 'METAL_CORE_MIDDLE' : undefined,
						surfaceFinish: surfaceFinish.includes('HASL') ? 'IMMERSION_GOLD' : surfaceFinish
					};
					break;
			}
		}
	};
</script>

<FormItem title={l.title} moreInfo={{ description: l.description }}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, description, value }}
			{@const disabled =
				value === 'ALUMINUM' || value === 'COPPER_BASE' ? layers > 4 : value === 'HDI' ? layers < 4 : false}
			<button
				class="btn btn-primary {material !== value && 'btn-outline'} {disabled && 'btn-disabled'}"
				on:click={() => selectMaterial(value)}
			>
				<div class="flex flex-col">
					<span>{name}</span>
					{#if description}
						<span class="text-secondary text-xs">{description}</span>
					{/if}
				</div>
			</button>
		{/each}
	</div>
</FormItem>

<div class="ml-44 mb-6 text-secondary text-sm">{l.disclaimer}</div>
