<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.frequencyDomainRFTest;
	$: service = section.services.spectrumRelatedMeasurements;
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
			<li>Frequency range from 2 Hz to 50 GHz</li>
			<li>Frequency response includes gain and attenuation</li>
			<li>Harmonics, spurious, and phase noise</li>
			<li>Passive Device Testing: filters, mixers, antennas, and mmWave ICs</li>
		</ul>
	{:else if lang === 'zh'}
		<div class="font-semibold">主要测量功能：</div>
		<ul class="list-disc pl-6">
			<li>频率范围为2 Hz到50 GHz</li>
			<li>频率响应包括增益和衰减</li>
			<li>谐波、杂散和相位噪声</li>
			<li>无源器件测试：滤波器、混频器、天线和毫米波IC</li>
		</ul>
	{:else if lang === 'fr'}
		<div class="font-semibold">Principales capacités de mesure :</div>
		<ul class="list-disc pl-6">
			<li>Plage de fréquence de 2 Hz à 50 GHz</li>
			<li>La réponse en fréquence inclut le gain et l'atténuation</li>
			<li>Harmoniques, parasites et bruit de phase</li>
			<li>Test de dispositifs passifs : filtres, mélangeurs, antennes et circuits mmWave</li>
		</ul>
	{:else}
		<div class="font-semibold">Capacidades principales de medición:</div>
		<ul class="list-disc pl-6">
			<li>Rango de frecuencia de 2 Hz a 50 GHz</li>
			<li>La respuesta de frecuencia incluye ganancia y atenuación</li>
			<li>Armónicos, espurios y ruido de fase</li>
			<li>Pruebas de dispositivos pasivos: filtros, mezcladores, antenas y circuitos mmWave</li>
		</ul>
	{/if}
</ServiceLayout>
