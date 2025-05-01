<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.frequencyDomainRFTest;
	$: service = section.services.sParameterAnalysis;
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
			<li>Full 2-port S-parameters (S11, S12, S21, S22)</li>
			<li>Advanced calibration (SOLT, TRL, ECal) for accuracy</li>
			<li>Group delay and phase stability evaluation</li>
		</ul>
	{:else if lang === 'zh'}
		<div class="font-semibold">主要测量功能：</div>
		<ul class="list-disc pl-6">
			<li>完整的2端口S参数（S11、S12、S21、S22）</li>
			<li>高级校准（SOLT、TRL、ECal）以提高准确性</li>
			<li>群时延和相位稳定性评估</li>
		</ul>
	{:else if lang === 'fr'}
		<div class="font-semibold">Principales capacités de mesure :</div>
		<ul class="list-disc pl-6">
			<li>Paramètres S 2 ports complets (S11, S12, S21, S22)</li>
			<li>Étalonnage avancé (SOLT, TRL, ECal) pour plus de précision</li>
			<li>Évaluation du retard de groupe et de la stabilité de phase</li>
		</ul>
	{:else}
		<div class="font-semibold">Capacidades principales de medición:</div>
		<ul class="list-disc pl-6">
			<li>Parámetros S completos de 2 puertos (S11, S12, S21, S22)</li>
			<li>Calibración avanzada (SOLT, TRL, ECal) para mayor precisión</li>
			<li>Evaluación del retardo de grupo y la estabilidad de fase</li>
		</ul>
	{/if}
</ServiceLayout>
