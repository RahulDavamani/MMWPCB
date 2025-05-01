import type { Lang } from '$lib/locales/en';
import CircuitTestPlatforms from '$lib/assets/services/circuit-test-platforms/circuit-test-platforms.png';

export const circuitTestPlatforms = (l: Lang['services']['sections']['circuitTestPlatforms']) => ({
	code: 'circuit-test-platforms',
	l,
	img: CircuitTestPlatforms,
	from: 65,
	buildTime: 48,
	services: {
		mmWaveCircuitTestPlatform: {
			code: 'mm-wave-circuit-test-platform',
			l: l.services.mmWaveCircuitTestPlatform,
			images: [CircuitTestPlatforms],
			category: l.categories.mmWaveCircuitTestPlatform,
			startingFrom: null,
			minFrequency: 75,
			maxFrequency: 110
		}
	}
});
