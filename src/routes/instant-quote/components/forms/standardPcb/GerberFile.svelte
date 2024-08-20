<script lang="ts">
	import Icon from '@iconify/svelte';
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';
	import Dropzone from 'svelte-file-dropzone';

	$: l = $lg.instantQuote.standardPcb.fileName;
</script>

<FormItem {l}>
	<Dropzone
		multiple={false}
		accept="application/x-zip-compressed,application/x-rar-compressed"
		maxSize={1024 * 1024 * 20}
		on:drop={(e) => ($quote.file = e.detail.acceptedFiles[0])}
	>
		{#if $quote.file}
			{@const { name, size } = $quote.file}
			<Icon icon="mdi:file-check" width={36} class="text-success" />
			<div>File Uploaded Successfully</div>
			<div class="font-semibold">{name} - {(size / 1024 / 1024).toFixed(2)} MB</div>
		{:else}
			<Icon icon="mdi:file-upload" width={36} />
			<div>Drag & Drop your files here or click to upload</div>
			<div class="text-sm">Only accepts zip or rar | Max file size: 20 MB</div>
		{/if}
	</Dropzone>
</FormItem>
