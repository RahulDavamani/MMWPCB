<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormControl from '../../../../components/FormControl.svelte';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.cnc.finishedAppearance;
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { l: { title, description }, value }}
			<div class="w-full">
				<FormControl inputType="In" label={title} labelClasses="font-semibold">
					<input
						type="radio"
						name="finishedAppearance"
						class="radio radio-xs radio-primary"
						{value}
						bind:group={$quote.products.cnc.finishedAppearance}
					/>
				</FormControl>
				<div class="text-sm opacity-90 text-gray-600">{description}</div>
			</div>
		{/each}
	</div>
</FormItem>
