<script lang="ts">
	import { services } from '../../../stores/service.store';
</script>

<div class="text-xl font-bold mb-2">Testing Services</div>

<div class="grid grid-cols-4 gap-8 mt-8">
	{#each Object.values($services) as { l, href, img }}
		<button class="rounded-box shadow-lg grow p-4">
			<div class="h-20 flex justify-center">
				<img src={img} alt="icon" />
			</div>

			<div class="text-left text-sm">
				<div class="text-lg font-semibold my-2">{l.title}</div>
			</div>

			<a href="/services{href}" class="btn btn-sm btn-primary w-full mt-4">Browse Our Solutions</a>
		</button>
	{/each}
</div>
