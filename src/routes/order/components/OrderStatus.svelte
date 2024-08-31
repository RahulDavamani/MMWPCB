<script lang="ts">
	import { lg } from '../../../stores/i18n.store';
	import { order } from '../../../stores/order.store';

	$: ({ status } = $order);

	$: l = $lg.orderStatus;

	$: statuses = [l.CREATED, l.REVIEW, l.PAYMENT, l.CONFIRMED, l.FABRICATION, l.DELIVERY, l.COMPLETED];
	$: si =
		status === 'SAVED'
			? 0
			: ['REVIEW', 'REJECTED'].includes(status)
				? 1
				: status === 'APPROVED'
					? 2
					: status === 'CONFIRMED'
						? 3
						: status === 'FABRICATION'
							? 4
							: status === 'DELIVERY'
								? 5
								: 6;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="dropdown dropdown-hover dropdown-left dropdown-end">
	<div tabindex={0}>
		<div class="badge badge-secondary font-bold shadow-md p-3 cursor-default">{$lg.orderStatus[status]}</div>
	</div>
	<div
		tabindex={0}
		class="dropdown-content bg-base-100 border rounded-box shadow p-3 mr-2 z-[1] text-sm w-[56rem] flex justify-center"
	>
		<ul class="steps">
			{#each statuses as s, i}
				<li class="step {i <= si && 'step-primary'} mx-2">{s}</li>
			{/each}
		</ul>
	</div>
</div>
