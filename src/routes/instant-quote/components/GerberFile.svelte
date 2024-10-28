<script lang="ts">
	import Icon from '@iconify/svelte';
	import { lg } from '../../../stores/i18n.store';
	import { quote } from '../../../stores/quote.store';
	import FormItem from './FormItem.svelte';
	import Dropzone from 'svelte-file-dropzone';
	import { supabase } from '$lib/client/supabase';

	$: l = $lg.instantQuote.fileDrop;
</script>

<FormItem pd={{ l: $lg.instantQuote.gerberFile }}>
	<Dropzone
		multiple={false}
		accept="application/x-zip-compressed,application/x-rar-compressed"
		maxSize={1024 * 1024 * 20}
		on:drop={(e) => ($quote.files[$quote.productType] = e.detail.acceptedFiles[0])}
	>
		{#if $quote.files[$quote.productType] || $quote.products[$quote.productType].fileName}
			{@const name =
				$quote.files[$quote.productType]?.name ?? $quote.products[$quote.productType].fileName?.split('__')[1]}
			<Icon icon="mdi:file-check" width={36} class="text-success" />
			<div>{l.fileUploaded}</div>
			<div class="font-semibold">{name}</div>
		{:else}
			<Icon icon="mdi:file-upload" width={36} />
			<div>{l.dragDrop}</div>
			<div class="text-sm">{l.onlyAccepts20}</div>
		{/if}
	</Dropzone>

	<div slot="disclaimer" class="mt-1 flex justify-center">
		{#if $quote.products[$quote.productType].fileName}
			{@const fileUrl = supabase.storage
				.from('Product Files')
				.createSignedUrl($quote.products[$quote.productType].fileName ?? '', 300)}
			{#await fileUrl}
				<button class="btn btn-sm btn-link pointer-events-none text-info">
					<Icon icon="mdi:download" />
					{l.downloadFile}
				</button>
			{:then { data }}
				<a href={data?.signedUrl} target="_blank" class="btn btn-sm btn-link text-info">
					<Icon icon="mdi:download" />
					{l.downloadFile}
				</a>
			{/await}
		{/if}
	</div>
</FormItem>
