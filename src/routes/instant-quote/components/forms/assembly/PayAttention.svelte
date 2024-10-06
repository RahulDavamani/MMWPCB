<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormControl from '../../../../components/FormControl.svelte';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.assembly;
</script>

<FormItem pd={{ l: $lg.instantQuote.assembly.payAttention }}>
	<div>
		<div>{pd.sensitiveParts.l.description}</div>
		<div class="flex gap-4">
			{#each pd.sensitiveParts.values as { title, value }}
				<FormControl inputType="In" label={title}>
					<input
						type="radio"
						class="radio radio-xs radio-primary"
						name="sensitiveParts"
						{value}
						bind:group={$quote.products.assembly.sensitiveParts}
					/>
				</FormControl>
			{/each}
		</div>
	</div>

	<div class="mt-2">
		<div>{pd.alternatesChina.l.description}</div>
		<div class="flex gap-4">
			{#each pd.alternatesChina.values as { title, value }}
				<FormControl inputType="In" label={title}>
					<input
						type="radio"
						class="radio radio-xs radio-primary"
						name="alternatesChina"
						{value}
						bind:group={$quote.products.assembly.alternatesChina}
					/>
				</FormControl>
			{/each}
		</div>
	</div>
</FormItem>
