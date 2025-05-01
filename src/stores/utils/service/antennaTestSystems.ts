import type { Lang } from '$lib/locales/en';
import AntennaTestSystems from '$lib/assets/services/antenna-test-systems/antenna-test-systems.png';
import FarFieldTesting_1 from '$lib/assets/services/antenna-test-systems/far-field-testing_1.jpg';
import FarFieldTesting_2 from '$lib/assets/services/antenna-test-systems/far-field-testing_2.jpg';
import FarFieldTesting_3 from '$lib/assets/services/antenna-test-systems/far-field-testing_3.jpg';
import MillimeterWaveNearField from '$lib/assets/services/antenna-test-systems/millimeter-wave-near-field.png';
import OnChipAntennaCharacterization from '$lib/assets/services/antenna-test-systems/on-chip-antenna-characterization.png';

export const antennaTestSystems = (l: Lang['services']['sections']['antennaTestSystems']) => ({
	code: 'antenna-test-systems',
	l,
	img: AntennaTestSystems,
	from: 65,
	buildTime: 48,
	services: {
		farFieldTesting: {
			code: 'far-field-testing',
			l: l.services.farFieldTesting,
			images: [FarFieldTesting_1, FarFieldTesting_2, FarFieldTesting_3],
			category: l.categories.farField,
			startingFrom: null,
			minFrequency: 0.6,
			maxFrequency: 50
		},
		nearFieldTesting: {
			code: 'near-field-testing',
			l: l.services.nearFieldTesting,
			images: [FarFieldTesting_1, FarFieldTesting_2, FarFieldTesting_3],
			category: l.categories.nearField,
			startingFrom: null,
			minFrequency: 0.6,
			maxFrequency: 50
		},
		millimeterWaveNearField: {
			code: 'millimeter-wave-near-field',
			l: l.services.millimeterWaveNearField,
			images: [MillimeterWaveNearField],
			category: l.categories.nearField,
			startingFrom: null,
			minFrequency: 75,
			maxFrequency: 110
		},
		onChipAntennaCharacterization: {
			code: 'on-chip-antenna-characterization',
			l: l.services.onChipAntennaCharacterization,
			images: [OnChipAntennaCharacterization],
			category: l.categories.onChip,
			startingFrom: null,
			minFrequency: 18,
			maxFrequency: 500
		}
	}
});
