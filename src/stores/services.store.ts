import { derived } from 'svelte/store';
import { lg } from './i18n.store';
import Oscilloscope from '$lib/assets/services/oscilloscope.jpeg';
import NetworkAnalyzer from '$lib/assets/services/network-analyzer.jpeg';

export const services = derived(lg, ($lg) => {
	const oscilloscopes = (() => {
		const l = $lg.services.sections.oscilloscopes;
		return {
			title: l.title,
			subTitle: l.subTitle,
			href: '/oscilloscopes',
			img: Oscilloscope,
			services: {
				HD304MSO: {
					title: l.services.HD304MSO,
					href: '/HD304MSO',
					category: l.categories.infiniiVision,
					startingFrom: 9187,
					bandwidth: 0.2,
					bandwidthPrefix: null,
					maxMemoryDepth: 100,
					maxSampleRate: 3.2,
					type: null
				},
				DSOS804A: {
					title: l.services.DSOS804A,
					href: '/DSOS804A',
					category: l.categories.realTime,
					startingFrom: 110038,
					bandwidth: 8,
					bandwidthPrefix: null,
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
			title: l.title,
			subTitle: l.subTitle,
			href: '/network-analyzers',
			img: NetworkAnalyzer,
			services: {
				E5080B: {
					title: l.services.E5080B,
					href: '/E5080B',
					category: l.categories.ena,
					startingFrom: null,
					builtInPorts: [2, 4],
					maxFrequency: 53,
					internalSources: ['1', '2'],
					vnaSeries: 'ENA',
					vnaType: l.vnaTypes.benchtop
				},
				N5291A: {
					title: l.services.N5291A,
					href: '/N5291A',
					category: l.categories.pna,
					startingFrom: null,
					builtInPorts: [2, 4],
					maxFrequency: 120,
					internalSources: ['Up to 2'],
					vnaSeries: 'PNA-X',
					vnaType: l.vnaTypes.benchtop
				}
			}
		};
	})();

	return { oscilloscopes, networkAnalyzers };
});
