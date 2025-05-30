import type { Lang } from '$lib/locales/en';
import type { AdvancedPcb } from '../../../zod/products/advancedPcb.schema';

export const advancedPcbDetails = (lg: Lang) => {
	const l = lg.instantQuote.advancedPcb;

	const id = {
		key: 'id',
		l: l.id,
		parseValue: (val: AdvancedPcb['id']) => val?.toUpperCase()
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
		validate: (val: AdvancedPcb['name']) => val.length < 1
	};

	const buildTime = {
		key: 'buildTime',
		l: l.buildTime
	};

	const weight = {
		key: 'weight',
		l: l.weight,
		parseValue: (val: AdvancedPcb['weight']) => `${val.toFixed(2)} kg`
	};

	const initialPrice = {
		key: 'initialPrice',
		l: l.initialPrice,
		parseValue: (val: AdvancedPcb['initialPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : 'RFQ')
	};

	const finalPrice = {
		key: 'finalPrice',
		l: l.finalPrice,
		parseValue: (val: AdvancedPcb['finalPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : val)
	};

	const pcbType = (() => {
		const values = [
			{ title: l.pcbType.values.throughHoleBoard, value: 'THROUGH_HOLE' },
			{ title: l.pcbType.values.hdi, value: 'HDI' }
		] as { title: string; value: AdvancedPcb['pcbType'] }[];

		return {
			key: 'pcbType',
			l: l.pcbType,
			values,
			parseValue: (val: AdvancedPcb['pcbType']) => values.find((v) => v.value == val)?.title
		};
	})();

	const boardSpec = (() => {
		const values = [
			{ title: l.boardSpec.values.ipc6012Class2, value: 'IPC_6012_CLASS_2' },
			{ title: l.boardSpec.values.ipc6012Class3, value: 'IPC_6012_CLASS_3' },
			{ title: l.boardSpec.values.iatf16949, value: 'IATF_16949' },
			{ title: l.boardSpec.values.iso13485, value: 'ISO_13485' },
			{ title: l.boardSpec.values.customerStandard, value: 'CUSTOMER_STANDARD' }
		] as { title: string; value: AdvancedPcb['boardSpec'] }[];

		return {
			key: 'boardSpec',
			l: l.boardSpec,
			values,
			parseValue: (val: AdvancedPcb['boardSpec']) => values.find((v) => v.value == val)?.title
		};
	})();

	const boardType = (() => {
		const values = [
			{ title: l.boardType.values.singlePieces, value: 'SINGLE_PIECES' },
			{ title: l.boardType.values.panelByCustomer, value: 'PANEL_BY_CUSTOMER' },
			{ title: l.boardType.values.panelByVelenova, value: 'PANEL_BY_VELENOVA' }
		] as { title: string; value: AdvancedPcb['boardType'] }[];

		return {
			key: 'boardType',
			l: l.boardType,
			url: '',
			imgSrc: '',
			values,
			parseValue: (val: AdvancedPcb['boardType']) => values.find((v) => v.value == val)?.title
		};
	})();

	const xoutAllowance = (() => {
		const values = [
			{ title: l.xoutAllowance.values.accept, value: true },
			{ title: l.xoutAllowance.values.decline, value: false }
		] as { title: string; value: AdvancedPcb['xoutAllowance'] }[];

		return {
			key: 'xoutAllowance',
			l: l.xoutAllowance,
			imgSrc: '',
			values,
			parseValue: (val: AdvancedPcb['xoutAllowance']) => values.find((v) => v.value === val)?.title
		};
	})();

	const routeProcess = (() => {
		const values = [
			{ title: l.routeProcess.values.velenovaPrefer, value: 'VELENOVA_PREFER' },
			{ title: l.routeProcess.values.vScoring, value: 'V_SCORING' },
			{ title: l.routeProcess.values.tabRoute, value: 'TAB_ROUTE' },
			{ title: l.routeProcess.values.vScoringTabRoute, value: 'V_SCORING_AND_TAB_ROUTE' }
		] as { title: string; value: AdvancedPcb['routeProcess'] }[];

		return {
			key: 'routeProcess',
			l: l.routeProcess,
			imgSrc: '',
			values,
			parseValue: (val: AdvancedPcb['routeProcess']) => values.find((v) => v.value === val)?.title
		};
	})();

	const breakAwayRail = (() => {
		const values = [
			{ title: lg.common.yes, value: true },
			{ title: lg.common.no, value: false }
		] as { title: string; value: AdvancedPcb['breakAwayRail'] }[];

		return {
			key: 'breakAwayRail',
			l: l.breakAwayRail,
			imgSrc: '',
			values,
			parseValue: (val: AdvancedPcb['breakAwayRail']) => values.find((v) => v.value === val)?.title
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
		validate: (val: AdvancedPcb['differentDesign']) => val < 1
	};

	const length = {
		key: 'length',
		l: l.length,
		validate: (val: AdvancedPcb['length']) => val < 1,
		parseValue: (val: AdvancedPcb['length']) => val + ' mm'
	};

	const width = {
		key: 'width',
		l: l.width,
		validate: (val: AdvancedPcb['width']) => val < 1,
		parseValue: (val: AdvancedPcb['width']) => val + ' mm'
	};

	const quantity = {
		key: 'quantity',
		l: l.quantity,
		url: '',
		validate: (val: AdvancedPcb['quantity']) => val < 1
	};

	const layers = {
		key: 'layers',
		l: l.layers,
		url: '',
		imgSrc: '',
		values: [
			1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58,
			60
		],
		parseValue: (val: number) => val + ' ' + (val > 1 ? l.layers.layers : l.layers.layer)
	};

	const copperLayer = (() => {
		const values = [
			{ title: l.copperLayer.values.topLayer, value: 'TOP_LAYER' },
			{ title: l.copperLayer.values.bottomLayer, value: 'BOTTOM_LAYER' }
		] as { title: string; value: AdvancedPcb['copperLayer'] }[];

		return {
			key: 'copperLayer',
			l: l.copperLayer,
			values,
			parseValue: (val: AdvancedPcb['copperLayer']) => values.find((v) => v.value === val)?.title
		};
	})();

	const solderMask = (() => {
		const values = [
			{ title: l.solderMask.values.topSide, value: 'TOP_SIDE' },
			{ title: l.solderMask.values.bottomSide, value: 'BOTTOM_SIDE' },
			{ title: l.solderMask.values.bothSides, value: 'BOTH_SIDES' }
		] as { title: string; value: AdvancedPcb['solderMask'] }[];

		return {
			key: 'solderMask',
			l: l.solderMask,
			values,
			parseValue: (val: AdvancedPcb['solderMask']) => values.find((v) => v.value === val)?.title
		};
	})();

	const silkscreen = (() => {
		const values = [
			{ title: l.silkscreen.values.topSide, value: 'TOP_SIDE' },
			{ title: l.silkscreen.values.bottomSide, value: 'BOTTOM_SIDE' },
			{ title: l.silkscreen.values.bothSides, value: 'BOTH_SIDES' }
		] as { title: string; value: AdvancedPcb['silkscreen'] }[];

		return {
			key: 'silkscreen',
			l: l.silkscreen,
			values,
			parseValue: (val: AdvancedPcb['silkscreen']) => values.find((v) => v.value === val)?.title
		};
	})();

	const material = (() => {
		const values = [
			{ l: l.material.values.tg140Fr4, value: 'TG140_FR4' },
			{ l: l.material.values.tg150Fr4, value: 'TG150_FR4' },
			{ l: l.material.values.tg170Fr4, value: 'TG170_FR4' },
			{ l: l.material.values.tg150Fr4HalogenFree, value: 'TG150_FR4_HALOGEN_FREE' },
			{ l: l.material.values.tg170Fr4HalogenFree, value: 'TG170_FR4_HALOGEN_FREE' },
			{ l: l.material.values.highCTI, value: 'HIGH_CTI' },
			{ l: l.material.values.highCTIHalogenFree, value: 'HIGH_CTI_HALOGEN_FREE' },
			{ l: l.material.values.highSpeed, value: 'HIGH_SPEED' },
			{ l: l.material.values.highFrequency, value: 'HIGH_FREQUENCY' },
			{ l: l.material.values.specialMaterial, value: 'SPECIAL_MATERIAL' }
		] as { l: { title?: string; disclaimer?: string }; value: AdvancedPcb['material'] }[];

		return {
			key: 'material',
			l: l.material,
			values,
			parseValue: (val: AdvancedPcb['material']) => values.find((v) => v.value === val)?.l.title ?? val
		};
	})();

	const highSpeed = {
		key: 'highSpeed',
		l: l.highSpeed,
		values: ['0', '1-5G', '5-10G', '10-24G', '> 25G']
	};

	const highFrequency = {
		key: 'highFrequency',
		l: l.highFrequency,
		values: [
			'0',
			'2.2-2.25',
			'2.33',
			'2.45',
			'2.5-2.55',
			'2.7-2.75',
			'2.92-2.94',
			'2.95',
			'3.0',
			'3.2-3.28',
			'3.37-3.38',
			'3.48-3.5',
			'3.6',
			'4.5',
			'6.0',
			'6.15',
			'9.2-9.8',
			'10.0-10.2'
		]
	};

	const thickness = {
		key: 'thickness',
		l: l.thickness,
		imgSrc: '',
		values: [0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.6, 2.0, 2.4, 2.8, 3.2, 3.6, 4.0, 4.4, 4.8, 5.2, 5.6, 6.0, 7.0, 8.0],
		parseValue: (val: AdvancedPcb['thickness']) => `${val}mm`,
		validate: (val: AdvancedPcb['thickness']) => val <= 0
	};

	const minTrack = {
		key: 'minTrack',
		l: l.minTrack,
		imgSrc: '',
		values: [3, 4, 5, 6, 8],
		parseValue: (val: AdvancedPcb['minTrack']) => `${val}/${val}mil`
	};

	const minHoleSize = {
		key: 'minHoleSize',
		l: l.minHoleSize,
		imgSrc: '',
		values: [0.15, 0.2, 0.25, 0.3],
		parseValue: (val: AdvancedPcb['minHoleSize']) => (val == 0 ? l.minHoleSize.noDrill : `${val}mm`)
	};

	const solderMaskColor = (() => {
		const values = [
			{ title: lg.color.green, color: 'bg-green-400', value: 'GREEN' },
			{ title: lg.color.red, color: 'bg-red-400', value: 'RED' },
			{ title: lg.color.blue, color: 'bg-blue-400', value: 'BLUE' },
			{ title: lg.color.black, color: 'bg-black', value: 'BLACK' },
			{ title: lg.common.none, color: 'bg-gray-400', value: 'NONE' }
		] as { title: string; color: string; value: AdvancedPcb['solderMaskColor'] }[];

		return {
			key: 'solderMaskColor',
			l: l.solderMaskColor,
			values,
			parseValue: (val: AdvancedPcb['solderMaskColor']) => values.find((v) => v.value === val)?.title
		};
	})();

	const silkscreenColor = (() => {
		const values = [
			{ title: lg.color.white, color: 'bg-white', value: 'WHITE' },
			{ title: lg.color.black, color: 'bg-black', value: 'BLACK' },
			{ title: lg.color.yellow, color: 'bg-yellow-400', value: 'YELLOW' },
			{ title: lg.color.blue, color: 'bg-blue-400', value: 'BLUE' },
			{ title: lg.color.grey, color: 'bg-grey-400', value: 'GREY' },
			{ title: lg.common.none, color: 'bg-gray-400', value: 'NONE' }
		] as { title: string; color: string; value: AdvancedPcb['silkscreenColor'] }[];

		return {
			key: 'silkscreenColor',
			l: l.silkscreenColor,
			values,
			parseValue: (val: AdvancedPcb['silkscreenColor']) => values.find((v) => v.value === val)?.title
		};
	})();

	const edgeConnector = (() => {
		const values = [
			{ title: lg.common.yes, value: true },
			{ title: lg.common.no, value: false }
		] as { title: string; value: AdvancedPcb['edgeConnector'] }[];

		return {
			key: 'edgeConnector',
			l: l.edgeConnector,
			url: '',
			imgSrc: '',
			values,
			parseValue: (val: AdvancedPcb['edgeConnector']) => values.find((v) => v.value === val)?.title
		};
	})();

	const surfaceFinish = (() => {
		const values = [
			{ title: l.surfaceFinish.values.immersionGold, value: 'IMMERSION_GOLD' },
			{ title: l.surfaceFinish.values.osp, value: 'OSP' },
			{ title: l.surfaceFinish.values.immersionTin, value: 'IMMERSION_TIN' },
			{ title: l.surfaceFinish.values.enepig, value: 'ENEPIG' },
			{ title: l.surfaceFinish.values.plainCopper, value: 'PLAIN_COPPER' },
			{ title: l.surfaceFinish.values.goldPlating, value: 'GOLD_PLATING' },
			{ title: l.surfaceFinish.values.silverPlating, value: 'SILVER_PLATING' }
		] as { title: string; value: AdvancedPcb['surfaceFinish'] }[];

		return {
			key: 'surfaceFinish',
			l: l.surfaceFinish,
			url: '',
			values,
			parseValue: (val: AdvancedPcb['surfaceFinish']) => values.find((v) => v.value === val)?.title ?? val
		};
	})();

	const surfaceThickness = {
		key: 'surfaceThickness',
		l: l.surfaceThickness,
		immersionGold: {
			l: l.surfaceThickness.immersionGold,
			values: [[2], [3]],
			parseValue: (val: AdvancedPcb['surfaceThickness']) => `${val[0]}U"`
		},
		hardGold: {
			l: l.surfaceThickness.hardGold,
			values: [
				[5, 120],
				[10, 120],
				[15, 120],
				[20, 120],
				[25, 120],
				[30, 120]
			],
			parseValue: (val: AdvancedPcb['surfaceThickness']) => `Au:${val[0]}U"/Ni:${val[1]}U"`
		},
		haslLeadFreeImmersionGold: {
			l: l.surfaceThickness.haslLeadFreeImmersionGold,
			values: [[2], [3]],
			parseValue: (val: AdvancedPcb['surfaceThickness']) => `${val[0]}U"`
		},
		haslLeadFreeHardGold: {
			l: l.surfaceThickness.haslLeadFreeHardGold,
			values: [
				[5, 120],
				[10, 120],
				[15, 120],
				[20, 120],
				[25, 120],
				[30, 120]
			],
			parseValue: (val: AdvancedPcb['surfaceThickness']) => `Au:${val[0]}U"/Ni:${val[1]}U"`
		},
		immersionGoldHardGold: {
			l: l.surfaceThickness.immersionGoldHardGold,
			values: [
				[2, 5, 120],
				[2, 10, 120],
				[2, 15, 120],
				[2, 20, 120],
				[2, 25, 120],
				[2, 30, 120],
				[3, 5, 120],
				[3, 10, 120],
				[3, 15, 120],
				[3, 20, 120],
				[3, 25, 120],
				[3, 30, 120]
			],
			parseValue: (val: AdvancedPcb['surfaceThickness']) => `Au:${val[0]}U" Au:${val[1]}U"/Pd:${val[2]}U"`
		},
		enepig: {
			l: l.surfaceThickness.enepig,
			values: [
				[200, 2, 2],
				[200, 3, 3],
				[200, 4, 4]
			],
			parseValue: (val: AdvancedPcb['surfaceThickness']) => `Ni:${val[0]}U"/Pd:${val[1]}U"/Au:${val[2]}U"`
		}
	};

	const finishedCopper = {
		key: 'finishedCopper',
		l: l.finishedCopper,
		url: '',
		imgSrc: '',
		values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		parseValue: (val: AdvancedPcb['finishedCopper']) =>
			`${val === 0 ? `${l.finishedCopper.bareBoard} / ` : ''} ${val} oz Cu`
	};

	const innerCopper = {
		key: 'innerCopper',
		l: l.innerCopper,
		imgSrc: '',
		values: [1, 1.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		parseValue: (val: AdvancedPcb['innerCopper']) => (typeof val === 'number' ? `${val} oz Cu` : val)
	};

	const peelableSolderMask = (() => {
		const values = [
			{ title: l.peelableSolderMask.values.topSide, value: 'TOP_SIDE' },
			{ title: l.peelableSolderMask.values.bottomSide, value: 'BOTTOM_SIDE' },
			{ title: l.peelableSolderMask.values.bothSides, value: 'BOTH_SIDES' },
			{ title: lg.common.none, value: 'NONE' }
		] as { title: string; value: AdvancedPcb['peelableSolderMask'] }[];

		return {
			key: 'peelableSolderMask',
			l: l.peelableSolderMask,
			values,
			parseValue: (val: AdvancedPcb['peelableSolderMask']) => values.find((v) => v.value === val)?.title
		};
	})();

	const holeCopperThickness = {
		key: 'holeCopperThickness',
		l: l.holeCopperThickness,
		values: [20, 25, 30, 35, 50, 55, 70],
		parseValue: (val: number) => val !== undefined && val + 'mm'
	};

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
		] as { title: string; value: AdvancedPcb['ulMarking'] }[];

		return {
			key: 'ulMarking',
			l: l.ulMarking,
			values,
			parseValue: (val: AdvancedPcb['ulMarking']) => values.find((v) => v.value === val)?.title
		};
	})();

	const dateCode = (() => {
		const values = [
			{ title: l.dateCode.values.velenovaPrefer, value: 'VELENOVA_PREFER' },
			{ title: l.dateCode.values.customerRequired, value: 'CUSTOMER_REQUIRED' },
			{ title: l.dateCode.values.updateDesignedDateCode, value: 'UPDATE_DESIGNED_DATE_CODE' },
			{ title: lg.common.none, value: 'NONE' }
		] as { title: string; value: AdvancedPcb['dateCode'] }[];

		return {
			key: 'dateCode',
			l: l.dateCode,
			values,
			parseValue: (val: AdvancedPcb['dateCode']) => values.find((v) => v.value === val)?.title
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
				value: 'HALOGEN_FREE',
				l: l.customizedServices.values.halogenFree
			},
			{
				value: 'CUSTOM_STACKUP',
				l: l.customizedServices.values.customStackup,
				url: ''
			},
			{
				value: 'CARBON_INK',
				l: l.customizedServices.values.carbonInk
			},
			{
				value: 'ALL_VIAS_FILLED_WITH_RESIN_AND_CAPPED',
				l: l.customizedServices.values.allViasFilled
			},
			{
				value: 'VIA_IN_PAD',
				l: l.customizedServices.values.viaInPad
			},
			{
				value: 'PRESS_FIT_HOLES',
				l: l.customizedServices.values.pressFitHoles,
				imgSrc: ''
			},
			{
				value: 'COUNTERSINK',
				l: l.customizedServices.values.countersink,
				imgSrc: ''
			},
			{
				value: 'Z_AXIS_MILLING',
				l: l.customizedServices.values.zAxisMilling,
				imgSrc: ''
			},
			{
				value: 'BLACK_FR4',
				l: l.customizedServices.values.blackFr4,
				url: ''
			},
			{
				value: 'EMBEDDED_COPPER_PCB',
				l: l.customizedServices.values.embeddedCopperPcb,
				imgSrc: ''
			},
			{
				value: 'CAVITY_PCB',
				l: l.customizedServices.values.cavityPcb,
				imgSrc: ''
			},
			{
				value: 'SEMI_FLEX_PCB',
				l: l.customizedServices.values.semiFlexPcb,
				imgSrc: ''
			},
			{
				value: 'WHOLE_PARTIALLY_HYBRID_PCB',
				l: l.customizedServices.values.hybridPcb
			},
			{
				value: 'BACK_DRILL_PCB',
				l: l.customizedServices.values.backDrillPcb,
				imgSrc: ''
			},
			{
				value: 'LEADLESS_PARTIALLY_PLATED_HARD_GOLD',
				l: l.customizedServices.values.leadlessPartialHardGold
			}
		] as {
			value: AdvancedPcb['customizedServices'][number];
			l: { title?: string; description?: string; url?: string; imgSrc?: string };
			url?: string;
			imgSrc?: string;
		}[];

		return {
			key: 'customizedServices',
			l: l.customizedServices,
			values,
			parseValue: (val: AdvancedPcb['customizedServices']) =>
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
		buildTime,
		weight,
		initialPrice,
		finalPrice,
		pcbType,
		boardSpec,
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
		copperLayer,
		solderMask,
		silkscreen,
		material,
		highSpeed,
		highFrequency,
		thickness,
		minTrack,
		minHoleSize,
		solderMaskColor,
		silkscreenColor,
		edgeConnector,
		surfaceFinish,
		surfaceThickness,
		finishedCopper,
		innerCopper,
		peelableSolderMask,
		holeCopperThickness,
		ulMarking,
		dateCode,
		dateCodeDescription,
		customizedServices,
		specialRequests
	};
};
