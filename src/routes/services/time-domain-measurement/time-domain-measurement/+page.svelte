<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.timeDomainMeasurement;
	$: service = section.services.timeDomainMeasurement;
	$: l = section.l.specs;
	$: ({ maxFrequency } = service);
	$: specs = [
		{
			title: l.maxFrequency,
			value: `${maxFrequency}GHz`
		}
	];
</script>

<ServiceLayout {section} {service} {specs}>
	{#if lang === 'en'}
		<div class="font-semibold">Measurement Main Capabilities:</div>
		<ul class="list-disc pl-6">
			<li>High-Speed Signal Analysis</li>
			<li>Wide Bandwidth Support, 6 GHz maximum bandwidth</li>
			<li>Time-Domain Reflectometry (TDR)</li>
			<li>Pulse & Edge Measurements</li>
			<li>Eye Diagram Analysis</li>
		</ul>
	{:else if lang === 'zh'}
		<div class="font-semibold">主要测量功能：</div>
		<ul class="list-disc pl-6">
			<li>高速信号分析</li>
			<li>宽带支持，最大带宽6 GHz</li>
			<li>时域反射（TDR）</li>
			<li>脉冲和边缘测量</li>
			<li>眼图分析</li>
		</ul>
	{:else if lang === 'fr'}
		<div class="font-semibold">Principales capacités de mesure :</div>
		<ul class="list-disc pl-6">
			<li>Analyse de signaux haute vitesse</li>
			<li>Support de large bande passante, bande passante maximale de 6 GHz</li>
			<li>Réflectométrie dans le domaine temporel (TDR)</li>
			<li>Mesures d'impulsions et de fronts</li>
			<li>Analyse de diagramme de l'œil</li>
		</ul>
	{:else}
		<div class="font-semibold">Capacidades principales de medición:</div>
		<ul class="list-disc pl-6">
			<li>Análisis de señales de alta velocidad</li>
			<li>Soporte de amplio ancho de banda, ancho de banda máximo de 6 GHz</li>
			<li>Reflectometría en el dominio del tiempo (TDR)</li>
			<li>Mediciones de pulsos y bordes</li>
			<li>Análisis de diagrama de ojo</li>
		</ul>
	{/if}
</ServiceLayout>
