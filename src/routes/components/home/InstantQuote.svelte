<script lang="ts">
	import Icon from '@iconify/svelte';
	import { productDetails, productTypes, type ProductType } from '../../../stores/product.store';
	import { goto } from '$app/navigation';
	import type { StandardPcbPartial } from '../../../zod/products/standardPcb.schema';
	import type { AdvancedPcbPartial } from '../../../zod/products/advancedPcb.schema';
	import type { FlexiblePcbPartial } from '../../../zod/products/flexiblePcb.schema';
	import type { RigidFlexPartial } from '../../../zod/products/rigidFlex.schema';
	import type { AssemblyPartial } from '../../../zod/products/assembly.schema';
	import type { StencilPartial } from '../../../zod/products/stencil.schema';
	import type { CNCPartial } from '../../../zod/products/cnc.schema';
	import type { SheetMetalPartial } from '../../../zod/products/sheetMetal.schema';
	import type { ThreePrintingPartial } from '../../../zod/products/threePrinting.schema';
	import type { InjectionMoldingPartial } from '../../../zod/products/injectionMolding.schema';
	import type { VacuumCastingPartial } from '../../../zod/products/vacuumCasting.schema';
	import { lg } from '../../../stores/i18n.store';
	import FormControl from '../FormControl.svelte';
	import { quote as quoteStore } from '../../../stores/quote.store';

	$: l = $lg.home;

	let productType: ProductType = 'standardPcb';

	let quote: {
		standardPcb: StandardPcbPartial;
		advancedPcb: AdvancedPcbPartial;
		flexiblePcb: FlexiblePcbPartial;
		rigidFlex: RigidFlexPartial;
		assembly: AssemblyPartial;
		stencil: StencilPartial;
		cnc: CNCPartial;
		sheetMetal: SheetMetalPartial;
		threePrinting: ThreePrintingPartial;
		injectionMolding: InjectionMoldingPartial;
		vacuumCasting: VacuumCastingPartial;
	} = {
		standardPcb: {
			length: 0,
			width: 0,
			quantity: 5,
			layers: 2,
			thickness: 1.6
		},
		advancedPcb: {
			length: 0,
			width: 0,
			quantity: 5,
			layers: 2,
			thickness: 1.6
		},
		flexiblePcb: {
			length: 0,
			width: 0,
			quantity: 5,
			layers: 2
		},
		rigidFlex: {
			length: 0,
			width: 0,
			quantity: 5,
			layers: 2
		},
		assembly: {
			quantity: 5,
			solderPads: 0
		},
		stencil: {
			type: 'FRAMEWORK',
			length: 370,
			width: 470,
			side: 'TOP_SIDE',
			quantity: 5
		},
		cnc: {
			quantity: [1],
			material: 'ALUMINUM'
		},
		sheetMetal: {
			quantity: [1],
			material: 'ALUMINUM'
		},
		threePrinting: {
			quantity: [1],
			material: 'ALUMINUM'
		},
		injectionMolding: {
			quantity: 1000,
			material: 'ABS'
		},
		vacuumCasting: {
			quantity: [1000],
			material: 'ABS'
		}
	};

	let stencilSize: { length: number; width: number; vaLength: number; vaWidth: number };
	$: quote.stencil.length = stencilSize?.length;
	$: quote.stencil.width = stencilSize?.width;

	const quoteNow = async () => {
		await goto('/instant-quote');
		$quoteStore.productType = productType;
		// @ts-ignore
		$quoteStore.products[productType] = { ...$quoteStore.products[productType], ...quote[productType] };
	};
</script>

<div class="border rounded-box shadow">
	<div class="join flex rounded-b-none">
		{#each Object.values($productTypes).slice(0, 6) as { key, title }, i}
			<input
				type="radio"
				name="productType"
				aria-label={title}
				value={key}
				class="btn join-item grow border-primary border-t-0 border-r-0 text-base {i === 0 && 'border-l-0'}"
				bind:group={productType}
			/>
		{/each}
	</div>
	<div class="join flex rounded-none">
		{#each Object.values($productTypes).slice(6, 11) as { key, title }, i}
			<input
				type="radio"
				name="productType"
				aria-label={title}
				value={key}
				class="btn join-item grow border-primary border-y-0 border-r-0 text-base {i === 0 && 'border-l-0'}"
				bind:group={productType}
			/>
		{/each}
	</div>

	<div class="p-4">
		<div class="text-xl font-bold text-primary">Instant Quote</div>
		<div class="text-sm opacity-70 mb-2">Full feature prototype PCB custom service at low cost</div>
		{#if productType === 'standardPcb'}
			{@const pd = $productDetails.standardPcb}

			<div class="flex gap-12">
				<FormControl classes="w-1/2" label={$lg.instantQuote.standardPcb.size.title}>
					<div class="join">
						<input
							type="text"
							class="input input-bordered join-item grow"
							placeholder={pd.length.l.title}
							bind:value={quote.standardPcb.length}
						/>
						<div class="btn join-item">X</div>
						<input
							type="text"
							class="input input-bordered join-item grow"
							placeholder={pd.width.l.title}
							bind:value={quote.standardPcb.width}
						/>
						<div class="btn join-item">mm</div>
					</div>
				</FormControl>

				<FormControl classes="w-1/2" label={pd.quantity.l.title}>
					<select class="select select-bordered" bind:value={quote.standardPcb.quantity}>
						{#each pd.quantity.values.slice(0, 10) as value}
							<option {value}>{value}</option>
						{/each}
					</select>
				</FormControl>
			</div>

			<div class="flex gap-12 mt-6">
				<FormControl classes="w-1/2" label={pd.layers.l.title}>
					<select class="select select-bordered" bind:value={quote.standardPcb.layers}>
						{#each pd.layers.values as value}
							<option {value}>{pd.layers.parseValue(value)}</option>
						{/each}
					</select>
				</FormControl>

				<FormControl classes="w-1/2" label={pd.thickness.l.title}>
					<select class="select select-bordered" bind:value={quote.standardPcb.thickness}>
						{#each pd.thickness.values as value}
							<option {value}>{pd.thickness.parseValue(value)}</option>
						{/each}
					</select>
				</FormControl>
			</div>
		{:else if productType === 'advancedPcb'}
			{@const pd = $productDetails.advancedPcb}
			<div class="flex gap-12">
				<FormControl classes="w-1/2" label={$lg.instantQuote.advancedPcb.size.title}>
					<div class="join">
						<input
							type="text"
							class="input input-bordered join-item grow"
							placeholder={pd.length.l.title}
							bind:value={quote.advancedPcb.length}
						/>
						<div class="btn join-item">X</div>
						<input
							type="text"
							class="input input-bordered join-item grow"
							placeholder={pd.width.l.title}
							bind:value={quote.advancedPcb.width}
						/>
						<div class="btn join-item">mm</div>
					</div>
				</FormControl>

				<FormControl classes="w-1/2" label={pd.quantity.l.title}>
					<input
						type="number"
						class="input input-bordered join-item grow"
						placeholder={pd.quantity.l.title}
						bind:value={quote.advancedPcb.quantity}
					/>
				</FormControl>
			</div>

			<div class="flex gap-12 mt-6">
				<FormControl classes="w-1/2" label={pd.layers.l.title}>
					<select class="select select-bordered" bind:value={quote.advancedPcb.layers}>
						{#each pd.layers.values as value}
							<option {value}>{pd.layers.parseValue(value)}</option>
						{/each}
					</select>
				</FormControl>

				<FormControl classes="w-1/2" label={pd.thickness.l.title}>
					<select class="select select-bordered" bind:value={quote.advancedPcb.thickness}>
						{#each pd.thickness.values as value}
							<option {value}>{pd.thickness.parseValue(value)}</option>
						{/each}
					</select>
				</FormControl>
			</div>
		{:else if productType === 'flexiblePcb'}
			{@const pd = $productDetails.flexiblePcb}
			<div class="flex gap-12">
				<FormControl classes="w-1/2" label={$lg.instantQuote.flexiblePcb.size.title}>
					<div class="join">
						<input
							type="text"
							class="input input-bordered join-item grow"
							placeholder={pd.length.l.title}
							bind:value={quote.flexiblePcb.length}
						/>
						<div class="btn join-item">X</div>
						<input
							type="text"
							class="input input-bordered join-item grow"
							placeholder={pd.width.l.title}
							bind:value={quote.flexiblePcb.width}
						/>
						<div class="btn join-item">mm</div>
					</div>
				</FormControl>

				<FormControl classes="w-1/2" label={pd.quantity.l.title}>
					<input
						type="number"
						class="input input-bordered join-item grow"
						placeholder={pd.quantity.l.title}
						bind:value={quote.flexiblePcb.quantity}
					/>
				</FormControl>
			</div>

			<div class="flex gap-12 mt-6">
				<FormControl classes="w-1/2" label={pd.layers.l.title}>
					<select class="select select-bordered" bind:value={quote.flexiblePcb.layers}>
						{#each pd.layers.values as value}
							<option {value}>{pd.layers.parseValue(value)}</option>
						{/each}
					</select>
				</FormControl>
			</div>
		{:else if productType === 'rigidFlex'}
			{@const pd = $productDetails.rigidFlex}
			<div class="flex gap-12">
				<FormControl classes="w-1/2" label={$lg.instantQuote.rigidFlex.size.title}>
					<div class="join">
						<input
							type="text"
							class="input input-bordered join-item grow"
							placeholder={pd.length.l.title}
							bind:value={quote.rigidFlex.length}
						/>
						<div class="btn join-item">X</div>
						<input
							type="text"
							class="input input-bordered join-item grow"
							placeholder={pd.width.l.title}
							bind:value={quote.rigidFlex.width}
						/>
						<div class="btn join-item">mm</div>
					</div>
				</FormControl>

				<FormControl classes="w-1/2" label={pd.quantity.l.title}>
					<input
						type="number"
						class="input input-bordered join-item grow"
						placeholder={pd.quantity.l.title}
						bind:value={quote.rigidFlex.quantity}
					/>
				</FormControl>
			</div>

			<div class="flex gap-12 mt-6">
				<FormControl classes="w-1/2" label={pd.layers.l.title}>
					<select class="select select-bordered" bind:value={quote.flexiblePcb.layers}>
						{#each pd.layers.values as value}
							<option {value}>{pd.layers.parseValue(value)}</option>
						{/each}
					</select>
				</FormControl>
			</div>
		{:else if productType === 'assembly'}
			{@const pd = $productDetails.assembly}

			<div class="flex gap-12">
				<FormControl classes="w-1/2" label={pd.quantity.l.title}>
					<input type="number" class="input input-bordered" bind:value={quote.assembly.quantity} />
				</FormControl>
				<FormControl classes="w-1/2" label={pd.solderPads.l.title}>
					<input type="number" class="input input-bordered" bind:value={quote.assembly.solderPads} />
				</FormControl>
			</div>
		{:else if productType === 'stencil'}
			{@const pd = $productDetails.stencil}

			<div class="flex gap-12">
				<FormControl classes="w-1/2" label={pd.type.l.title}>
					<div class="flex">
						{#each pd.type.values as { title, value }}
							<FormControl classes="grow" inputType="In" label={title}>
								<input
									type="radio"
									name="stencilType"
									class="radio radio-sm radio-primary"
									{value}
									bind:group={quote.stencil.type}
								/>
							</FormControl>
						{/each}
					</div>
				</FormControl>

				<FormControl classes="w-1/2" label={$lg.instantQuote.stencil.size.title}>
					<select class="select select-bordered" bind:value={stencilSize}>
						{#each pd.length.values as value}
							<option {value}>
								{value.length} x {value.width}mm (Valid area {value.vaLength} x {value.vaWidth}mm)
							</option>
						{/each}
					</select>
				</FormControl>
			</div>
			<div class="flex gap-12 mt-6">
				<FormControl classes="w-1/2" label={pd.side.l.title}>
					<select class="select select-bordered" bind:value={quote.stencil.side}>
						{#each pd.side.values as { title, value }}
							<option {value}>{title}</option>
						{/each}
					</select>
				</FormControl>

				<FormControl classes="w-1/2" label={pd.quantity.l.title}>
					<input type="number" class="input input-bordered" bind:value={quote.stencil.quantity} />
				</FormControl>
			</div>
		{:else if productType === 'cnc'}
			{@const pd = $productDetails.cnc}
			<div class="flex gap-12">
				<FormControl classes="w-1/2" label={pd.quantity.l.title}>
					<input
						type="number"
						class="input input-bordered join-item grow"
						placeholder={pd.quantity.l.title}
						bind:value={quote.cnc.quantity}
					/>
				</FormControl>
				<FormControl classes="w-1/2" label={pd.material.l.title}>
					<select class="select select-bordered" bind:value={quote.cnc.material}>
						{#each pd.material.values as { title, value }}
							<option {value}>{title}</option>
						{/each}
					</select>
				</FormControl>
			</div>
		{:else if productType === 'sheetMetal'}
			{@const pd = $productDetails.sheetMetal}
			<div class="flex gap-12">
				<FormControl classes="w-1/2" label={pd.quantity.l.title}>
					<input
						type="number"
						class="input input-bordered join-item grow"
						placeholder={pd.quantity.l.title}
						bind:value={quote.sheetMetal.quantity}
					/>
				</FormControl>
				<FormControl classes="w-1/2" label={pd.material.l.title}>
					<select class="select select-bordered" bind:value={quote.sheetMetal.material}>
						{#each pd.material.values as { title, value }}
							<option {value}>{title}</option>
						{/each}
					</select>
				</FormControl>
			</div>
		{:else if productType === 'threePrinting'}
			{@const pd = $productDetails.threePrinting}
			<div class="flex gap-12">
				<FormControl classes="w-1/2" label={pd.quantity.l.title}>
					<input
						type="number"
						class="input input-bordered join-item grow"
						placeholder={pd.quantity.l.title}
						bind:value={quote.threePrinting.quantity}
					/>
				</FormControl>
				<FormControl classes="w-1/2" label={pd.material.l.title}>
					<select class="select select-bordered" bind:value={quote.threePrinting.material}>
						{#each pd.material.values as { title, value }}
							<option {value}>{title}</option>
						{/each}
					</select>
				</FormControl>
			</div>
		{:else if productType === 'injectionMolding'}
			{@const pd = $productDetails.injectionMolding}
			<div class="flex gap-12">
				<FormControl classes="w-1/2" label={pd.quantity.l.title}>
					<input
						type="number"
						class="input input-bordered join-item grow"
						placeholder={pd.quantity.l.title}
						bind:value={quote.injectionMolding.quantity}
					/>
				</FormControl>
				<FormControl classes="w-1/2" label={pd.material.l.title}>
					<select class="select select-bordered" bind:value={quote.injectionMolding.material}>
						{#each pd.material.values as { title, value }}
							<option {value}>{title}</option>
						{/each}
					</select>
				</FormControl>
			</div>
		{:else if productType === 'vacuumCasting'}
			{@const pd = $productDetails.vacuumCasting}
			<div class="flex gap-12">
				<FormControl classes="w-1/2" label={pd.quantity.l.title}>
					<input
						type="number"
						class="input input-bordered join-item grow"
						placeholder={pd.quantity.l.title}
						bind:value={quote.vacuumCasting.quantity}
					/>
				</FormControl>
				<FormControl classes="w-1/2" label={pd.material.l.title}>
					<select class="select select-bordered" bind:value={quote.vacuumCasting.material}>
						{#each pd.material.values as { title, value }}
							<option {value}>{title}</option>
						{/each}
					</select>
				</FormControl>
			</div>
		{/if}

		<div class="flex justify-end mt-6">
			<button class="btn btn-secondary btn-wide text-base" on:click={quoteNow}>
				<Icon icon="mdi:calculator" width={24} />
				{l.instantQuote}
			</button>
		</div>
	</div>
</div>
