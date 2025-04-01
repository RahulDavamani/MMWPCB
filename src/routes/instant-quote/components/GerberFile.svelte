<script lang="ts">
	import Icon from '@iconify/svelte';
	import { lg } from '../../../stores/i18n.store';
	import { quote } from '../../../stores/quote.store';
	import FormItem from './FormItem.svelte';
	import Dropzone from 'svelte-file-dropzone';
	import IconBtn from '../../components/IconBtn.svelte';
	import { supabase } from '$lib/client/supabase';

	$: l = $lg.instantQuote.fileDrop;
	$: uploadedFiles = $quote.products[$quote.productType].files;
	$: newFiles = $quote.files[$quote.productType] ?? [];
	$: allFiles = [...uploadedFiles, ...newFiles];
</script>

<FormItem pd={{ l: $lg.instantQuote.gerberFile }}>
	<Dropzone
		multiple={true}
		accept="application/x-zip-compressed,application/x-rar-compressed"
		maxSize={1024 * 1024 * 20}
		on:drop={(e) =>
			($quote.files[$quote.productType] = [
				...newFiles,
				// @ts-ignore
				...e.detail.acceptedFiles.filter((file) => !allFiles.some((f) => f.name === file.name))
			])}
	>
		{#if allFiles.length > 0}
			<Icon icon="mdi:file-check" width={36} class="text-success" />
			<div class="font-semibold leading-3 mt-3">
				{allFiles.length}
				{allFiles.length === 1 ? l.file : l.files}
				{l.added}
			</div>
			<div>{l.belowFiles}</div>
		{:else}
			<Icon icon="mdi:file-upload" width={36} />
			<div>{l.dragDrop}</div>
			<div class="text-sm">{l.onlyAccepts20}</div>
		{/if}
	</Dropzone>

	<div class="grid grid-cols-3 text-sm mt-4 gap-4">
		{#each uploadedFiles as file}
			{@const fileUrl = supabase.storage
				.from('Product Files')
				.createSignedUrl(`${$quote.products[$quote.productType].id}/${file.name}`, 300)}

			{#await fileUrl}
				<div class="flex justify-start items-center border shadow rounded-lg p-2 tooltip" data-tip={file.name}>
					<Icon icon="mdi:loading" width={24} class="text-info animate-spin mr-2" />
					<div class="truncate cursor-pointer mr-auto">
						{file.name}
					</div>
					<IconBtn
						icon="mdi:delete"
						iconClasses="text-error"
						on:click={() =>
							($quote.products[$quote.productType].files = uploadedFiles.filter((f) => f.name !== file.name))}
					/>
				</div>
			{:then { data, error }}
				{#if error}
					<div
						class="flex justify-start items-center border shadow rounded-lg p-2 tooltip"
						data-tip={file.name + ' - ' + error.message}
					>
						<Icon icon="mdi:alert-circle" width={20} class="text-error mr-2" />
						<div class="truncate cursor-pointer text-error mr-auto">
							{file.name}
						</div>
						<IconBtn
							icon="mdi:delete"
							iconClasses="text-error"
							on:click={() =>
								($quote.products[$quote.productType].files = uploadedFiles.filter((f) => f.name !== file.name))}
						/>
					</div>
				{:else}
					<div class="flex justify-between items-center border shadow rounded-lg p-2 tooltip" data-tip={file.name}>
						<a class="truncate cursor-pointer text-info hover:underline" href={data.signedUrl} download={file.name}>
							{file.name}
						</a>
						<IconBtn
							icon="mdi:delete"
							iconClasses="text-error"
							on:click={() =>
								($quote.products[$quote.productType].files = uploadedFiles.filter((f) => f.name !== file.name))}
						/>
					</div>
				{/if}
			{/await}
		{/each}

		{#each newFiles as file}
			<div class="flex justify-between items-center border shadow rounded-lg p-2 tooltip" data-tip={file.name}>
				<a
					class="truncate cursor-pointer text-info hover:underline"
					href={URL.createObjectURL(file)}
					download={file.name}
				>
					{file.name}
				</a>
				<IconBtn
					icon="mdi:delete"
					iconClasses="text-error"
					on:click={() => ($quote.files[$quote.productType] = newFiles.filter((f) => f.name !== file.name))}
				/>
			</div>
		{/each}
	</div>
</FormItem>
