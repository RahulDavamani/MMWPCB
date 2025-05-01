<script lang="ts">
	import { i18n, parsePrice } from '../../../stores/i18n.store';
	import { services } from '../../../stores/service.store';
</script>

<div class="text-xl font-bold mb-2">Testing Services</div>

<div class="grid grid-cols-4 gap-8 mt-8">
	{#each Object.values($services) as { code, l, img, from, buildTime }}
		<button class="rounded-box shadow-lg grow p-4">
			<div class="h-20 flex justify-center">
				<img src={img} alt="icon" />
			</div>

			<div class="text-left text-sm">
				<div class="text-lg font-semibold my-2">{l.title}</div>

				<div>From <span class="text-primary font-bold">{parsePrice($i18n.currency, from)}</span></div>
				<div class="">Build Time: {buildTime} hours</div>

				<ul class="list-disc ml-5 mt-2 text-gray-500">
					{#each Object.values(l.description) as d}
						<li>{d}</li>
					{/each}
				</ul>
			</div>

			<a href="/services/{code}" class="btn btn-sm btn-primary w-full mt-4">Browse Our Solutions</a>
		</button>
	{/each}
</div>
