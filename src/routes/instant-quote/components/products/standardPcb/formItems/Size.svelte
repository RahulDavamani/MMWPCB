<script lang="ts">
	import FormItem from '../../../FormItem.svelte';
	import { lg } from '../../../../../../stores/i18n.store';
	import Icon from '@iconify/svelte';
	import { quote } from '../../../../../../stores/quote.store';

	$: l = $lg.instantQuote.standardPcb.size;

	$: ({ length, width } = $quote.standardPcb);
	$: size = (length * width) / 1000000;
</script>

<FormItem title={l.title} moreInfo={{ description: l.description, url: '' }}>
	<div class="flex flex-wrap items-center gap-2">
		<label class="input input-bordered input-sm flex items-center gap-2">
			<input type="number" class="grow w-20" placeholder={l.length} bind:value={$quote.standardPcb.length} />
			<span class="opacity-75">mm</span>
		</label>
		<div class="flex items-center gap-2">
			<Icon icon="mdi:multiply" />
			<label class="input input-bordered input-sm flex items-center gap-2">
				<input type="number" class="grow w-20" placeholder={l.width} bind:value={$quote.standardPcb.width} />
				<span class="opacity-75">mm</span>
			</label>
		</div>
		<div class="flex items-center gap-2">
			<Icon icon="mdi:equal" />
			<label class="input input-bordered input-sm flex items-center gap-2">
				<input type="number" class="grow w-32" placeholder={l.width} value={parseFloat(size.toFixed(4))} readonly />
				<span class="opacity-75">m²</span>
			</label>
		</div>
	</div>

	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="dropdown dropdown-hover dropdown-end ml-auto">
		<div tabindex={0} class="btn btn-sm btn-accent">
			inch <Icon icon="mdi:swap-horizontal" width={18} /> mm
		</div>
		<div tabindex={0} class="dropdown-content bg-base-100 w-96 p-3 z-[1] rounded-box shadow border text-sm mt-1">
			<div class="flex items-center gap-2">
				<label class="input input-bordered input-sm flex items-center gap-2">
					<input
						type="number"
						class="grow w-24"
						placeholder={l.length}
						value={parseFloat((length * 0.03937).toFixed(4))}
						on:change={(e) => ($quote.standardPcb.length = Number(e.currentTarget.value) / 0.03937)}
					/>
					<span class="opacity-75">inch</span>
				</label>
				<Icon icon="mdi:multiply" />
				<label class="input input-bordered input-sm flex items-center gap-2">
					<input
						type="number"
						class="grow w-24"
						placeholder={l.width}
						value={parseFloat((width * 0.03937).toFixed(4))}
						on:change={(e) => ($quote.standardPcb.width = Number(e.currentTarget.value) / 0.03937)}
					/>
					<span class="opacity-75">inch</span>
				</label>
			</div>
		</div>
	</div>
</FormItem>
