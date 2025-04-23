import { derived } from 'svelte/store';
import { lg } from './i18n.store';
import Oscilloscopes from '$lib/assets/services/oscilloscopes/oscilloscopes.png';
import HD304MSO from '$lib/assets/services/oscilloscopes/HD304MSO.jpeg';
import DSOS804A from '$lib/assets/services/oscilloscopes/DSOS804A.jpeg';
import NetworkAnalyzers from '$lib/assets/services/network-analyzers/network-analyzers.png';
import E5080B from '$lib/assets/services/network-analyzers/E5080B.jpeg';
import N5291A from '$lib/assets/services/network-analyzers/N5291A.jpeg';
import AntennaTestSystems from '$lib/assets/services/antenna-test-systems/antenna-test-systems.png';
import AP1_1 from '$lib/assets/services/antenna-test-systems/ap1_1.jpg';
import AP1_2 from '$lib/assets/services/antenna-test-systems/ap1_2.jpg';
import AP1_3 from '$lib/assets/services/antenna-test-systems/ap1_3.jpg';
import AP3 from '$lib/assets/services/antenna-test-systems/ap3.png';
import AP4 from '$lib/assets/services/antenna-test-systems/ap4.png';
import CircuitTestPlatforms from '$lib/assets/services/circuit-test-platforms/circuit-test-platforms.png';
import CP1 from '$lib/assets/services/circuit-test-platforms/cp1.png';

export const serviceStatuses = derived(lg, ($lg) => ({
	APPLICATION_RECEIVED: $lg.serviceStatus.APPLICATION_RECEIVED,
	IN_REVIEW: $lg.serviceStatus.IN_REVIEW,
	WAITING_FOR_PAYMENT: $lg.serviceStatus.WAITING_FOR_PAYMENT,
	TESTING_IN_PROGRESS: $lg.serviceStatus.TESTING_IN_PROGRESS,
	REPORT_RELEASED: $lg.serviceStatus.REPORT_RELEASED,
	REJECTED: $lg.serviceStatus.REJECTED
}));
export const services = derived(lg, ($lg) => {
	const oscilloscopes = (() => {
		const l = $lg.services.sections.oscilloscopes;
		return {
			l,
			href: '/oscilloscopes',
			img: Oscilloscopes,
			from: 50,
			buildTime: 48,
			services: {
				HD304MSO: {
					code: 'HD304MSO',
					l: l.services.HD304MSO,
					href: '/HD304MSO',
					images: [HD304MSO],
					category: l.categories.infiniiVision,
					startingFrom: 9187,
					bandwidth: 0.2,
					maxMemoryDepth: 100,
					maxSampleRate: 3.2,
					type: null
				},
				DSOS804A: {
					code: 'DSOS804A',
					l: l.services.DSOS804A,
					href: '/DSOS804A',
					images: [DSOS804A],
					category: l.categories.realTime,
					startingFrom: 110038,
					bandwidth: 8,
					maxMemoryDepth: 800,
					maxSampleRate: 20,
					type: l.types.realTime
				}
			}
		};
	})();

	const networkAnalyzers = (() => {
		const l = $lg.services.sections.networkAnalyzers;
		return {
			l,
			href: '/network-analyzers',
			img: NetworkAnalyzers,
			from: 50,
			buildTime: 48,
			services: {
				E5080B: {
					code: 'E5080B',
					l: l.services.E5080B,
					href: '/E5080B',
					images: [E5080B],
					category: l.categories.ena,
					startingFrom: null,
					builtInPorts: [2, 4],
					maxFrequency: 53,
					internalSources: [1, 2],
					vnaSeries: 'ENA',
					vnaType: l.vnaTypes.benchtop
				},
				N5291A: {
					code: 'N5291A',
					l: l.services.N5291A,
					href: '/N5291A',
					images: [N5291A],
					category: l.categories.pna,
					startingFrom: null,
					builtInPorts: [2, 4],
					maxFrequency: 120,
					internalSources: [2],
					vnaSeries: 'PNA-X',
					vnaType: l.vnaTypes.benchtop
				}
			}
		};
	})();

	const antennaTestSystems = (() => {
		const l = $lg.services.sections.antennaTestSystems;
		return {
			l,
			href: '/antenna-test-systems',
			img: AntennaTestSystems,
			from: 65,
			buildTime: 48,
			services: {
				AP1: {
					code: 'AP1',
					l: l.services.AP1,
					href: '/AP1',
					images: [AP1_1, AP1_2, AP1_3],
					category: l.categories.farField,
					startingFrom: null,
					minFrequency: 0.6,
					maxFrequency: 50
				},
				AP2: {
					code: 'AP2',
					l: l.services.AP2,
					href: '/AP2',
					images: [AP1_1, AP1_2, AP1_3],
					category: l.categories.nearField,
					startingFrom: null,
					minFrequency: 0.6,
					maxFrequency: 50
				},
				AP3: {
					code: 'AP3',
					l: l.services.AP3,
					href: '/AP3',
					images: [AP3],
					category: l.categories.nearField,
					startingFrom: null,
					minFrequency: 75,
					maxFrequency: 110
				},
				AP4: {
					code: 'AP4',
					l: l.services.AP4,
					href: '/AP4',
					images: [AP4],
					category: l.categories.onChip,
					startingFrom: null,
					minFrequency: 18,
					maxFrequency: 500
				}
			}
		};
	})();

	const circuitTestPlatforms = (() => {
		const l = $lg.services.sections.circuitTestPlatforms;

		return {
			l,
			href: '/circuit-test-platforms',
			img: CircuitTestPlatforms,
			from: 65,
			buildTime: 48,
			services: {
				CP1: {
					code: 'CP1',
					l: l.services.CP1,
					href: '/CP1',
					images: [CP1],
					category: l.categories.circuitTestPlatform,
					startingFrom: null,
					minFrequency: 75,
					maxFrequency: 110
				}
			}
		};
	})();

	return { oscilloscopes, networkAnalyzers, antennaTestSystems, circuitTestPlatforms };
});
