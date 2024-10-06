<script lang="ts">
	import FormItem from '../../FormItem.svelte';
	import { lg } from '../../../../../stores/i18n.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormControl from '../../../../components/FormControl.svelte';
	import { afterUpdate } from 'svelte';
	import { productDetails } from '../../../../../stores/product.store';

	$: pd = $productDetails.standardPcb.quantity;
	$: isError = $quoteError.standardPcb.quantity;

	$: ({ length, width, quantity } = $quote.products.standardPcb);
	$: size = (length * width) / 1000000;

	afterUpdate(() => ($quote.products.standardPcb.quantity = size < 5 && !values.includes(quantity) ? 5 : quantity));

	let values = [
		5, 10, 15, 20, 25, 30, 40, 50, 75, 100, 125, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000, 1500,
		2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 9000, 10000
	];
</script>

<FormItem {pd} {isError}>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="dropdown">
		<div tabindex={0} class="my-1">
			<div class="join">
				<input
					type="number"
					class="input input-bordered input-sm w-24 join-item {isError && 'input-error'}"
					readonly
					value={$quote.products.standardPcb.quantity}
				/>
				<div class="btn btn-sm join-item pointer-events-none font-normal">{pd.l.pieces}</div>
			</div>
		</div>
		<div tabindex={0} class="dropdown-content bg-base-100 w-96 p-3 z-[1] rounded-box shadow border text-sm">
			<div class="grid grid-cols-5">
				{#each values as value}
					<FormControl inputType="In" label={value.toString()}>
						<input
							type="radio"
							class="radio radio-xs radio-primary"
							name="quantity"
							{value}
							bind:group={$quote.products.standardPcb.quantity}
						/>
					</FormControl>
				{/each}
			</div>
			<div class="divider">{$lg.common.or.toUpperCase()}</div>
			<FormControl bottomLabel="(Size ≥5m² to manually enter number)" bottomLabelClasses="text-secondary opacity-75">
				<input
					type="number"
					placeholder={pd.l.placeholder}
					class="input input-bordered input-sm w-full {isError && 'input-error'}"
					value={values.includes(quantity) ? '' : quantity}
					on:change={(e) => ($quote.products.standardPcb.quantity = Number(e.currentTarget.value))}
					disabled={size < 5}
				/>
			</FormControl>
		</div>
	</div>
</FormItem>
