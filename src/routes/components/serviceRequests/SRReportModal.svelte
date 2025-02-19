<script lang="ts">
	import Modal from '../UI/Modal.svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { closeModal, onShowModal } from '$lib/client/modal';
	import { ui } from '../../../stores/ui.store';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import Dropzone from 'svelte-file-dropzone';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { supabase } from '$lib/client/supabase';

	let modalId = 'srReportModal';
	export let serviceRequest: RouterOutput['service']['getAll']['serviceRequests'][number] | null;
	export let fetchServiceRequests: () => Promise<void>;

	let file: File | null = null;

	onMount(() => onShowModal(modalId, () => (file = null)));

	const uploadReport = ui.loaderWrapper({ title: 'Uploading Report' }, async () => {
		if (!file || !serviceRequest) return;
		closeModal(modalId);
		const fileName = `${serviceRequest.id}__${file.name}`;
		const { error } = await supabase.storage.from('Service Reports').upload(fileName, file);
		if (error) return ui.setAlertModal({ title: 'File Upload Failed', body: error.message });

		await trpc()
			.service.uploadReport.mutate({ id: serviceRequest.id, report: fileName })
			.catch((e) => tce(e, { showToast: true }));
		fetchServiceRequests();
	});
</script>

<Modal {modalId} title="Upload Report - {serviceRequest?.id}" boxClasses="max-w-lg w-full">
	<div class="mb-4">
		Please upload the test report. Ensure the document is in the correct format and contains all necessary details.
	</div>

	<Dropzone multiple={false} on:drop={(e) => (file = e.detail.acceptedFiles[0])}>
		{#if file}
			<div class="flex items-center gap-2">
				<Icon icon="mdi:file-check" width={20} class="text-success" />
				{file.name}
			</div>
		{:else}
			Drag & Drop your files here or click to upload
		{/if}
	</Dropzone>

	<button class="btn btn-primary w-full mt-6 {!file && 'btn-disabled'}" on:click={uploadReport}> Upload Report </button>
</Modal>
