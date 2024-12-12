import type { Lang } from '$lib/locales/en';
import type { StandardPcb } from '../../../zod/products/standardPcb.schema';

export const standardPcbDetails = (lg: Lang) => {
	const l = lg.instantQuote.standardPcb;

	const id = {
		key: 'id',
		l: l.id,
		parseValue: (val: StandardPcb['id']) => val?.toUpperCase()
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
		validate: (val: StandardPcb['name']) => val.length < 1
	};

	const fileName = {
		key: 'fileName',
		l: l.fileName,
		parseValue: (val: StandardPcb['fileName']) => val?.split('__')[1]
	};

	const buildTime = {
		key: 'buildTime',
		l: l.buildTime,
		parseValue: (val: StandardPcb['buildTime']) => `${val / 3600} Hours`
	};

	const weight = {
		key: 'weight',
		l: l.weight,
		parseValue: (val: StandardPcb['weight']) => `${val.toFixed(2)} kg`
	};

	const initialPrice = {
		key: 'initialPrice',
		l: l.initialPrice,
		parseValue: (val: StandardPcb['initialPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : 'RFQ')
	};

	const finalPrice = {
		key: 'finalPrice',
		l: l.finalPrice,
		parseValue: (val: StandardPcb['finalPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : val)
	};

	const boardType = (() => {
		const values = [
			{ title: l.boardType.values.singlePieces, value: 'SINGLE_PIECES' },
			{ title: l.boardType.values.panelByCustomer, value: 'PANEL_BY_CUSTOMER' },
			{ title: l.boardType.values.panelByVelenova, value: 'PANEL_BY_VELENOVA' }
		] as { title: string; value: StandardPcb['boardType'] }[];

		return {
			key: 'boardType',
			l: l.boardType,
			url: '',
			imgSrc: '',
			values,
			parseValue: (val: StandardPcb['boardType']) => values.find((v) => v.value === val)?.title
		};
	})();

	const xoutAllowance = (() => {
		const values = [
			{ title: l.xoutAllowance.values.accept, value: true },
			{ title: l.xoutAllowance.values.decline, value: false }
		] as { title: string; value: StandardPcb['xoutAllowance'] }[];

		return {
			key: 'xoutAllowance',
			l: l.xoutAllowance,
			imgSrc: '',
			values,
			parseValue: (val: StandardPcb['xoutAllowance']) => values.find((v) => v.value === val)?.title
		};
	})();

	const routeProcess = (() => {
		const values = [
			{ title: l.routeProcess.values.velenovaPrefer, value: 'VELENOVA_PREFER' },
			{ title: l.routeProcess.values.vScoring, value: 'V_SCORING' },
			{ title: l.routeProcess.values.tabRoute, value: 'TAB_ROUTE' },
			{ title: l.routeProcess.values.vScoringTabRoute, value: 'V_SCORING_AND_TAB_ROUTE' }
		] as { title: string; value: StandardPcb['routeProcess'] }[];

		return {
			key: 'routeProcess',
			l: l.routeProcess,
			imgSrc: '',
			values,
			parseValue: (val: StandardPcb['routeProcess']) => values.find((v) => v.value === val)?.title
		};
	})();

	const breakAwayRail = (() => {
		const values = [
			{ title: lg.common.yes, value: true },
			{ title: lg.common.no, value: false }
		] as { title: string; value: StandardPcb['breakAwayRail'] }[];

		return {
			key: 'breakAwayRail',
			l: l.breakAwayRail,
			imgSrc: '',
			values,
			parseValue: (val: StandardPcb['breakAwayRail']) => values.find((v) => v.value === val)?.title
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
		validate: (val: StandardPcb['differentDesign']) => val < 1
	};

	const length = {
		key: 'length',
		l: l.length,
		validate: (val: StandardPcb['length']) => val < 1,
		parseValue: (val: StandardPcb['length']) => val + ' mm'
	};

	const width = {
		key: 'width',
		l: l.width,
		validate: (val: StandardPcb['width']) => val < 1,
		parseValue: (val: StandardPcb['width']) => val + ' mm'
	};

	const quantity = {
		key: 'quantity',
		l: l.quantity,
		url: '',
		values: [
			5, 10, 15, 20, 25, 30, 40, 50, 75, 100, 125, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000,
			1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 9000, 10000
		]
	};

	const layers = {
		key: 'layers',
		l: l.layers,
		url: '',
		imgSrc: '',
		values: [1, 2, 4, 6, 8, 10, 12, 14],
		parseValue: (val: number) => val + ' ' + (val > 1 ? l.layers.layers : l.layers.layer)
	};

	const copperLayer = (() => {
		const values = [
			{ title: l.copperLayer.values.topLayer, value: 'TOP_LAYER' },
			{ title: l.copperLayer.values.bottomLayer, value: 'BOTTOM_LAYER' }
		] as { title: string; value: StandardPcb['copperLayer'] }[];

		return {
			key: 'copperLayer',
			l: l.copperLayer,
			values,
			parseValue: (val: StandardPcb['copperLayer']) => values.find((v) => v.value === val)?.title
		};
	})();

	const solderMask = (() => {
		const values = [
			{ title: l.solderMask.values.topSide, value: 'TOP_SIDE' },
			{ title: l.solderMask.values.bottomSide, value: 'BOTTOM_SIDE' },
			{ title: l.solderMask.values.bothSides, value: 'BOTH_SIDES' }
		] as { title: string; value: StandardPcb['solderMask'] }[];

		return {
			key: 'solderMask',
			l: l.solderMask,
			values,
			parseValue: (val: StandardPcb['solderMask']) => values.find((v) => v.value === val)?.title
		};
	})();

	const silkscreen = (() => {
		const values = [
			{ title: l.silkscreen.values.topSide, value: 'TOP_SIDE' },
			{ title: l.silkscreen.values.bottomSide, value: 'BOTTOM_SIDE' },
			{ title: l.silkscreen.values.bothSides, value: 'BOTH_SIDES' }
		] as { title: string; value: StandardPcb['silkscreen'] }[];

		return {
			key: 'silkscreen',
			l: l.silkscreen,
			values,
			parseValue: (val: StandardPcb['silkscreen']) => values.find((v) => v.value === val)?.title
		};
	})();

	const material = (() => {
		const values = [
			{
				title: l.material.values.fr4,
				value: 'FR_4'
			},
			{
				title: l.material.values.aluminum,
				description: `≤4 ${l.layers.layers}`,
				value: 'ALUMINUM'
			},
			{
				title: l.material.values.rogers,
				value: 'ROGERS'
			},
			{
				title: l.material.values.hdi,
				description: `≥4 ${l.layers.layers}`,
				value: 'HDI'
			},
			{
				title: l.material.values.copperBase,
				description: `≤4 ${l.layers.layers}`,
				value: 'COPPER_BASE'
			}
		] as { title: string; description?: string; value: StandardPcb['material'] }[];

		return {
			key: 'material',
			l: l.material,
			values,
			parseValue: (val: StandardPcb['material']) => values.find((v) => v.value === val)?.title
		};
	})();

	const fr4TG = (() => {
		const values = [
			{ title: 'TG 130-140', value: 'TG130_140' },
			{ title: 'TG 150-160', value: 'TG150_160' },
			{ title: 'TG 170-180', value: 'TG170_180' },
			{ title: 'S1000H TG150', value: 'S1000H_TG150' },
			{ title: 'S1000-2M TG170', value: 'S1000_2M_TG170' }
		] as { title: string; value: StandardPcb['fr4TG'] }[];

		return {
			key: 'fr4TG',
			l: l.fr4TG,
			values,
			parseValue: (val: StandardPcb['fr4TG']) => values.find((v) => v.value === val)?.title
		};
	})();

	const rogers = (() => {
		const values = [
			{ title: 'Rogers 5880', value: 'ROGERS_5880' },
			{ title: 'Rogers 4350', value: 'ROGERS_4350' },
			{ title: 'Rogers 4003', value: 'ROGERS_4003' }
		] as { title: string; value: StandardPcb['rogers'] }[];

		return {
			key: 'rogers',
			l: l.rogers,
			values,
			parseValue: (val: StandardPcb['rogers']) => values.find((v) => v.value === val)?.title
		};
	})();

	const thermalConductivity = {
		key: 'thermalConductivity',
		l: l.thermalConductivity,
		values: [1, 1.5, 2, 3],
		parseValue: (val: StandardPcb['thermalConductivity']) => (typeof val === 'number' ? `${val} W/(m-K)` : val)
	};

	const thermoElectricSeparation = {
		key: 'thermoElectricSeparation',
		l: l.thermoElectricSeparation
	};

	const structureOfMCPCB = (() => {
		const values = [
			{ title: l.structureOfMCPCB.values.metalCoreMiddle, value: 'METAL_CORE_MIDDLE' },
			{ title: l.structureOfMCPCB.values.metalBaseBottom, value: 'METAL_BASE_BOTTOM' }
		] as { title: string; value: StandardPcb['structureOfMCPCB'] }[];

		return {
			key: 'structureOfMCPCB',
			l: l.structureOfMCPCB,
			values,
			parseValue: (val: StandardPcb['structureOfMCPCB']) => values.find((v) => v.value === val)?.title
		};
	})();

	const thickness = {
		key: 'thickness',
		l: l.thickness,
		imgSrc: '',
		values: [0.2, 0.3, 0.4, 0.6, 0.8, 1.0, 1.2, 1.6, 2.0, 2.4, 2.6, 2.8, 3.0, 3.2],
		parseValue: (val: StandardPcb['thickness']) => `${val}mm`
	};

	const minTrack = {
		key: 'minTrack',
		l: l.minTrack,
		imgSrc: '',
		values: [3, 4, 5, 6, 8],
		parseValue: (val: StandardPcb['minTrack']) => `${val}/${val}mil`
	};

	const minHoleSize = {
		key: 'minHoleSize',
		l: l.minHoleSize,
		imgSrc: '',
		values: [0.15, 0.2, 0.25, 0.3, 0.8, 1.0],
		parseValue: (val: StandardPcb['minHoleSize']) => (val == 0 ? l.minHoleSize.noDrill : `${val}mm`)
	};

	const solderMaskColor = (() => {
		const values = [
			{ title: lg.common.color.green, color: 'bg-green-400', value: 'GREEN' },
			{ title: lg.common.color.red, color: 'bg-red-400', value: 'RED' },
			{ title: lg.common.color.yellow, color: 'bg-yellow-400', value: 'YELLOW' },
			{ title: lg.common.color.blue, color: 'bg-blue-400', value: 'BLUE' },
			{ title: lg.common.color.purple, color: 'bg-purple-400', value: 'PURPLE' },
			{ title: lg.common.color.matteBlack, color: 'bg-black', value: 'MATTE_BLACK' },
			{ title: lg.common.color.matteGreen, color: 'bg-green-300', value: 'MATTE_GREEN' },
			{ title: lg.common.color.white, color: 'bg-white', value: 'WHITE' },
			{ title: lg.common.color.black, color: 'bg-black', value: 'BLACK' },
			{ title: lg.common.none, color: 'bg-gray-400', value: 'NONE' }
		] as { title: string; color: string; value: StandardPcb['solderMaskColor'] }[];

		return {
			key: 'solderMaskColor',
			l: l.solderMaskColor,
			values,
			parseValue: (val: StandardPcb['solderMaskColor']) => values.find((v) => v.value === val)?.title
		};
	})();

	const silkscreenColor = (() => {
		const values = [
			{ title: lg.common.color.yellow, color: 'bg-yellow-400', value: 'YELLOW' },
			{ title: lg.common.color.white, color: 'bg-white', value: 'WHITE' },
			{ title: lg.common.color.black, color: 'bg-black', value: 'BLACK' },
			{ title: lg.common.none, color: 'bg-gray-400', value: 'NONE' }
		] as { title: string; color: string; value: StandardPcb['silkscreenColor'] }[];

		return {
			key: 'silkscreenColor',
			l: l.silkscreenColor,
			values,
			parseValue: (val: StandardPcb['silkscreenColor']) => values.find((v) => v.value === val)?.title
		};
	})();

	const uvPrinting = (() => {
		const values = [
			{ title: l.uvPrinting.values.singleSidedTop, value: 'SINGLE_SIDED_TOP' },
			{ title: l.uvPrinting.values.singleSidedBottom, value: 'SINGLE_SIDED_BOTTOM' },
			{ title: l.uvPrinting.values.doubleSided, value: 'DOUBLE_SIDED' },
			{ title: lg.common.none, value: 'NONE' }
		] as { title: string; value: StandardPcb['uvPrinting'] }[];

		return {
			key: 'uvPrinting',
			l: l.uvPrinting,
			url: '',
			values,
			parseValue: (val: StandardPcb['uvPrinting']) => values.find((v) => v.value === val)?.title
		};
	})();

	const edgeConnector = (() => {
		const values = [
			{ title: lg.common.yes, value: true },
			{ title: lg.common.no, value: false }
		] as { title: string; value: StandardPcb['edgeConnector'] }[];

		return {
			key: 'edgeConnector',
			l: l.edgeConnector,
			url: '',
			imgSrc: '',
			values,
			parseValue: (val: StandardPcb['edgeConnector']) => values.find((v) => v.value === val)?.title
		};
	})();

	const surfaceFinish = (() => {
		const values = [
			{ title: l.surfaceFinish.values.haslWithLead, value: 'HASL_WITH_LEAD' },
			{ title: l.surfaceFinish.values.haslLeadFree, value: 'HASL_LEAD_FREE' },
			{ title: l.surfaceFinish.values.immersionGold, value: 'IMMERSION_GOLD' },
			{ title: l.surfaceFinish.values.osp, value: 'OSP' },
			{ title: l.surfaceFinish.values.hardGold, value: 'HARD_GOLD' },
			{ title: l.surfaceFinish.values.immersionSilver, value: 'IMMERSION_SILVER' },
			{ title: l.surfaceFinish.values.immersionTin, value: 'IMMERSION_TIN' },
			{ title: l.surfaceFinish.values.haslLeadFreeImmersionGold, value: 'HASL_LEAD_FREE_SELECTIVE_IMMERSION_GOLD' },
			{ title: l.surfaceFinish.values.haslLeadFreeHardGold, value: 'HASL_LEAD_FREE_SELECTIVE_HARD_GOLD' },
			{ title: l.surfaceFinish.values.immersionGoldHardGold, value: 'IMMERSION_GOLD_SELECTIVE_HARD_GOLD' },
			{ title: l.surfaceFinish.values.enepig, value: 'ENEPIG' },
			{ title: l.surfaceFinish.values.plainCopper, value: 'PLAIN_COPPER' }
		] as { title: string; value: StandardPcb['surfaceFinish'] }[];

		return {
			key: 'surfaceFinish',
			l: l.surfaceFinish,
			values,
			parseValue: (val: StandardPcb['surfaceFinish']) => values.find((v) => v.value === val)?.title
		};
	})();

	const viaProcess = (() => {
		const values = [
			{ title: l.viaProcess.values.tentingVias, value: 'TENTING_VIAS' },
			{ title: l.viaProcess.values.pluggedVias, value: 'PLUGGED_VIAS_WITH_SOLDER_MASK' },
			{ title: l.viaProcess.values.viasNotCovered, value: 'VIAS_NOT_COVERED' }
		] as { title: string; value: StandardPcb['viaProcess'] }[];

		return {
			key: 'viaProcess',
			l: l.viaProcess,
			values,
			parseValue: (val: StandardPcb['viaProcess']) => values.find((v) => v.value === val)?.title
		};
	})();

	const finishedCopper = {
		key: 'finishedCopper',
		l: l.finishedCopper,
		url: '',
		imgSrc: '',
		values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
		parseValue: (val: StandardPcb['finishedCopper']) =>
			`${val === 0 ? `${l.finishedCopper.bareBoard} / ` : ''} ${val} oz Cu`
	};

	const innerCopper = {
		key: 'innerCopper',
		l: l.innerCopper,
		imgSrc: '',
		values: [1, 1.5, 2, 3, 4, 5, 6],
		parseValue: (val: StandardPcb['innerCopper']) => (typeof val === 'number' ? `${val} oz Cu` : val)
	};

	const removeProductNo = (() => {
		const values = [
			{ title: l.removeProductNo.values.yes, value: 'YES' },
			{ title: l.removeProductNo.values.no, value: 'NO' },
			{ title: l.removeProductNo.values.specifyLocation, value: 'SPECIFY_LOCATION' }
		] as { title: string; value: StandardPcb['removeProductNo'] }[];

		return {
			key: 'removeProductNo',
			l: l.removeProductNo,
			values,
			parseValue: (val: StandardPcb['removeProductNo']) => values.find((v) => v.value === val)?.title
		};
	})();

	const peelableSolderMask = (() => {
		const values = [
			{ title: l.peelableSolderMask.values.topSide, value: 'TOP_SIDE' },
			{ title: l.peelableSolderMask.values.bottomSide, value: 'BOTTOM_SIDE' },
			{ title: l.peelableSolderMask.values.bothSides, value: 'BOTH_SIDES' },
			{ title: lg.common.none, value: 'NONE' }
		] as { title: string; value: StandardPcb['peelableSolderMask'] }[];

		return {
			key: 'peelableSolderMask',
			l: l.peelableSolderMask,
			values,
			parseValue: (val: StandardPcb['peelableSolderMask']) => values.find((v) => v.value === val)?.title
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
		] as { title: string; value: StandardPcb['ulMarking'] }[];

		return {
			key: 'ulMarking',
			l: l.ulMarking,
			values,
			parseValue: (val: StandardPcb['ulMarking']) => values.find((v) => v.value === val)?.title
		};
	})();

	const dateCode = (() => {
		const values = [
			{ title: l.dateCode.values.velenovaPrefer, value: 'VELENOVA_PREFER' },
			{ title: l.dateCode.values.customerRequired, value: 'CUSTOMER_REQUIRED' },
			{ title: l.dateCode.values.updateDesignedDateCode, value: 'UPDATE_DESIGNED_DATE_CODE' },
			{ title: lg.common.none, value: 'NONE' }
		] as { title: string; value: StandardPcb['dateCode'] }[];

		return {
			key: 'dateCode',
			l: l.dateCode,
			values,
			parseValue: (val: StandardPcb['dateCode']) => values.find((v) => v.value === val)?.title
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
			value: StandardPcb['customizedServices'][number];
			l: { title?: string; description?: string; url?: string; imgSrc?: string };
			url?: string;
			imgSrc?: string;
		}[];

		return {
			key: 'customizedServices',
			l: l.customizedServices,
			values,
			parseValue: (val: StandardPcb['customizedServices']) =>
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
		copperLayer,
		solderMask,
		silkscreen,
		material,
		fr4TG,
		rogers,
		thermalConductivity,
		thermoElectricSeparation,
		structureOfMCPCB,
		thickness,
		minTrack,
		minHoleSize,
		solderMaskColor,
		silkscreenColor,
		uvPrinting,
		edgeConnector,
		surfaceFinish,
		viaProcess,
		finishedCopper,
		innerCopper,
		removeProductNo,
		peelableSolderMask,
		holeCopperThickness,
		ulMarking,
		dateCode,
		dateCodeDescription,
		customizedServices,
		specialRequests
	};
};
