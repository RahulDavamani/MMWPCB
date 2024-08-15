<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="min-w-96 h-fit rounded shadow border p-4">
	<div class=" flex gap-2 items-center">
		<Icon icon="mdi:tag-multiple-outline" width={20} />
		<div class="font-bold">Pricing and Build Time</div>
	</div>
	<div class="divider mt-0" />

	<div class="btn btn-primary text-base w-full gap-4">
		<Icon icon="mdi:cart-outline" width={22} />
		Save to Cart
	</div>
	<div class="btn btn-secondary text-base w-full mt-3 gap-4">
		<Icon icon="mdi:bookmark-add-outline" width={22} />
		Add to Order
	</div>
</div>
