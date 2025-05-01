import type { Lang } from '$lib/locales/en';
import FrequencyDomainRFTest from '$lib/assets/services/frequency-domain-rf-test/frequency-domain-rf-test.png';
import SParameterAnalysis from '$lib/assets/services/frequency-domain-rf-test/s-parameter-analysis.png';
import SpectrumRelatedMeasurements from '$lib/assets/services/frequency-domain-rf-test/spectrum-related-measurements.png';
import MaterialCharacterization from '$lib/assets/services/frequency-domain-rf-test/material-characterization.png';

export const frequencyDomainRFTest = (l: Lang['services']['sections']['frequencyDomainRFTest']) => ({
	code: 'frequency-domain-rf-test',
	l,
	img: FrequencyDomainRFTest,
	from: 50,
	buildTime: 48,
	services: {
		sParameterAnalysis: {
			code: 's-parameter-analysis',
			l: l.services.sParameterAnalysis,
			images: [SParameterAnalysis],
			category: l.categories.sParameterAnalysis,
			startingFrom: 50,
			minFrequency: 0.1,
			maxFrequency: 50
		},

		spectrumRelatedMeasurements: {
			code: 'spectrum-related-measurements',
			l: l.services.spectrumRelatedMeasurements,
			images: [SpectrumRelatedMeasurements],
			category: l.categories.spectrumRelatedMeasurements,
			startingFrom: 50,
			minFrequency: 0.2,
			maxFrequency: 50
		},

		materialCharacterization: {
			code: 'material-characterization',
			l: l.services.materialCharacterization,
			images: [MaterialCharacterization],
			category: l.categories.materialCharacterization,
			startingFrom: 50,
			minFrequency: 25,
			maxFrequency: 40
		}
	}
});
