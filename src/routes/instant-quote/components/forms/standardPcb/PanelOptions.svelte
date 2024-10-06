<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormControl from '../../../../components/FormControl.svelte';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb;
	$: ({ xoutAllowance, breakAwayRail, routeProcess, panelRequirements } = $quote.products.standardPcb);
</script>

{#if xoutAllowance !== undefined && xoutAllowance !== null}
	<FormItem pd={pd.xoutAllowance}>
		<div class="flex text-sm">
			{#each pd.xoutAllowance.values as { title, value }}
				<FormControl inputType="In" label={title}>
					<input
						type="radio"
						name="xoutAllowance"
						class="radio radio-primary radio-xs"
						{value}
						bind:group={$quote.products.standardPcb.xoutAllowance}
					/>
				</FormControl>
			{/each}
		</div>
	</FormItem>
{/if}

{#if routeProcess && breakAwayRail !== undefined}
	<div class="grid grid-cols-2">
		{#if routeProcess}
			<FormItem pd={pd.routeProcess}>
				<select class="select select-bordered select-sm" bind:value={$quote.products.standardPcb.routeProcess}>
					{#each pd.routeProcess.values as { title, value }}
						<option {value}>{title}</option>
					{/each}
				</select>
			</FormItem>
		{/if}

		{#if breakAwayRail !== undefined}
			<FormItem pd={pd.breakAwayRail}>
				<div class="flex text-sm">
					{#each pd.breakAwayRail.values as { title, value }}
						<FormControl inputType="In" label={title}>
							<input
								type="radio"
								name="breakAwayRail"
								class="radio radio-primary radio-xs"
								{value}
								bind:group={$quote.products.standardPcb.breakAwayRail}
							/>
						</FormControl>
					{/each}
				</div>
			</FormItem>
		{/if}
	</div>
{/if}

{#if panelRequirements !== undefined && panelRequirements !== null}
	<FormItem pd={pd.panelRequirements}>
		<textarea
			class="textarea textarea-bordered textarea-sm w-full"
			bind:value={$quote.products.standardPcb.panelRequirements}
		/>
	</FormItem>
{/if}
