import { derived } from 'svelte/store';
import { lg } from './i18n.store';
import Oscilloscopes from '$lib/assets/services/oscilloscopes/oscilloscopes.jpeg';
import HD304MSO from '$lib/assets/services/oscilloscopes/HD304MSO.jpeg';
import DSOS804A from '$lib/assets/services/oscilloscopes/DSOS804A.jpeg';
import NetworkAnalyzers from '$lib/assets/services/network-analyzers/network-analyzers.jpeg';
import E5080B from '$lib/assets/services/network-analyzers/E5080B.jpeg';
import N5291A from '$lib/assets/services/network-analyzers/N5291A.jpeg';

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
			services: {
				HD304MSO: {
					l: l.services.HD304MSO,
					href: '/HD304MSO',
					img: HD304MSO,
					category: l.categories.infiniiVision,
					startingFrom: 9187,
					bandwidth: 0.2,
					maxMemoryDepth: 100,
					maxSampleRate: 3.2,
					type: null
				},
				DSOS804A: {
					l: l.services.DSOS804A,
					href: '/DSOS804A',
					img: DSOS804A,
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
			services: {
				E5080B: {
					l: l.services.E5080B,
					href: '/E5080B',
					img: E5080B,
					category: l.categories.ena,
					startingFrom: null,
					builtInPorts: [2, 4],
					maxFrequency: 53,
					internalSources: [1, 2],
					vnaSeries: 'ENA',
					vnaType: l.vnaTypes.benchtop
				},
				N5291A: {
					l: l.services.N5291A,
					href: '/N5291A',
					img: N5291A,
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

	return { oscilloscopes, networkAnalyzers };
});
