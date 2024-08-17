<script lang="ts">
	import Icon from '@iconify/svelte';
	import FormControl from '../../components/FormControl.svelte';
	import { quote } from '../../../stores/quote.store';

	$: buildTimes = [
		{ name: '24 Hours', value: '24 Hours', price: 5 },
		{ name: 'Extra Urgent!', value: 'Extra Urgent!', price: 99 }
	];

	$: chargeDetails = [
		{ name: 'PCB Cost', price: 5 },
		{ name: 'Material', price: 0 }
	];
</script>

<div class="min-w-96 h-fit rounded shadow border p-4">
	<div class=" flex gap-2 items-center">
		<Icon icon="mdi:tag-multiple-outline" width={20} />
		<div class="font-bold">Pricing and Build Time</div>
	</div>
	<div class="divider mt-0" />

	<div class="font-semibold">Build Time:</div>
	<div class="text-sm mt-2 px-2">
		{#each buildTimes as { name, value, price }}
			<div class="flex justify-between">
				<FormControl inputType="In" label={name}>
					<input
						type="radio"
						name="buildTime"
						class="radio radio-primary radio-xs"
						{value}
						bind:group={$quote.standardPcb.buildTime}
					/>
				</FormControl>
				<div class="font-mono">${price.toFixed(2)}</div>
			</div>
		{/each}
	</div>

	<div class="font-semibold mt-4">Charge Details:</div>
	<div class="text-sm space-y-2 mt-4 px-2">
		{#each chargeDetails as { name, price }}
			<div class="flex justify-between">
				<div>{name}</div>
				<div class="font-mono">${price.toFixed(2)}</div>
			</div>
		{/each}
	</div>

	<div class="divider mb-0" />
	<div class="flex justify-between font-bold mt-2 pr-2">
		<div>Total</div>
		<div class="font-mono">$5.00</div>
	</div>

	<div class="flex justify-between mt-6">
		<div class="btn btn-secondary btn-outline text-base gap-4">
			<Icon icon="mdi:bookmark-add-outline" width={22} />
			Add to Order
		</div>
		<div class="btn btn-primary text-base gap-4">
			<Icon icon="mdi:cart" width={22} />
			Save to Cart
		</div>
	</div>
</div>
