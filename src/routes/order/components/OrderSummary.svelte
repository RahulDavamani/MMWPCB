<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="min-w-96 h-fit border rounded-lg shadow p-4">
	<div class="text-lg font-bold flex items-center gap-2">
		<Icon icon="mdi:receipt-text-outline" width={20} />
		Order Summary
	</div>
	<div class="divider mt-0 mb-1" />

	<div class="space-y-2 mt-4 px-2">
		<div class="flex justify-between">
			<div>Items Cost</div>
			<div class="font-mono">${10}</div>
		</div>
		<div class="flex justify-between">
			<div>Shipping Cost</div>
			<div class="font-mono">${10}</div>
		</div>
		<div class="flex justify-between">
			<div>Discount</div>
			<div class="font-mono text-success">-${10}</div>
		</div>
		<div class="flex justify-between">
			<div>Taxes</div>
			<div class="font-mono">${10}</div>
		</div>
		<div class="divider" />
		<div class="flex justify-between">
			<div class="text-lg font-bold">Order Total</div>
			<div class="text-lg font-bold font-mono">${10}</div>
		</div>
		<div class="divider" />
	</div>

	<div class="flex justify-between mt-4 px-2">
		<div class="flex items-center gap-2 font-semibold tooltip">
			<div class="tooltip tooltip-left tooltip-info" data-tip="Order won't be shipped until all items are ready.">
				<Icon icon="mdi:info" width={20} class="text-info" />
			</div>
			Est Delivery Date
		</div>
		<div class="font-mono">{new Date().toDateString()}</div>
	</div>

	<button class="btn btn-primary rounded-box w-full mt-8">Submit Order For Review</button>
	<div class="divider">OR</div>
	<button class="btn btn-secondary btn-outline rounded-box w-full">
		<Icon icon="mdi:content-save-outline" width={22} />
		Save Order
	</button>
</div>
