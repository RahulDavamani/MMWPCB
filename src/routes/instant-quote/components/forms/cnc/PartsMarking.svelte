<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.cnc;
	$: pd = $productDetails.cnc;
	$: ({ silkScreen } = $quote.products.cnc);
</script>

<FormItem pd={{ l: l.partMarking }}>
	<FormItem pd={{ l: l.silkScreen }} classes="items-start mb-4">
		<div class="flex flex-wrap gap-4">
			{#each pd.silkScreen.values as { value, color }}
				<button
					class="btn btn-xs btn-primary {silkScreen !== value && 'btn-outline'}"
					on:click={() => ($quote.products.cnc.silkScreen = value)}
				>
					{#if value === 'NONE'}
						{$lg.common.none}
					{:else}
						<div class="{color} w-3 h-3 border rounded" />
						{value}
					{/if}
				</button>
			{/each}
			<button
				class="btn btn-sm btn-primary
            {pd.silkScreen.values.map(({ value }) => value).includes(silkScreen) && 'btn-outline'}"
			>
				<input
					type="string"
					class="input input-bordered input-xs w-14 text-black text-center"
					value={pd.silkScreen.values.map(({ value }) => value).includes(silkScreen) ? '' : silkScreen}
					on:change={(e) => ($quote.products.cnc.silkScreen = e.currentTarget.value)}
				/>
			</button>
		</div>
	</FormItem>
	<FormItem pd={{ l: l.laserEngraving }} classes="items-start">
		<input
			type="checkbox"
			class="checkbox checkbox-primary checkbox-sm"
			bind:checked={$quote.products.cnc.laserEngraving}
		/>
	</FormItem>
</FormItem>
