<script lang="ts">
	import Icon from '@iconify/svelte';
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote, quoteError } from '../../../../../../stores/quote.store';
	import FormItem from '../../../FormItem.svelte';

	let fileInput: HTMLInputElement;
	let files: FileList | undefined;
	$: $quote.file = files?.item(0) ?? undefined;

	$: $quote.standardPcb.fileName = $quote.file
		? $quote.file?.type === 'application/x-zip-compressed' || $quote.file?.type === 'application/x-rar-compressed'
			? ''
			: 'error'
		: undefined;

	$: ({ title, description } = $lg.instantQuote.standardPcb.file);
	$: error = $quoteError.standardPcb.fileName;
</script>

<FormItem {title} moreInfo={{ description }} {error}>
	<div class="join">
		<input
			bind:this={fileInput}
			type="file"
			accept=".zip,.rar"
			class="file-input file-input-bordered file-input-sm {error ? 'file-input-error' : 'file-input-primary'} join-item"
			bind:files
		/>
		<button
			class="btn btn-sm btn-error btn-outline btn-square join-item"
			on:click={() => {
				files = undefined;
				fileInput.value = '';
			}}
		>
			<Icon icon="mdi:remove" width={16} />
		</button>
	</div>
</FormItem>
