<script lang="ts">
	import Icon from '@iconify/svelte';
	import { generateSpData } from '../utils/generateSpData';
</script>

<div class="grid grid-cols-3 gap-10 mb-10">
	<a href={generateSpData('myOrders', 'ordering', 0).href} class="btn bg-white shadow h-20 justify-between">
		<div class="flex items-center gap-4">
			<Icon icon="mdi:assignment" width={40} class="text-secondary" />
			<div class="text-lg font-bold">How to Order</div>
		</div>
		<Icon icon="mdi:chevron-right" width={24} />
	</a>
	<div class="btn bg-white shadow h-20 justify-between">
		<div class="flex items-center gap-4">
			<Icon icon="mdi:file-image" width={40} class="text-secondary" />
			<div class="text-lg font-bold">Generate Gerber File</div>
		</div>
		<Icon icon="mdi:chevron-right" width={24} />
	</div>
	<a href={generateSpData('myAccount', 'accountSettings', 0).href} class="btn bg-white shadow h-20 justify-between">
		<div class="flex items-center gap-4">
			<Icon icon="mdi:person" width={40} class="text-secondary" />
			<div class="text-lg font-bold">Account Settings</div>
		</div>
		<Icon icon="mdi:chevron-right" width={24} />
	</a>
</div>
