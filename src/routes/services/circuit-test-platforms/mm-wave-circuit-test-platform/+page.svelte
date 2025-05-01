<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.circuitTestPlatforms;
	$: service = section.services.mmWaveCircuitTestPlatform;
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
		<div class="font-semibold">Measurement Main Capabilities of mmWave/THz Circuit Test Platform:</div>

		<div class="mt-2">
			The mmWave/THz circuit test platforms offer advanced measurement capabilities for high-frequency applications. Key
			features include:
		</div>
		<ul class="list-disc pl-6">
			<li>
				S-parameter testing(up to 110 GHz or higher) for accurate characterization of scattering parameters (S11, S12,
				S21, S22) to evaluate impedance matching, insertion loss, and isolation.
			</li>
			<li>Power spectrum analysis to measure signal power and harmonics across wide frequency bands.</li>
			<li>High dynamic range and low noise floor for precise signal integrity measurement.</li>
			<li>Support for both frequency-domain (VNA-based) and time-domain (oscilloscope) measurements.</li>
		</ul>
		<div class="mt-2">
			The test platform enable the validation of mmWave/THz ICs, antennas, and communication systems.
		</div>
	{:else if lang === 'zh'}
		<!-- else if content here -->
	{:else if lang === 'fr'}
		<!-- else if content here -->
	{:else}
		<!-- else content here -->
	{/if}
</ServiceLayout>
