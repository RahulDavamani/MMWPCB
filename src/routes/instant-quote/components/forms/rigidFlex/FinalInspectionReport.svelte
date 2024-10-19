<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.rigidFlex.finalInspectionReport;
	$: ({ finalInspectionReport } = $quote.products.rigidFlex);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {!finalInspectionReport.includes(value) && 'btn-outline'}"
				on:click={() => {
					if (finalInspectionReport.includes(value))
						$quote.products.rigidFlex.finalInspectionReport = finalInspectionReport.filter((v) => v !== value);
					else $quote.products.rigidFlex.finalInspectionReport = [...finalInspectionReport, value];
				}}
			>
				<input
					type="checkbox"
					class="checkbox checkbox-xs checkbox-accent"
					checked={finalInspectionReport.includes(value)}
				/>
				{title}
			</button>
		{/each}
	</div>
</FormItem>
