<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.material;
	$: ({ layers, material, surfaceFinish } = $quote.products.standardPcb);
	$: values = pd.values.map(({ value }) => value);

	const selectMaterial = (value: StandardPcb['material']) => {
		if (material !== value) {
			$quote.products.standardPcb.material = value;
			switch (value) {
				case 'FR_4':
					$quote.products.standardPcb = {
						...$quote.products.standardPcb,
						fr4TG: layers <= 2 ? 'TG150_160' : 'S1000H_TG150',
						rogers: undefined,
						thermalConductivity: undefined,
						thermoElectricSeparation: undefined,
						structureOfMCPCB: undefined
					};
					break;

				case 'ALUMINUM':
					$quote.products.standardPcb = {
						...$quote.products.standardPcb,
						fr4TG: undefined,
						rogers: undefined,
						thermalConductivity: 1,
						thermoElectricSeparation: undefined,
						structureOfMCPCB: layers > 1 ? 'METAL_CORE_MIDDLE' : undefined
					};
					break;

				case 'ROGERS':
					$quote.products.standardPcb = {
						...$quote.products.standardPcb,
						fr4TG: undefined,
						rogers: 'ROGERS_5880',
						thermalConductivity: undefined,
						thermoElectricSeparation: undefined,
						structureOfMCPCB: undefined
					};
					break;

				case 'HDI':
					$quote.products.standardPcb = {
						...$quote.products.standardPcb,
						fr4TG: 'S1000H_TG150',
						rogers: undefined,
						thermalConductivity: undefined,
						thermoElectricSeparation: undefined,
						structureOfMCPCB: undefined,
						surfaceFinish: surfaceFinish.includes('HASL') ? 'IMMERSION_GOLD' : surfaceFinish
					};
					break;

				case 'COPPER_BASE':
					$quote.products.standardPcb = {
						...$quote.products.standardPcb,
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

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, description, value }}
			{@const disabled =
				value === 'ALUMINUM' || value === 'COPPER_BASE' ? layers > 4 : value === 'HDI' ? layers < 4 : false}
			<button
				class="btn btn-primary {material !== value && 'btn-outline'} {disabled && 'btn-disabled'}"
				on:click={() => selectMaterial(value)}
			>
				<div class="flex flex-col">
					<span>{title}</span>
					{#if description}
						<span class="text-secondary text-xs">{description}</span>
					{/if}
				</div>
			</button>
		{/each}
		<button class="btn btn-primary {values.includes(material) && 'btn-outline'}">
			<input
				type="text"
				class="input input-bordered input-sm w-24 text-black text-center"
				value={values.includes(material) ? '' : material}
				on:change={(e) => {
					if (e.currentTarget.value.length === 0) $quote.products.standardPcb.material = 'FR_4';
					else $quote.products.standardPcb.material = e.currentTarget.value;
				}}
			/>
		</button>
	</div>
</FormItem>
