import type { Lang } from '$lib/locales/en';
import type { RigidFlex } from '../../../zod/products/rigidFlex.schema';

export const rigidFlexDetails = (lg: Lang) => {
	const l = lg.instantQuote.rigidFlex;

	const id = {
		key: 'id',
		l: l.id,
		parseValue: (val: RigidFlex['id']) => val?.toUpperCase()
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
		validate: (val: RigidFlex['name']) => val.length < 1
	};

	const fileName = {
		key: 'fileName',
		l: l.fileName,
		parseValue: (val: RigidFlex['fileName']) => val?.split('__')[1]
	};

	const buildTime = {
		key: 'buildTime',
		l: l.buildTime
	};

	const weight = {
		key: 'weight',
		l: l.weight,
		parseValue: (val: RigidFlex['weight']) => `${val.toFixed(2)} kg`
	};

	const initialPrice = {
		key: 'initialPrice',
		l: l.initialPrice,
		parseValue: (val: RigidFlex['initialPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : 'RFQ')
	};

	const finalPrice = {
		key: 'finalPrice',
		l: l.finalPrice,
		parseValue: (val: RigidFlex['finalPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : val)
	};

	const boardType = (() => {
		const values = [
			{ title: l.boardType.values.singlePieces, value: 'SINGLE_PIECES' },
			{ title: l.boardType.values.panelByCustomer, value: 'PANEL_BY_CUSTOMER' },
			{ title: l.boardType.values.panelByVelenova, value: 'PANEL_BY_VELENOVA' }
		] as { title: string; value: RigidFlex['boardType'] }[];

		return {
			key: 'boardType',
			l: l.boardType,
			url: '',
			imgSrc: '',
			values,
			parseValue: (val: RigidFlex['boardType']) => values.find((v) => v.value == val)?.title
		};
	})();

	const xoutAllowance = (() => {
		const values = [
			{ title: l.xoutAllowance.values.accept, value: true },
			{ title: l.xoutAllowance.values.decline, value: false }
		] as { title: string; value: RigidFlex['xoutAllowance'] }[];

		return {
			key: 'xoutAllowance',
			l: l.xoutAllowance,
			imgSrc: '',
			values,
			parseValue: (val: RigidFlex['xoutAllowance']) => values.find((v) => v.value === val)?.title
		};
	})();

	const routeProcess = (() => {
		const values = [
			{ title: l.routeProcess.values.velenovaPrefer, value: 'VELENOVA_PREFER' },
			{ title: l.routeProcess.values.vScoring, value: 'V_SCORING' },
			{ title: l.routeProcess.values.tabRoute, value: 'TAB_ROUTE' },
			{ title: l.routeProcess.values.vScoringTabRoute, value: 'V_SCORING_AND_TAB_ROUTE' }
		] as { title: string; value: RigidFlex['routeProcess'] }[];

		return {
			key: 'routeProcess',
			l: l.routeProcess,
			imgSrc: '',
			values,
			parseValue: (val: RigidFlex['routeProcess']) => values.find((v) => v.value === val)?.title
		};
	})();

	const breakAwayRail = (() => {
		const values = [
			{ title: lg.common.yes, value: true },
			{ title: lg.common.no, value: false }
		] as { title: string; value: RigidFlex['breakAwayRail'] }[];

		return {
			key: 'breakAwayRail',
			l: l.breakAwayRail,
			imgSrc: '',
			values,
			parseValue: (val: RigidFlex['breakAwayRail']) => values.find((v) => v.value === val)?.title
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
		validate: (val: RigidFlex['differentDesign']) => val < 1
	};

	const length = {
		key: 'length',
		l: l.length,
		validate: (val: RigidFlex['length']) => val < 1,
		parseValue: (val: RigidFlex['length']) => val + ' mm'
	};

	const width = {
		key: 'width',
		l: l.width,
		validate: (val: RigidFlex['width']) => val < 1,
		parseValue: (val: RigidFlex['width']) => val + ' mm'
	};

	const quantity = {
		key: 'quantity',
		l: l.quantity,
		url: '',
		validate: (val: RigidFlex['quantity']) => val < 1
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
		const values = [{ title: l.material.values.polyimideFlex, value: 'POLYIMIDE_FLEX_FR4' }] as {
			title: string;
			value: RigidFlex['material'];
		}[];

		return {
			key: 'material',
			l: l.material,
			values,
			parseValue: (val: RigidFlex['material']) => values.find((v) => v.value === val)?.title
		};
	})();

	const thickness = {
		key: 'thickness',
		l: l.thickness,
		values: [0.4, 0.6, 0.8, 1.0, 1.2, 1.6, 2.0, 2.4, 2.8, 3.2]
	};

	const minTrack = {
		key: 'minTrack',
		l: l.minTrack,
		values: [4, 5, 6],
		parseValue: (val: RigidFlex['minTrack']) => `${val}/${val}mil`
	};

	const minHoleSize = {
		key: 'minHoleSize',
		l: l.minHoleSize,
		values: [0.15, 0.2, 0.25, 0.3, 0],
		parseValue: (val: RigidFlex['minHoleSize']) => (val == 0 ? l.minHoleSize.noDrill : `${val}mm`)
	};

	const surfaceFinish = (() => {
		const values = [
			{ title: l.surfaceFinish.values.immersionGold, value: 'IMMERSION_GOLD' },
			{ title: l.surfaceFinish.values.osp, value: 'OSP' },
			{ title: l.surfaceFinish.values.immersionSilver, value: 'IMMERSION_SILVER' }
		] as { title: string; value: RigidFlex['surfaceFinish'] }[];

		return {
			key: 'surfaceFinish',
			l: l.surfaceFinish,
			values,
			parseValue: (val: RigidFlex['surfaceFinish']) => values.find((v) => v.value === val)?.title
		};
	})();

	const surfaceThickness = {
		key: 'surfaceThickness',
		l: l.surfaceThickness,
		immersionGold: {
			l: l.surfaceThickness.immersionGold,
			values: [[1], [2], [3]],
			parseValue: (val: RigidFlex['surfaceThickness']) => `${val[0]}U"`
		}
	};

	const edgeConnector = (() => {
		const values = [
			{ title: lg.common.yes, value: true },
			{ title: lg.common.no, value: false }
		] as { title: string; value: RigidFlex['edgeConnector'] }[];

		return {
			key: 'edgeConnector',
			l: l.edgeConnector,
			url: '',
			imgSrc: '',
			values,
			parseValue: (val: RigidFlex['edgeConnector']) => values.find((v) => v.value === val)?.title
		};
	})();

	const viaProcess = (() => {
		const values = [
			{ title: l.viaProcess.values.tentingVias, value: 'TENTING_VIAS' },
			{ title: l.viaProcess.values.pluggedViasSolderMask, value: 'PLUGGED_VIAS_WITH_SOLDER_MASK' },
			{ title: l.viaProcess.values.viasNotCovered, value: 'VIAS_NOT_COVERED' }
		] as { title: string; value: RigidFlex['viaProcess'] }[];

		return {
			key: 'viaProcess',
			l: l.viaProcess,
			values,
			parseValue: (val: RigidFlex['viaProcess']) => values.find((v) => v.value === val)?.title
		};
	})();

	const fpcLayers = {
		key: 'fpcLayers',
		l: l.fpcLayers,
		values: [1, 2, 4, 6, 8, 10]
	};

	const fpcThickness = {
		key: 'fpcThickness',
		l: l.fpcThickness,
		values: [0.08, 0.1, 0.13, 0.15, 0.18, 0.2, 0.23, 0.26, 0.3, 0.35, 0.4]
	};

	const fpcCoverlay = (() => {
		const values = [
			{
				title: `${lg.common.color.yellow} ${l.fpcCoverlay.coverlay}`,
				color: 'bg-yellow-400',
				value: 'YELLOW_COVERLAY'
			},
			{
				title: `${lg.common.color.white} ${l.fpcCoverlay.coverlay}`,
				color: 'bg-white',
				value: 'WHITE_COVERLAY'
			},
			{
				title: `${lg.common.color.black} ${l.fpcCoverlay.coverlay}`,
				color: 'bg-black',
				value: 'BLACK_COVERLAY'
			},
			{ title: lg.common.none, color: 'bg-gray-400', value: 'NONE' }
		] as { title: string; color: string; value: RigidFlex['fpcCoverlay'] }[];

		return {
			key: 'fpcCoverlay',
			l: l.fpcCoverlay,
			values,
			parseValue: (val: RigidFlex['fpcCoverlay']) => values.find((v) => v.value === val)?.title
		};
	})();

	const fpcSilkscreenColor = (() => {
		const values = [
			{ title: lg.common.color.white, color: 'bg-white', value: 'WHITE' },
			{ title: lg.common.color.black, color: 'bg-black', value: 'BLACK' },
			{ title: lg.common.none, color: 'bg-gray-400', value: 'NONE' }
		] as { title: string; color: string; value: RigidFlex['fpcSilkscreenColor'] }[];

		return {
			key: 'fpcSilkscreenColor',
			l: l.fpcSilkscreenColor,
			values,
			parseValue: (val: RigidFlex['fpcSilkscreenColor']) => values.find((v) => v.value === val)?.title
		};
	})();

	const fpcFinishedCopper = {
		key: 'fpcFinishedCopper',
		l: l.fpcFinishedCopper,
		values: [0.5, 1, 1.5, 2],
		parseValue: (val: RigidFlex['fpcFinishedCopper']) => `${val} oz Cu`
	};

	const rpcSolderMaskColor = (() => {
		const values = [
			{ title: lg.common.color.green, color: 'bg-green-400', value: 'GREEN' },
			{ title: lg.common.color.red, color: 'bg-red-400', value: 'RED' },
			{ title: lg.common.color.yellow, color: 'bg-yellow-400', value: 'YELLOW' },
			{ title: lg.common.color.blue, color: 'bg-blue-400', value: 'BLUE' },
			{ title: lg.common.color.white, color: 'bg-white', value: 'WHITE' },
			{ title: lg.common.color.black, color: 'bg-black', value: 'BLACK' },
			{ title: lg.common.none, color: 'bg-gray-400', value: 'NONE' },
			{ title: lg.common.color.purple, color: 'bg-purple-400', value: 'PURPLE' },
			{ title: lg.common.color.matteBlack, color: 'bg-black', value: 'MATTE_BLACK' },
			{ title: lg.common.color.matteGreen, color: 'bg-green-300', value: 'MATTE_GREEN' }
		] as { title: string; color: string; value: RigidFlex['rpcSolderMaskColor'] }[];

		return {
			key: 'rpcSolderMaskColor',
			l: l.rpcSolderMaskColor,
			values,
			parseValue: (val: RigidFlex['rpcSolderMaskColor']) => values.find((v) => v.value === val)?.title
		};
	})();

	const rpcSilkscreenColor = (() => {
		const values = [
			{ title: lg.common.color.white, color: 'bg-white', value: 'WHITE' },
			{ title: lg.common.color.black, color: 'bg-black', value: 'BLACK' },
			{ title: lg.common.none, color: 'bg-gray-400', value: 'NONE' }
		] as { title: string; color: string; value: RigidFlex['rpcSilkscreenColor'] }[];

		return {
			key: 'rpcSilkscreenColor',
			l: l.rpcSilkscreenColor,
			values,
			parseValue: (val: RigidFlex['rpcSilkscreenColor']) => values.find((v) => v.value === val)?.title
		};
	})();

	const rpcFinishedCopper = {
		key: 'rpcFinishedCopper',
		l: l.rpcFinishedCopper,
		values: [1, 2, 3, 4],
		parseValue: (val: RigidFlex['rpcFinishedCopper']) => `${val} oz Cu`
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
		] as { title: string; value: RigidFlex['ulMarking'] }[];

		return {
			key: 'ulMarking',
			l: l.ulMarking,
			values,
			parseValue: (val: RigidFlex['ulMarking']) => values.find((v) => v.value === val)?.title
		};
	})();

	const dateCode = (() => {
		const values = [
			{ title: l.dateCode.values.velenovaPrefer, value: 'VELENOVA_PREFER' },
			{ title: l.dateCode.values.customerRequired, value: 'CUSTOMER_REQUIRED' },
			{ title: l.dateCode.values.updateDesignedDateCode, value: 'UPDATE_DESIGNED_DATE_CODE' },
			{ title: lg.common.none, value: 'NONE' }
		] as { title: string; value: RigidFlex['dateCode'] }[];

		return {
			key: 'dateCode',
			l: l.dateCode,
			values,
			parseValue: (val: RigidFlex['dateCode']) => values.find((v) => v.value === val)?.title
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
				value: 'IMPEDANCE_CONTROL',
				l: l.customizedServices.values.impedanceControl
			},
			{
				value: 'ALL_VIAS_FILLED_WITH_RESIN_AND_CAPPED',
				l: l.customizedServices.values.allViasFilled
			},
			{
				value: 'VIA_IN_PAD',
				l: l.customizedServices.values.viaInPad,
				url: ''
			},
			{
				value: 'HDI',
				l: l.customizedServices.values.hdi
			}
		] as {
			value: RigidFlex['customizedServices'][number];
			l: { title?: string; description?: string; url?: string; imgSrc?: string };
			url?: string;
			imgSrc?: string;
		}[];

		return {
			key: 'customizedServices',
			l: l.customizedServices,
			values,
			parseValue: (val: RigidFlex['customizedServices']) =>
				val.map((v) => values.find((x) => x.value === v)?.l.title).join(', ')
		};
	})();

	const finalInspectionReport = (() => {
		const values = [
			{ title: l.finalInspectionReport.values.defaultInspectionReport, value: 'DEFAULT_INSPECTION_REPORT' },
			{ title: l.finalInspectionReport.values.microsectionInspectionReport, value: 'MICROSECTION_INSPECTION_REPORT' },
			{ title: l.finalInspectionReport.values.solderabilityInspectionReport, value: 'SOLDERABILITY_INSPECTION_REPORT' },
			{
				title: l.finalInspectionReport.values.thermalStressInspectionReport,
				value: 'THERMAL_STRESS_INSPECTION_REPORT'
			},
			{ title: l.finalInspectionReport.values.impedanceTestReport, value: 'IMPEDANCE_INSPECTION_REPORT' },
			{ title: l.finalInspectionReport.values.humidityIndicatorCards, value: 'HUMIDITY_INDICATOR_CARD' }
		] as { title: string; value: RigidFlex['finalInspectionReport'][number] }[];

		return {
			key: 'finalInspectionReport',
			l: l.finalInspectionReport,
			values,
			parseValue: (val: RigidFlex['finalInspectionReport']) =>
				val.map((v) => values.find((x) => x.value === v)?.title).join(', ')
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
		thickness,
		minTrack,
		minHoleSize,
		surfaceFinish,
		surfaceThickness,
		edgeConnector,
		viaProcess,
		fpcLayers,
		fpcThickness,
		fpcCoverlay,
		fpcSilkscreenColor,
		fpcFinishedCopper,
		rpcSolderMaskColor,
		rpcSilkscreenColor,
		rpcFinishedCopper,
		ulMarking,
		dateCode,
		dateCodeDescription,
		customizedServices,
		finalInspectionReport,
		specialRequests
	};
};
