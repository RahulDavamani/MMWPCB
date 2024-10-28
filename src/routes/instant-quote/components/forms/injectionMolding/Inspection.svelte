<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormControl from '../../../../components/FormControl.svelte';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.injectionMolding.inspection;
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { l: { title, description }, value }}
			<div class="w-full">
				<FormControl inputType="In" label={title} labelClasses="font-semibold">
					<input
						type="radio"
						name="inspection"
						class="radio radio-xs radio-primary"
						{value}
						bind:group={$quote.products.injectionMolding.inspection}
					/>
				</FormControl>
				<div class="text-sm opacity-90 text-gray-600 pl-8">
					<li>{description[0]}</li>
					<li>{description[1]}</li>
				</div>
			</div>
		{/each}
	</div>
</FormItem>
