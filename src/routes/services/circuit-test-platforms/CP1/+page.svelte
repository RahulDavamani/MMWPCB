<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.circuitTestPlatforms;
	$: service = section.services.CP1;
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
	<ul class="list-disc pl-6">
		<li>RF probe: DC-65GHz，50 to 75 GHz，75 to 110GHz，GSG，pitch 200um</li>
		<li>RF cable with 1.85mm connector</li>
		<li>High Resolution Microscope</li>
		<li>Calibration Software</li>
	</ul>
</ServiceLayout>
