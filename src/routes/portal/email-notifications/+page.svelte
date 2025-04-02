<script lang="ts">
	import Layout from '../components/Layout.svelte';
	import IconBtn from '../../components/IconBtn.svelte';
	import { trpc } from '../../../trpc/client';
	import type { ENType } from '../../../trpc/routers/email-notification/emailNotification.router';
	import { tce } from '../../../trpc/te';
	import { ui } from '../../../stores/ui.store';
	import UpsertENModal from './UpdateENModal.svelte';
	import { showModal } from '$lib/client/modal';

	let tab = 1;
	export let data;
	$: emailNotifications = data.emailNotifications.filter(({ type }) =>
		type.startsWith(tab === 1 ? 'ORDER' : 'SERVICE')
	);

	let editType: ENType | null = null;

	const toggleEmailNotification = async (type: ENType, enable: boolean) =>
		ui.loaderWrapper(
			{ title: 'Updating' },
			async () =>
				await trpc()
					.emailNotification.update.mutate({ type, enable })
					.catch((e) => tce(e, { showToast: true }))
		)();
</script>

<Layout pageTitle="Email Notification">
	<div role="tablist" class="tabs tabs-boxed">
		<button class="tab {tab === 1 && 'tab-active'}" on:click={() => (tab = 1)}>Order</button>
		<button class="tab {tab === 2 && 'tab-active'}" on:click={() => (tab = 2)}>Service Request</button>
	</div>

	<div class="space-y-4 mt-6 px-4">
		{#each emailNotifications as { updatedAt, type, enable, title }}
			<div class="border shadow rounded-lg p-4 flex justify-between items-center">
				<div class="flex items-center gap-4 w-60">
					<IconBtn
						icon="mi:edit-alt"
						width={28}
						iconClasses="text-secondary"
						buttonClasses="btn-link btn-sm"
						on:click={() => {
							editType = type;
							showModal('updateENModal');
						}}
					/>
					{title}
				</div>
				<div class="text-sm text-gray-400">Modified at {updatedAt.toLocaleString()}</div>
				<input
					type="checkbox"
					class="toggle toggle-success"
					checked={enable}
					on:change={(e) => toggleEmailNotification(type, e.currentTarget.checked)}
				/>
			</div>
		{/each}
	</div>
</Layout>

<UpsertENModal type={editType} />
