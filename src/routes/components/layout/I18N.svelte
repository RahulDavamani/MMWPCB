<script lang="ts">
	import Icon from '@iconify/svelte';
	import { currencies, i18n, lg, languages } from '../../../stores/i18n.store';

	$: l = $lg.navbar.i18n;
	$: ({ lang, currency } = $i18n);
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="dropdown dropdown-end">
	<div tabindex="0" role="button" class="flex items-center gap-2 font-semibold text-black m-1">
		<Icon icon={languages[lang].icon} width={22} />
		{lang.toUpperCase()}/{currency.toUpperCase()}
		<Icon icon="mdi:keyboard-arrow-down" />
	</div>
	<div tabindex="0" class="dropdown-content bg-base-100 rounded-box z-[1] w-80 p-4 shadow text-sm">
		<div class="font-bold mb-3">{l.language}:</div>
		<div class="flex justify-around flex-wrap gap-4">
			{#each Object.values(languages) as { id, name, icon }}
				<button class="btn btn-sm w-32 {id === lang && 'btn-secondary text-black'}" on:click={() => i18n.setLang(id)}>
					<Icon {icon} width={22} />
					{name}
				</button>
			{/each}
		</div>

		<div class="divider" />
		<div class="font-bold mb-3">{l.currency}:</div>
		<div class="flex justify-around flex-wrap gap-4">
			{#each Object.values(currencies) as { id, name, icon }}
				<button
					class="btn btn-sm w-32 {id === currency && 'btn-secondary text-black'}"
					on:click={() => i18n.setCurrency(id)}
				>
					<Icon {icon} width={20} />
					{name}
				</button>
			{/each}
		</div>
	</div>
</div>
