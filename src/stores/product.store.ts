import { derived } from 'svelte/store';
import { lg } from './i18n.store';

export const productTypes = derived(lg, ($lg) => {
	const l = $lg.products;
	return {
		standardPcb: { key: 'standardPcb', keys: 'standardPcbs', name: l.standardPcb, img: 'standard-pcb' },
		advancedPcb: { key: 'advancedPcb', keys: 'advancedPcbs', name: l.advancedPcb, img: 'advanced-pcb' },
		flexiblePcb: { key: 'flexiblePcb', keys: 'flexiblePcbs', name: l.flexiblePcb, img: 'flexible-pcb' },
		assembly: { key: 'assembly', keys: 'assemblies', name: l.assembly, img: 'assembly' },
		stencil: { key: 'stencil', keys: 'stencils', name: l.stencil, img: 'stencil' }
	};
});

// export const product = derived(lg, ($lg) => {
// 	const standardPcb = (() => {
// 		const l = $lg.instantQuote.standardPcb;

// 		return {
// 			id: {
// 				key: 'id',
// 				l: l.id
// 			},
// 			createdAt: {
// 				key: 'createdAt',
// 				l: l.createdAt
// 			},
// 			updatedAt: {
// 				key: 'updatedAt',
// 				l: l.updatedAt
// 			},
// 			name: {
// 				key: 'name',
// 				l: l.name
// 			},
// 			fileName: {
// 				key: 'fileName',
// 				l: l.fileName
// 			},
// 			buildTime: {
// 				key: 'buildTime',
// 				l: l.buildTime
// 			},
// 			weight: {
// 				key: 'weight',
// 				l: l.weight
// 			},
// 			initialPrice: {
// 				key: 'initialPrice',
// 				l: l.initialPrice
// 			},
// 			finalPrice: {
// 				key: 'finalPrice',
// 				l: l.finalPrice
// 			},
// 			boardType: {
// 				key: 'boardType',
// 				l: l.boardType,
// 				url: '',
// 				imgSrc: '',
// 				values: [
// 					{ title: l.boardType.options.singlePieces, value: 'SINGLE_PIECES' },
// 					{ title: l.boardType.options.panelByCustomer, value: 'PANEL_BY_CUSTOMER' },
// 					{ title: l.boardType.options.panelByVelenova, value: 'PANEL_BY_VELENOVA' }
// 				] as { title: string; value: StandardPcb['boardType'] }[]
// 			},
// 			xoutAllowance: {
// 				key: 'xoutAllowance',
// 				l: l.xoutAllowance,
// 				url: '',
// 				imgSrc: '',
// 				values: [
// 					{ title: l.xoutAllowance.options.accept, value: true },
// 					{ title: l.xoutAllowance.options.decline, value: false }
// 				] as { title: string; value: StandardPcb['xoutAllowance'] }[]
// 			},
// 			routeProcess: {
// 				key: 'routeProcess',
// 				l: l.routeProcess,
// 				imgSrc: '',
// 				values: [
// 					{ title: l.routeProcess.options.velenovaPrefer, value: 'VELENOVA_PREFER' },
// 					{ title: l.routeProcess.options.vScoring, value: 'V_SCORING' },
// 					{ title: l.routeProcess.options.tabRoute, value: 'TAB_ROUTE' },
// 					{ title: l.routeProcess.options.vScoringTabRoute, value: 'V_SCORING_AND_TAB_ROUTE' }
// 				] as { title: string; value: StandardPcb['routeProcess'] }[]
// 			},
// 			breakAwayRail: {
// 				key: 'breakAwayRail',
// 				l: l.breakAwayRail,
// 				imgSrc: '',
// 				values: [
// 					{ title: $lg.common.yes, value: true },
// 					{ title: $lg.common.no, value: false }
// 				] as { title: string; value: StandardPcb['breakAwayRail'] }[]
// 			},
// 			panelRequirements: {
// 				key: 'panelRequirements',
// 				l: l.panelRequirements
// 			},
// 			differentDesign: {
// 				key: 'differentDesign',
// 				l: l.differentDesign,
// 				imgSrc: '',
// 				values: [1, 2, 3, 4, 5, 6]
// 			}
// 		};
// 	})();
// 	return { standardPcb };
// });
