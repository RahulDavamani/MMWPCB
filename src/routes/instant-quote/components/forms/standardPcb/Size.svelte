<script lang="ts">
	import FormItem from '../../FormItem.svelte';
	import Icon from '@iconify/svelte';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import { lg } from '../../../../../stores/i18n.store';

	$: l = $lg.instantQuote.standardPcb;

	$: ({ length, width } = $quote.products.standardPcb);
	$: size = (length * width) / 1000000;

	$: lengthError = $quoteError.standardPcb.length;
	$: widthError = $quoteError.standardPcb.width;
	$: isError = lengthError || widthError;

	$: pd = { l: l.size, url: '' };
</script>

<FormItem {pd} {isError}>
	<div class="flex justify-between items-start gap-2">
		<div>
			<div class="flex">
				<label class="input input-bordered input-sm {lengthError && 'input-error'} flex items-center gap-2">
					<input
						type="number"
						class="grow w-full"
						placeholder={l.length.title}
						bind:value={$quote.products.standardPcb.length}
					/>
					<span class="opacity-75">mm</span>
				</label>
				<div class="flex items-center gap-2">
					<Icon icon="mdi:multiply" />
					<label class="input input-bordered input-sm {widthError && 'input-error'} flex items-center gap-2">
						<input
							type="number"
							class="grow w-full"
							placeholder={l.width.title}
							bind:value={$quote.products.standardPcb.width}
						/>
						<span class="opacity-75">mm</span>
					</label>
				</div>
			</div>

			<div class="flex items-center gap-2 mt-2">
				<Icon icon="mdi:equal" />
				<label class="input input-bordered input-sm flex items-center gap-2">
					<input type="number" class="grow w-full" value={size} readonly />
					<span class="opacity-75">m²</span>
				</label>
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div class="dropdown dropdown-end ml-auto">
				<div tabindex={0} class="btn btn-sm btn-accent w-28">
					cm <Icon icon="mdi:swap-horizontal" width={18} /> mm
				</div>
				<div tabindex={0} class="dropdown-content bg-base-100 w-96 p-3 z-[1] rounded-box shadow border text-sm mt-1">
					<div class="flex items-center gap-2">
						<label class="input input-bordered input-sm flex items-center gap-2">
							<input
								type="number"
								class="grow w-24"
								placeholder={l.length.title}
								value={parseFloat((length * 0.1).toFixed(4))}
								on:change={(e) => ($quote.products.standardPcb.length = Number(e.currentTarget.value) / 0.1)}
							/>
							<span class="opacity-75">inch</span>
						</label>
						<Icon icon="mdi:multiply" />
						<label class="input input-bordered input-sm flex items-center gap-2">
							<input
								type="number"
								class="grow w-24"
								placeholder={l.width.title}
								value={parseFloat((width * 0.1).toFixed(4))}
								on:change={(e) => ($quote.products.standardPcb.width = Number(e.currentTarget.value) / 0.1)}
							/>
							<span class="opacity-75">inch</span>
						</label>
					</div>
				</div>
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div class="dropdown dropdown-end ml-auto">
				<div tabindex={0} class="btn btn-sm btn-accent w-28">
					mm <Icon icon="mdi:swap-horizontal" width={18} /> m
				</div>
				<div tabindex={0} class="dropdown-content bg-base-100 w-96 p-3 z-[1] rounded-box shadow border text-sm mt-1">
					<div class="flex items-center gap-2">
						<label class="input input-bordered input-sm flex items-center gap-2">
							<input
								type="number"
								class="grow w-24"
								placeholder={l.length.title}
								value={parseFloat((length * 0.001).toFixed(4))}
								on:change={(e) => ($quote.products.standardPcb.length = Number(e.currentTarget.value) / 0.001)}
							/>
							<span class="opacity-75">inch</span>
						</label>
						<Icon icon="mdi:multiply" />
						<label class="input input-bordered input-sm flex items-center gap-2">
							<input
								type="number"
								class="grow w-24"
								placeholder={l.width.title}
								value={parseFloat((width * 0.001).toFixed(4))}
								on:change={(e) => ($quote.products.standardPcb.width = Number(e.currentTarget.value) / 0.001)}
							/>
							<span class="opacity-75">inch</span>
						</label>
					</div>
				</div>
			</div>
		</div>
	</div>
</FormItem>
