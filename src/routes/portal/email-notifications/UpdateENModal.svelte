<script lang="ts">
	import { onMount } from 'svelte';
	import type { EmailNotification, ENType } from '../../../trpc/routers/email-notification/emailNotification.router';
	import Modal from '../../components/UI/Modal.svelte';
	import { closeModal, onShowModal, showModal } from '$lib/client/modal';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import Loader from '../../components/UI/Loader.svelte';
	import FormControl from '../../components/FormControl.svelte';
	import { ui } from '../../../stores/ui.store';
	import { invalidateAll } from '$app/navigation';
	import { Editor } from '@tadashi/svelte-editor-quill';
	import Icon from '@iconify/svelte';
	import { copyToClipboard } from '$lib/client/copyToClipboard';

	let modalId = 'updateENModal';
	export let type: ENType | null;

	let emailNotification: EmailNotification | undefined;

	const fetchEmailNotification = async () => {
		emailNotification = undefined;
		if (!type) return;
		emailNotification = await trpc()
			.emailNotification.get.query({ type })
			.catch((e) => tce(e, { showToast: true, callback: () => closeModal(modalId) }));
	};

	onMount(async () => onShowModal(modalId, fetchEmailNotification));

	const updateEmailNotification = ui.loaderWrapper({ title: 'Updating' }, async () => {
		if (!emailNotification) return;
		closeModal(modalId);
		await trpc()
			.emailNotification.update.mutate(emailNotification)
			.catch((e) =>
				tce(e, {
					callback: () => showModal(modalId),
					showModal: {
						title: 'Failed to Update Email Notification',
						retryFn: updateEmailNotification
					}
				})
			);

		await invalidateAll();
		ui.setToast({
			title: 'Email Notification Updated Successfully',
			alertClasses: 'alert-success'
		});
	});

	$: variables = type?.startsWith('ORDER')
		? [
				'OrderNumber',
				'CustomerName',
				'DeliveryDate',
				'QuotationUrl',
				'PaymentReceiptUrl',
				'TrackingNumber',
				'TrackingUrl'
			]
		: ['RequestNumber', 'CustomerName', 'PaymentReceiptUrl', 'ReportUrl'];
</script>

<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" rel="stylesheet" />
</svelte:head>

<Modal
	{modalId}
	modalBackdrop={false}
	boxClasses="max-w-4xl w-full"
	title={emailNotification?.title}
	dividerClasses="m-0"
>
	{#if !emailNotification}
		<Loader fixed={false} overlay={false} size={80} classes="mt-10" />
	{:else}
		<div class="my-2 text-gray-400">
			{emailNotification.description}
		</div>

		<div class="flex items-end gap-10 mb-4">
			<FormControl
				label="Subject"
				classes="w-full"
				error={emailNotification.subject === '' ? 'Please Enter Subject' : undefined}
			>
				<input
					type="text"
					class="input input-bordered {emailNotification.subject === '' && 'input-error'}"
					bind:value={emailNotification.subject}
				/>
			</FormControl>

			<FormControl label="Enable" classes="w-20">
				<input type="checkbox" class="toggle toggle-success mb-3 ml-1" bind:checked={emailNotification.enable} />
			</FormControl>
		</div>

		<div class="flex justify-between items-center">
			<div class="font-semibold mb-2">Body</div>
			<div class="dropdown dropdown-bottom dropdown-end">
				<div tabindex="0" role="button" class="btn btn-link">Variables</div>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<div tabindex="0" class="dropdown-content z-[1] p-1 border shadow bg-base-100 rounded-box w-80 mt-1">
					<div class="overflow-x-auto">
						<table class="table table-xs border-b">
							<tbody>
								{#each variables as v}
									<tr>
										<td class="text-sm flex justify-between items-center">
											{v}
											<button class="btn btn-xs btn-ghost text-primary" on:click={() => copyToClipboard(`{${v}}`)}>
												<Icon icon="mdi:content-copy" width={16} />
											</button>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
					<div class="text-xs opacity-70 p-2">
						Use dynamic variables by incorporating them within curly braces {'`{}`'}
					</div>
				</div>
			</div>
		</div>

		<Editor
			options={{ theme: 'snow', plainclipboard: true, modules: { toolbar: true } }}
			data={emailNotification.body}
			on:text-change={(e) => {
				// @ts-ignore
				emailNotification.body = e.detail.html;
			}}
			class="h-80"
		/>

		<button class="btn btn-warning w-full mt-20" on:click={updateEmailNotification}>Update</button>
	{/if}
</Modal>
