import { z } from 'zod';

const RFBoardType = z.enum(['SINGLE_PIECES', 'PANEL_BY_CUSTOMER', 'PANEL_BY_VELENOVA']);

const RFRouteProcess = z.enum(['VELENOVA_PREFER', 'V_SCORING', 'TAB_ROUTE', 'V_SCORING_AND_TAB_ROUTE']);

const RFMaterial = z.enum(['POLYIMIDE_FLEX_FR4']);

const RFSurfaceFinish = z.enum(['IMMERSION_GOLD', 'OSP', 'IMMERSION_SILVER']);

const RFCoverlay = z.enum(['YELLOW_COVERLAY', 'WHITE_COVERLAY', 'BLACK_COVERLAY', 'NONE']);

const RFSolderMaskColor = z.enum([
	'GREEN',
	'RED',
	'YELLOW',
	'BLUE',
	'WHITE',
	'BLACK',
	'PURPLE',
	'MATTE_BLACK',
	'MATTE_GREEN',
	'NONE'
]);

const RFSilkscreenColor = z.enum(['WHITE', 'BLACK', 'NONE']);

const RFUlMarking = z.enum([
	'TOP_SILK_SCREEN',
	'BOTTOM_SILK_SCREEN',
	'TOP_SOLDER_MASK',
	'BOTTOM_SOLDER_MASK',
	'TOP_COPPER',
	'BOTTOM_COPPER',
	'DEFAULT',
	'NONE'
]);

const RFDateCode = z.enum(['VELENOVA_PREFER', 'CUSTOMER_REQUIRED', 'UPDATE_DESIGNED_DATE_CODE', 'NONE']);

const RFCustomizedServices = z.enum([
	'HALF_CUT',
	'IMPEDANCE_CONTROL',
	'ALL_VIAS_FILLED_WITH_RESIN_AND_CAPPED',
	'VIA_IN_PAD',
	'HDI'
]);

const RFFinalInspectionReport = z.enum([
	'DEFAULT_INSPECTION_REPORT',
	'MICROSECTION_INSPECTION_REPORT',
	'SOLDERABILITY_INSPECTION_REPORT',
	'THERMAL_STRESS_INSPECTION_REPORT',
	'IMPEDANCE_INSPECTION_REPORT',
	'HUMIDITY_INDICATOR_CARD'
]);

export const rigidFlexSchema = z.object({
	id: z.string().nullish(),
	name: z.string().min(1),
	fileName: z.string().min(1).nullish(),
	buildTime: z.number().gt(0),
	weight: z.number(),
	initialPrice: z.number().nullish(),
	finalPrice: z.number().nullish(),
	boardType: RFBoardType,
	xoutAllowance: z.boolean().nullish(),
	routeProcess: RFRouteProcess.nullish(),
	breakAwayRail: z.boolean().nullish(),
	panelRequirements: z.string().nullish(),
	differentDesign: z.number().gt(0),
	length: z.number().gt(0),
	width: z.number().gt(0),
	quantity: z.number().gt(0),
	layers: z.number().gt(0),
	material: RFMaterial,
	thickness: z.number(),
	minTrack: z.number(),
	minHoleSize: z.number(),
	surfaceFinish: RFSurfaceFinish,
	surfaceThickness: z.array(z.number()),
	edgeConnector: z.boolean(),
	fpcLayers: z.number(),
	fpcThickness: z.number(),
	fpcCoverlay: RFCoverlay,
	fpcSilkscreenColor: RFSilkscreenColor,
	fpcFinishedCopper: z.number(),
	rpcSolderMaskColor: RFSolderMaskColor,
	rpcSilkscreenColor: RFSilkscreenColor,
	rpcFinishedCopper: z.number(),
	ulMarking: RFUlMarking,
	dateCode: RFDateCode,
	dateCodeDescription: z.string().nullish(),
	customizedServices: z.array(RFCustomizedServices),
	finalInspectionReport: z.array(RFFinalInspectionReport),
	specialRequests: z.string()
});

export type RigidFlex = z.infer<typeof rigidFlexSchema>;

export const rigidFlexPartialSchema = rigidFlexSchema.partial();
export type RigidFlexPartial = z.infer<typeof rigidFlexPartialSchema>;
