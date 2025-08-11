<script>
	import Icon from '@iconify/svelte';
</script>

<div class="border shadow rounded-box p-6 px-8">
	<div class="flex justify-between mb-4">
		<div>
			<div class="text-xl font-bold">How to use</div>
			<div>Place an order now</div>
		</div>
		<a href="/support/my-orders/ordering/0" class="btn btn-primary btn-sm">
			<Icon icon="mdi:play-circle" width={22} />
			See how it works
		</a>
	</div>

	<div class="flex justify-between items-center text-gray-500 flex-wrap space-x-2">
		<div class="font-semibold flex">
			<div class="border border-gray-400 px-2 rounded-full text-sm mr-2">1</div>
			Instant Quote
		</div>
		<Icon icon="mdi:chevron-double-right" width={22} />
		<div class="font-semibold flex">
			<div class="border border-gray-400 px-2 rounded-full text-sm mr-2">2</div>
			Upload File
		</div>
		<Icon icon="mdi:chevron-double-right" width={22} />
		<div class="font-semibold flex">
			<div class="border border-gray-400 px-2 rounded-full text-sm mr-2">3</div>
			Order Review
		</div>
		<Icon icon="mdi:chevron-double-right" width={22} />
		<div class="font-semibold flex">
			<div class="border border-gray-400 px-2 rounded-full text-sm mr-2">4</div>
			Payment
		</div>
		<Icon icon="mdi:chevron-double-right" width={22} />
		<div class="font-semibold flex">
			<div class="border border-gray-400 px-2 rounded-full text-sm mr-2">5</div>
			Fabrication
		</div>
		<Icon icon="mdi:chevron-double-right" width={22} />
		<div class="font-semibold flex">
			<div class="border border-gray-400 px-2 rounded-full text-sm mr-2">6</div>
			Delivery
		</div>
		<Icon icon="mdi:chevron-double-right" width={22} />
		<div class="font-semibold flex">
			<div class="border border-gray-400 px-2 rounded-full text-sm mr-2">7</div>
			Order Received
		</div>
	</div>
</div>
