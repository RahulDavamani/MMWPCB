<script lang="ts">
	import Icon from '@iconify/svelte';
	import { currencies, i18n, lg, languages } from '../../../stores/i18n.store';
	import { ui } from '../../../stores/ui.store';

	$: l = $lg.navbar.i18n;
	$: ({ language, currency } = $i18n);
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="dropdown dropdown-end">
	<div tabindex="0" role="button" class="flex items-center gap-2 font-semibold text-black m-1">
		<Icon icon={languages[language].icon} width={22} />
		{language.toUpperCase()}/{currency.toUpperCase()}
		<Icon icon="mdi:keyboard-arrow-down" />
	</div>
	<div tabindex="0" class="dropdown-content bg-base-100 rounded-box z-[1] w-80 p-4 shadow text-sm">
		<div class="font-bold mb-3">{l.language}:</div>
		<div class="flex justify-around flex-wrap gap-4">
			{#each Object.values(languages) as { key, name, icon }}
				<button
					class="btn btn-sm w-32 {key === language && 'btn-secondary text-black'}"
					on:click={ui.loaderWrapper({ title: 'Setting Language' }, () => i18n.setLanguage(key))}
				>
					<Icon {icon} width={22} />
					{name}
				</button>
			{/each}
		</div>

		<div class="divider" />
		<div class="font-bold mb-3">{l.currency}:</div>
		<div class="flex justify-around flex-wrap gap-4">
			{#each Object.values(currencies) as { key, name, icon }}
				<button
					class="btn btn-sm w-32 {key === currency && 'btn-secondary text-black'}"
					on:click={() => i18n.setCurrency(key)}
				>
					<Icon {icon} width={20} />
					{name}
				</button>
			{/each}
		</div>
	</div>
</div>
