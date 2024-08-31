<script lang="ts">
	import { order } from '../../../stores/order.store';
	import Modal from '../../components/UI/Modal.svelte';

	let modalId = 'deliveryProgressModal';
	$: ({ deliveryStatuses } = $order);
</script>

<Modal {modalId} title="Track Delivery" boxClasses="max-w-sm w-full" dividerClasses="mb-2">
	<ul class="steps steps-vertical">
		{#each deliveryStatuses as { status, completed, completedAt }}
			<li class="step {completed && 'step-primary'}">
				<div class="text-left">
					<div>{status}</div>
					{#if completedAt}
						<div class="text-sm opacity-50">{completedAt.toLocaleString()}</div>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</Modal>
