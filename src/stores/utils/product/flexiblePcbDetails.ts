import type { Lang } from '$lib/locales/en';
import type { FlexiblePcb } from '../../../zod/products/flexiblePcb.schema';

export const flexiblePcbDetails = (lg: Lang) => {
	const l = lg.instantQuote.flexiblePcb;

	const id = {
		key: 'id',
		l: l.id,
		parseValue: (val: FlexiblePcb['id']) => val?.toUpperCase()
	};

	const createdAt = {
		key: 'createdAt',
		l: l.createdAt,
		parseValue: (val: Date) => val.toLocaleString()
	};

	const updatedAt = {
		key: 'updatedAt',
		l: l.updatedAt,
		parseValue: (val: Date) => val.toLocaleString()
	};

	const name = {
		key: 'name',
		l: l.name,
		validate: (val: FlexiblePcb['name']) => val.length < 1
	};

	const fileName = {
		key: 'fileName',
		l: l.fileName,
		parseValue: (val: FlexiblePcb['fileName']) => val?.split('__')[1]
	};

	const buildTime = {
		key: 'buildTime',
		l: l.buildTime
	};

	const weight = {
		key: 'weight',
		l: l.weight,
		parseValue: (val: FlexiblePcb['weight']) => `${val.toFixed(2)} kg`
	};

	const initialPrice = {
		key: 'initialPrice',
		l: l.initialPrice,
		parseValue: (val: FlexiblePcb['initialPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : 'RFQ')
	};

	const finalPrice = {
		key: 'finalPrice',
		l: l.finalPrice,
		parseValue: (val: FlexiblePcb['finalPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : val)
	};

	const boardType = (() => {
		const values = [
			{ title: l.boardType.values.singlePieces, value: 'SINGLE_PIECES' },
			{ title: l.boardType.values.panelByCustomer, value: 'PANEL_BY_CUSTOMER' },
			{ title: l.boardType.values.panelByVelenova, value: 'PANEL_BY_VELENOVA' }
		] as { title: string; value: FlexiblePcb['boardType'] }[];

		return {
			key: 'boardType',
			l: l.boardType,
			url: '',
			imgSrc: '',
			values,
			parseValue: (val: FlexiblePcb['boardType']) => values.find((v) => v.value == val)?.title
		};
	})();

	const xoutAllowance = (() => {
		const values = [
			{ title: l.xoutAllowance.values.accept, value: true },
			{ title: l.xoutAllowance.values.decline, value: false }
		] as { title: string; value: FlexiblePcb['xoutAllowance'] }[];

		return {
			key: 'xoutAllowance',
			l: l.xoutAllowance,
			imgSrc: '',
			values,
			parseValue: (val: FlexiblePcb['xoutAllowance']) => values.find((v) => v.value === val)?.title
		};
	})();

	const routeProcess = (() => {
		const values = [
			{ title: l.routeProcess.values.velenovaPrefer, value: 'VELENOVA_PREFER' },
			{ title: l.routeProcess.values.vScoring, value: 'V_SCORING' },
			{ title: l.routeProcess.values.tabRoute, value: 'TAB_ROUTE' },
			{ title: l.routeProcess.values.vScoringTabRoute, value: 'V_SCORING_AND_TAB_ROUTE' }
		] as { title: string; value: FlexiblePcb['routeProcess'] }[];

		return {
			key: 'routeProcess',
			l: l.routeProcess,
			imgSrc: '',
			values,
			parseValue: (val: FlexiblePcb['routeProcess']) => values.find((v) => v.value === val)?.title
		};
	})();

	const breakAwayRail = (() => {
		const values = [
			{ title: lg.common.yes, value: true },
			{ title: lg.common.no, value: false }
		] as { title: string; value: FlexiblePcb['breakAwayRail'] }[];

		return {
			key: 'breakAwayRail',
			l: l.breakAwayRail,
			imgSrc: '',
			values,
			parseValue: (val: FlexiblePcb['breakAwayRail']) => values.find((v) => v.value === val)?.title
		};
	})();

	const panelRequirements = {
		key: 'panelRequirements',
		l: l.panelRequirements
	};

	const differentDesign = {
		key: 'differentDesign',
		l: l.differentDesign,
		imgSrc: '',
		values: [1, 2, 3, 4, 5, 6],
		validate: (val: FlexiblePcb['differentDesign']) => val < 1
	};

	const length = {
		key: 'length',
		l: l.length,
		validate: (val: FlexiblePcb['length']) => val < 1,
		parseValue: (val: FlexiblePcb['length']) => val + ' mm'
	};

	const width = {
		key: 'width',
		l: l.width,
		validate: (val: FlexiblePcb['width']) => val < 1,
		parseValue: (val: FlexiblePcb['width']) => val + ' mm'
	};

	const quantity = {
		key: 'quantity',
		l: l.quantity,
		url: '',
		validate: (val: FlexiblePcb['quantity']) => val < 1
	};

	const layers = {
		key: 'layers',
		l: l.layers,
		url: '',
		imgSrc: '',
		values: [1, 2, 4, 6, 8, 10, 12, 14, 16],
		parseValue: (val: number) => val + ' ' + (val > 1 ? l.layers.layers : l.layers.layer)
	};

	const material = (() => {
		const values = [
			{ title: l.material.values.polyimideFlex, value: 'POLYIMIDE_FLEX' },
			{ title: l.material.values.pet, value: 'PET' },
			{ title: l.material.values.highFrequency, value: 'HIGH_FREQUENCY' }
		] as { title: { title?: string }; value: FlexiblePcb['material'] }[];

		return {
			key: 'material',
			l: l.material,
			values,
			parseValue: (val: FlexiblePcb['material']) => values.find((v) => v.value === val)?.title
		};
	})();

	const petType = (() => {
		const values = [
			{ title: l.petType.values.transparent, value: 'TRANSPARENT' },
			{ title: l.petType.values.translucent, value: 'TRANSLUCENT' }
		] as { title: string; value: FlexiblePcb['petType'] }[];

		return {
			key: 'petType',
			l: l.petType,
			values,
			parseValue: (val: FlexiblePcb['petType']) => values.find((v) => v.value === val)?.title
		};
	})();

	const thickness = {
		key: 'thickness',
		l: l.thickness,
		values: [
			0.025, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.2, 0.22, 0.23, 0.24,
			0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.33, 0.34, 0.35, 0.4
		]
	};

	const minTrack = {
		key: 'minTrack',
		l: l.minTrack,
		values: [0.06],
		parseValue: (val: FlexiblePcb['minTrack']) => `${val}mm`
	};

	const minHoleSize = {
		key: 'minHoleSize',
		l: l.minHoleSize,
		values: [0.15, 0.35, 0],
		parseValue: (val: FlexiblePcb['minHoleSize']) => (val == 0 ? l.minHoleSize.noDrill : `${val}mm`)
	};

	const solderMaskColor = (() => {
		const values = [
			{
				title: `${lg.common.color.yellow} ${l.solderMaskColor.coverlay}`,
				color: 'bg-yellow-400',
				value: 'YELLOW_COVERLAY'
			},
			{
				title: `${lg.common.color.white} ${l.solderMaskColor.coverlay}`,
				color: 'bg-white',
				value: 'WHITE_COVERLAY'
			},
			{
				title: `${lg.common.color.black} ${l.solderMaskColor.coverlay}`,
				color: 'bg-black',
				value: 'BLACK_COVERLAY'
			},
			{ title: lg.common.none, color: 'bg-gray-400', value: 'NONE' },
			{ title: lg.common.color.transparent, color: 'bg-white', value: 'TRANSPARENT' }
		] as { title: string; color: string; value: FlexiblePcb['solderMaskColor'] }[];

		return {
			key: 'solderMaskColor',
			l: l.solderMaskColor,
			values,
			parseValue: (val: FlexiblePcb['solderMaskColor']) => values.find((v) => v.value === val)?.title
		};
	})();

	const silkscreenColor = (() => {
		const values = [
			{ title: lg.common.color.white, color: 'bg-white', value: 'WHITE' },
			{ title: lg.common.color.black, color: 'bg-black', value: 'BLACK' },
			{ title: lg.common.color.yellow, color: 'bg-yellow-400', value: 'YELLOW' },
			{ title: lg.common.color.blue, color: 'bg-blue-400', value: 'BLUE' },
			{ title: lg.common.color.grey, color: 'bg-grey-400', value: 'GREY' },
			{ title: lg.common.none, color: 'bg-gray-400', value: 'NONE' }
		] as { title: string; color: string; value: FlexiblePcb['silkscreenColor'] }[];

		return {
			key: 'silkscreenColor',
			l: l.silkscreenColor,
			values,
			parseValue: (val: FlexiblePcb['silkscreenColor']) => values.find((v) => v.value === val)?.title
		};
	})();

	const edgeConnector = (() => {
		const values = [
			{ title: lg.common.yes, value: true },
			{ title: lg.common.no, value: false }
		] as { title: string; value: FlexiblePcb['edgeConnector'] }[];

		return {
			key: 'edgeConnector',
			l: l.edgeConnector,
			url: '',
			imgSrc: '',
			values,
			parseValue: (val: FlexiblePcb['edgeConnector']) => values.find((v) => v.value === val)?.title
		};
	})();

	const stiffener = (() => {
		const values = [
			{ title: l.stiffener.values.topSide, value: 'TOP_SIDE' },
			{ title: l.stiffener.values.bottomSide, value: 'BOTTOM_SIDE' },
			{ title: l.stiffener.values.bothSides, value: 'BOTH_SIDES' },
			{ title: lg.common.none, value: 'NONE' }
		] as { title: string; value: FlexiblePcb['stiffener'] }[];

		return {
			key: 'stiffener',
			l: l.stiffener,
			values,
			parseValue: (val: FlexiblePcb['stiffener']) => values.find((v) => v.value === val)?.title
		};
	})();

	const surfaceFinish = (() => {
		const values = [
			{ title: l.surfaceFinish.values.immersionGold, value: 'IMMERSION_GOLD' },
			{ title: l.surfaceFinish.values.osp, value: 'OSP' },
			{ title: l.surfaceFinish.values.hardGold, value: 'HARD_GOLD' },
			{ title: l.surfaceFinish.values.immersionSilver, value: 'IMMERSION_SILVER' },
			{ title: l.surfaceFinish.values.immersionTin, value: 'IMMERSION_TIN' },
			{ title: l.surfaceFinish.values.immersionGoldHardGold, value: 'IMMERSION_GOLD_SELECTIVE_HARD_GOLD' },
			{ title: l.surfaceFinish.values.enepig, value: 'ENEPIG' }
		] as { title: string; value: FlexiblePcb['surfaceFinish'] }[];

		return {
			key: 'surfaceFinish',
			l: l.surfaceFinish,
			values,
			parseValue: (val: FlexiblePcb['surfaceFinish']) => values.find((v) => v.value === val)?.title
		};
	})();

	const surfaceThickness = {
		key: 'surfaceThickness',
		l: l.surfaceThickness,
		immersionGold: {
			l: l.surfaceThickness.immersionGold,
			values: [[1], [2], [3]],
			parseValue: (val: FlexiblePcb['surfaceThickness']) => `${val[0]}U"`
		},
		hardGold: {
			l: l.surfaceThickness.hardGold,
			values: [
				[3, 120],
				[5, 120],
				[10, 120],
				[15, 120],
				[20, 120],
				[25, 120],
				[30, 120]
			],
			parseValue: (val: FlexiblePcb['surfaceThickness']) => `Au:${val[0]}U"/Ni:${val[1]}U"`
		},
		immersionGoldHardGold: {
			l: l.surfaceThickness.immersionGoldHardGold,
			values: [
				[1, 3, 120],
				[1, 5, 120],
				[1, 10, 120],
				[1, 15, 120],
				[1, 20, 120],
				[1, 25, 120],
				[1, 30, 120],
				[2, 3, 120],
				[2, 5, 120],
				[2, 10, 120],
				[2, 15, 120],
				[2, 20, 120],
				[2, 25, 120],
				[2, 30, 120],
				[3, 3, 120],
				[3, 5, 120],
				[3, 10, 120],
				[3, 15, 120],
				[3, 20, 120],
				[3, 25, 120],
				[3, 30, 120]
			],
			parseValue: (val: FlexiblePcb['surfaceThickness']) => `Au:${val[0]}U" Au:${val[1]}U"/Pd:${val[2]}U"`
		},
		enepig: {
			l: l.surfaceThickness.enepig,
			values: [
				[200, 1, 1],
				[200, 2, 2],
				[200, 3, 3],
				[200, 4, 4]
			],
			parseValue: (val: FlexiblePcb['surfaceThickness']) => `Ni:${val[0]}U"/Pd:${val[1]}U"/Au:${val[2]}U"`
		}
	};

	const finishedCopper = {
		key: 'finishedCopper',
		l: l.finishedCopper,
		values: [0.25, 0.33, 0.5, 1, 1.5, 2, 2.5],
		parseValue: (val: FlexiblePcb['finishedCopper']) => `${val} oz Cu`
	};

	const etest = (() => {
		const values = [
			{ title: lg.common.yes, value: true },
			{ title: lg.common.no, value: false }
		] as { title: string; value: FlexiblePcb['etest'] }[];

		return {
			key: 'etest',
			l: l.etest,
			values,
			parseValue: (val: FlexiblePcb['etest']) => values.find((v) => v.value === val)?.title
		};
	})();

	const tape = (() => {
		const values = [
			{ title: l.tape.values.threeM467, value: 'THREEM_467' },
			{ title: l.tape.values.tesa8853, value: 'TESA_8853' },
			{ title: l.tape.values.tesa8854, value: 'TESA_8854' },
			{ title: l.tape.values.threeM9495LE, value: 'THREEM_9495LE' },
			{ title: lg.common.none, value: 'NONE' }
		] as { title: string; value: FlexiblePcb['tape'] }[];

		return {
			key: 'tape',
			l: l.tape,
			values,
			parseValue: (val: FlexiblePcb['tape']) => values.find((v) => v.value === val)?.title
		};
	})();

	const doubleSidedTape = (() => {
		const values = [
			{ title: l.doubleSidedTape.values.htA1134, value: 'HT_A1134' },
			{ title: lg.common.none, value: 'NONE' }
		] as { title: string; value: FlexiblePcb['doubleSidedTape'] }[];

		return {
			key: 'doubleSidedTape',
			l: l.doubleSidedTape,
			values,
			parseValue: (val: FlexiblePcb['doubleSidedTape']) => values.find((v) => v.value === val)?.title
		};
	})();

	const emiShieldingFilm = (() => {
		const values = [
			{ title: l.emiShieldingFilm.values.hcf6000g, value: 'HCF_6000G' },
			{ title: l.emiShieldingFilm.values.pc800, value: 'PC800' },
			{ title: lg.common.none, value: 'NONE' }
		] as { title: string; value: FlexiblePcb['emiShieldingFilm'] }[];

		return {
			key: 'emiShieldingFilm',
			l: l.emiShieldingFilm,
			values,
			parseValue: (val: FlexiblePcb['emiShieldingFilm']) => values.find((v) => v.value === val)?.title
		};
	})();

	const peelableSolderMask = (() => {
		const values = [
			{ title: l.peelableSolderMask.values.topSide, value: 'TOP_SIDE' },
			{ title: l.peelableSolderMask.values.bottomSide, value: 'BOTTOM_SIDE' },
			{ title: l.peelableSolderMask.values.bothSides, value: 'BOTH_SIDES' },
			{ title: lg.common.none, value: 'NONE' }
		] as { title: string; value: FlexiblePcb['peelableSolderMask'] }[];

		return {
			key: 'peelableSolderMask',
			l: l.peelableSolderMask,
			values,
			parseValue: (val: FlexiblePcb['peelableSolderMask']) => values.find((v) => v.value === val)?.title
		};
	})();

	const ulMarking = (() => {
		const values = [
			{ title: l.ulMarking.values.topSilkscreen, value: 'TOP_SILK_SCREEN' },
			{ title: l.ulMarking.values.bottomSilkscreen, value: 'BOTTOM_SILK_SCREEN' },
			{ title: l.ulMarking.values.topSolderMask, value: 'TOP_SOLDER_MASK' },
			{ title: l.ulMarking.values.bottomSolderMask, value: 'BOTTOM_SOLDER_MASK' },
			{ title: l.ulMarking.values.topCopper, value: 'TOP_COPPER' },
			{ title: l.ulMarking.values.bottomCopper, value: 'BOTTOM_COPPER' },
			{ title: l.ulMarking.values.default, value: 'DEFAULT' },
			{ title: lg.common.none, value: 'NONE' }
		] as { title: string; value: FlexiblePcb['ulMarking'] }[];

		return {
			key: 'ulMarking',
			l: l.ulMarking,
			values,
			parseValue: (val: FlexiblePcb['ulMarking']) => values.find((v) => v.value === val)?.title
		};
	})();

	const dateCode = (() => {
		const values = [
			{ title: l.dateCode.values.velenovaPrefer, value: 'VELENOVA_PREFER' },
			{ title: l.dateCode.values.customerRequired, value: 'CUSTOMER_REQUIRED' },
			{ title: l.dateCode.values.updateDesignedDateCode, value: 'UPDATE_DESIGNED_DATE_CODE' },
			{ title: lg.common.none, value: 'NONE' }
		] as { title: string; value: FlexiblePcb['dateCode'] }[];

		return {
			key: 'dateCode',
			l: l.dateCode,
			values,
			parseValue: (val: FlexiblePcb['dateCode']) => values.find((v) => v.value === val)?.title
		};
	})();

	const dateCodeDescription = {
		key: 'dateCodeDescription',
		l: l.dateCodeDescription
	};

	const customizedServices = (() => {
		const values = [
			{
				value: 'HALF_CUT',
				l: l.customizedServices.values.halfCut,
				url: '',
				imgSrc: ''
			},
			{
				value: 'EDGE_PLATING',
				l: l.customizedServices.values.edgePlating
			},
			{
				value: 'IMPEDANCE_CONTROL',
				l: l.customizedServices.values.impedanceControl
			},
			{
				value: 'VIA_FILLED_WITH_COPPER',
				l: l.customizedServices.values.viasFilledWithCopper
			},
			{
				value: 'FPC_WITH_AIRGAP',
				l: l.customizedServices.values.fpcWithAirgap,
				url: ''
			},
			{
				value: 'SINGLE_SIDE_DOUBLE_ACCESS',
				l: l.customizedServices.values.singleSideDoubleAccess
			},
			{
				value: 'STIFFENER_BETWEEN_EDGE_CONNECTOR',
				l: l.customizedServices.values.stiffenerTopBottom
			}
		] as {
			value: FlexiblePcb['customizedServices'][number];
			l: { title?: string; description?: string; url?: string; imgSrc?: string };
			url?: string;
			imgSrc?: string;
		}[];

		return {
			key: 'customizedServices',
			l: l.customizedServices,
			values,
			parseValue: (val: FlexiblePcb['customizedServices']) =>
				val.map((v) => values.find((x) => x.value === v)?.l.title).join(', ')
		};
	})();

	const specialRequests = {
		key: 'specialRequests',
		l: l.specialRequests
	};

	return {
		id,
		createdAt,
		updatedAt,
		name,
		fileName,
		buildTime,
		weight,
		initialPrice,
		finalPrice,
		boardType,
		xoutAllowance,
		routeProcess,
		breakAwayRail,
		panelRequirements,
		differentDesign,
		length,
		width,
		quantity,
		layers,
		material,
		petType,
		thickness,
		minTrack,
		minHoleSize,
		solderMaskColor,
		silkscreenColor,
		edgeConnector,
		stiffener,
		surfaceFinish,
		surfaceThickness,
		finishedCopper,
		etest,
		tape,
		doubleSidedTape,
		emiShieldingFilm,
		peelableSolderMask,
		ulMarking,
		dateCode,
		dateCodeDescription,
		customizedServices,
		specialRequests
	};
};
