<script lang="ts">
	import Icon from '@iconify/svelte';
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';
	import Dropzone from 'svelte-file-dropzone';

	$: l = $lg.instantQuote.gerberFile;
</script>

<FormItem {l}>
	<Dropzone
		multiple={false}
		accept="application/x-zip-compressed,application/x-rar-compressed"
		maxSize={1024 * 1024 * 20}
		on:drop={(e) => ($quote.file = e.detail.acceptedFiles[0])}
	>
		{#if $quote.file || $quote[$quote.productType].fileName}
			{@const name = $quote.file?.name ?? $quote[$quote.productType].fileName?.split('__')[1]}
			{@const size = $quote.file?.size}
			<Icon icon="mdi:file-check" width={36} class="text-success" />
			<div>File Uploaded Successfully</div>
			<div class="font-semibold">
				{name}
				{#if size}
					<span>- {(size / 1024 / 1024).toFixed(2)} MB</span>
				{/if}
			</div>
		{:else}
			<Icon icon="mdi:file-upload" width={36} />
			<div>Drag & Drop your files here or click to upload</div>
			<div class="text-sm">Only accepts zip or rar | Max file size: 20 MB</div>
		{/if}
	</Dropzone>
</FormItem>
