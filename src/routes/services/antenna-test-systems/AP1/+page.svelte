<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.antennaTestSystems;
	$: service = section.services.AP1;
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
	Measurement main capabilities
	<ul class="list-disc pl-6">
		<li>Maximum AUT: 0.5m</li>
		<li>Gain</li>
		<li>Beamwidth</li>
		<li>Cross polarization</li>
		<li>Sidelobe levels</li>
		<li>3D radiation pattern</li>
		<li>Radiation pattern in linear or circular polarization</li>
	</ul>
</ServiceLayout>
