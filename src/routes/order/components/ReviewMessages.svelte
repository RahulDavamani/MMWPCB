<script lang="ts">
	import Icon from '@iconify/svelte';
	import { order } from '../../../stores/order.store';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { invalidateAll } from '$app/navigation';
	import { lg } from '../../../stores/i18n.store';

	$: l = $lg.order.reviewMessages;

	$: ({ id, status, reviewMessages, paymentInfo } = $order);
	let message = '';
	let isLoading = false;

	const sendReviewMessage = async () => {
		isLoading = true;
		await trpc()
			.order.insertReviewMessage.mutate({ id, message })
			.catch((e) => tce(e, { showModal: { title: l.failedToSend, retryFn: sendReviewMessage } }));
		message = '';
		await invalidateAll();
		isLoading = false;
	};
</script>

{#if (status !== 'CART' && status !== 'SAVED') || reviewMessages.length > 0}
	<div class="grow border rounded-lg shadow">
		<div class="p-4">
			<div class="text-lg font-bold flex items-center gap-2">
				<Icon icon="mdi:chat-outline" width={20} />
				{l.title}
			</div>
			<div class="divider mt-0 mb-1" />

			<div class="mt-4 max-h-80 overflow-auto">
				{#each reviewMessages as { message, createdAt, user: { role } }}
					<div class="chat {role === 'ADMIN' ? 'chat-start' : 'chat-end'}">
						<div class="chat-header">{role === 'ADMIN' ? 'Admin' : 'You'}</div>
						<div class="chat-bubble {role === 'USER' && 'chat-bubble-primary'}">{message}</div>
						<div class="chat-footer opacity-50">{createdAt.toLocaleString()}</div>
					</div>
				{:else}
					<div class="flex flex-col justify-center items-center">
						<Icon icon="mdi:conversation-outline" width={50} />
						<div>{l.noMessages}</div>
					</div>
				{/each}
			</div>
		</div>

		{#if paymentInfo}
			<div class="text-center font-semibold bg-base-200 py-2">{l.conversationClosed}</div>
		{:else}
			<div class="flex gap-6 p-4">
				<input class="input input-bordered w-full rounded-box" placeholder="Message..." bind:value={message} />
				<button class="btn btn-success btn-circle" on:click={sendReviewMessage}>
					{#if isLoading}
						<Icon icon="mdi:loading" width={24} class="ml-0.5 animate-spin" />
					{:else}
						<Icon icon="mdi:send" width={24} class="ml-0.5" />
					{/if}
				</button>
			</div>
		{/if}
	</div>
{/if}
