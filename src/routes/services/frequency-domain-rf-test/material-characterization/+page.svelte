<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.frequencyDomainRFTest;
	$: service = section.services.materialCharacterization;
	$: l = section.l.specs;
	$: ({ minFrequency, maxFrequency } = service);
	$: specs = [
		{
			title: l.frequency,
			value: `${minFrequency}GHz - ${maxFrequency}GHz`
		}
	];
</script>

<ServiceLayout {section} {service} {specs}>
	{#if lang === 'en'}
		<div class="font-semibold">Measurement Main Capabilities:</div>
		<ul class="list-disc pl-6">
			<li>Frequency range from 25 GHz to 40 GHz</li>
			<li>Permittivity extraction using waveguide methods</li>
			<li>Permittivity error εr ± 1%</li>
			<li>Loss tangent error tanδ ± 2%</li>
		</ul>
	{:else if lang === 'zh'}
		<div class="font-semibold">主要测量功能：</div>
		<ul class="list-disc pl-6">
			<li>频率范围为25 GHz到40 GHz</li>
			<li>使用波导方法提取介电常数</li>
			<li>介电常数误差 εr ± 1%</li>
			<li>损耗正切误差 tanδ ± 2%</li>
		</ul>
	{:else if lang === 'fr'}
		<div class="font-semibold">Principales capacités de mesure :</div>
		<ul class="list-disc pl-6">
			<li>Plage de fréquence de 25 GHz à 40 GHz</li>
			<li>Extraction de la permittivité par méthodes à guide d'ondes</li>
			<li>Erreur de permittivité εr ± 1%</li>
			<li>Erreur du facteur de perte tanδ ± 2%</li>
		</ul>
	{:else}
		<div class="font-semibold">Capacidades principales de medición:</div>
		<ul class="list-disc pl-6">
			<li>Rango de frecuencia de 25 GHz a 40 GHz</li>
			<li>Extracción de permitividad usando métodos de guía de ondas</li>
			<li>Error de permitividad εr ± 1%</li>
			<li>Error de tangente de pérdidas tanδ ± 2%</li>
		</ul>
	{/if}
</ServiceLayout>
