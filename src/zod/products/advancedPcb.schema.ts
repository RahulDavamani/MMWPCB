import { z } from 'zod';

export const apType = z.enum(['THROUGH_HOLE', 'HDI']);
export const apBoardSpec = z.enum([
	'IPC_6012_CLASS_2',
	'IPC_6012_CLASS_3',
	'IATF_16949',
	'ISO_13485',
	'CUSTOMER_STANDARD'
]);

export const apBoardType = z.enum(['SINGLE_PIECES', 'PANEL_BY_CUSTOMER', 'PANEL_BY_VELENOVA']);

export const apRouteProcess = z.enum(['VELENOVA_PREFER', 'V_SCORING', 'TAB_ROUTE', 'V_SCORING_AND_TAB_ROUTE']);

export const apCopperLayer = z.enum(['TOP_LAYER', 'BOTTOM_LAYER', 'NONE']);
export const apSolderMask = z.enum(['TOP_SIDE', 'BOTTOM_SIDE', 'BOTH_SIDES', 'NONE']);
export const apSilkscreen = z.enum(['TOP_SIDE', 'BOTTOM_SIDE', 'BOTH_SIDES', 'NONE']);

export const apMaterial = z.enum([
	'TG140_FR4',
	'TG150_FR4',
	'TG170_FR4',
	'TG150_FR4_HALOGEN_FREE',
	'TG170_FR4_HALOGEN_FREE',
	'HIGH_CTI',
	'HIGH_CTI_HALOGEN_FREE',
	'HIGH_SPEED',
	'HIGH_FREQUENCY'
]);

export const apSolderMaskColor = z.enum([
	'GREEN',
	'RED',
	'YELLOW',
	'BLUE',
	'WHITE',
	'BLACK',
	'PINK',
	'GREY',
	'ORANGE',
	'PURPLE',
	'MATTE_BLACK',
	'MATTE_GREEN',
	'MATTE_BLUE',
	'MATTE_RED',
	'TRANSPARENT',
	'NONE'
]);

export const apSilkscreenColor = z.enum(['WHITE', 'BLACK', 'YELLOW', 'BLUE', 'GREY', 'NONE']);
export const apSurfaceFinish = z.enum([
	'HASL_LEAD_FREE',
	'IMMERSION_GOLD',
	'OSP',
	'HARD_GOLD',
	'IMMERSION_SILVER',
	'IMMERSION_TIN',
	'HASL_LEAD_FREE_SELECTIVE_IMMERSION_GOLD',
	'HASL_LEAD_FREE_SELECTIVE_HARD_GOLD',
	'IMMERSION_GOLD_SELECTIVE_HARD_GOLD',
	'ENEPIG',
	'PLAIN_COPPER'
]);

export const apPeelableSolderMask = z.enum(['TOP_SIDE', 'BOTTOM_SIDE', 'BOTH_SIDES', 'NONE']);
export const apUlMarking = z.enum([
	'TOP_SILK_SCREEN',
	'BOTTOM_SILK_SCREEN',
	'TOP_SOLDER_MASK',
	'BOTTOM_SOLDER_MASK',
	'TOP_COPPER',
	'BOTTOM_COPPER',
	'DEFAULT',
	'NONE'
]);

export const apDateCode = z.enum(['VELENOVA_PREFER', 'CUSTOMER_REQUIRED', 'UPDATE_DESIGNED_DATE_CODE', 'NONE']);
export const apCustomizedServices = z.enum([
	'HALF_CUT',
	'EDGE_PLATING',
	'IMPEDANCE_CONTROL',
	'CUSTOM_STACKUP',
	'CARBON_INK',
	'ALL_VIAS_FILLED_WITH_RESIN_AND_CAPPED',
	'VIA_IN_PAD',
	'COUNTERSINK',
	'Z_AXIS_MILLING',
	'PRESS_FIT_HOLES',
	'VIA_FILLED_WITH_COPPER',
	'BLACK_FR4',
	'EMBEDDED_COPPER_PCB',
	'CAVITY_PCB',
	'SEMI_FLEX_PCB',
	'WHOLE_PARTIALLY_HYBRID_PCB',
	'BACK_DRILL_PCB',
	'LEADLESS_PARTIALLY_PLATED_HARD_GOLD'
]);

export const apFinalInspectionReport = z.enum([
	'DEFAULT_INSPECTION_REPORT',
	'MICROSECTION_INSPECTION_REPORT',
	'SOLDERABILITY_INSPECTION_REPORT',
	'THERMAL_STRESS_INSPECTION_REPORT',
	'IMPEDANCE_INSPECTION_REPORT',
	'HUMIDITY_INDICATOR_CARD'
]);

export const advancedPcbSchema = z.object({
	id: z.string().optional(),
	name: z.string().min(1),
	fileName: z.string().min(1).optional(),
	buildTime: z.number().gt(0),
	weight: z.number(),
	initialPrice: z.number(),
	finalPrice: z.number().optional(),
	pcbType: apType,
	boardSpec: apBoardSpec,
	boardType: apBoardType,
	xoutAllowance: z.boolean().optional(),
	routeProcess: apRouteProcess.optional(),
	breakAwayRail: z.boolean().optional(),
	panelRequirements: z.string().optional(),
	differentDesign: z.number().gt(0),
	length: z.number().gt(0),
	width: z.number().gt(0),
	quantity: z.number().gt(0),
	layers: z.number().gt(0),
	layerOrder: z.array(z.string()),
	copperLayer: apCopperLayer.optional(),
	solderMask: apSolderMask.optional(),
	silkscreen: apSilkscreen.optional(),
	material: apMaterial,
	highSpeed: z.string().optional(),
	highFrequency: z.string().optional(),
	thickness: z.number(),
	minTrack: z.number(),
	minHoleSize: z.number(),
	solderMaskColor: apSolderMaskColor,
	silkscreenColor: apSilkscreenColor,
	edgeConnector: z.boolean(),
	surfaceFinish: apSurfaceFinish,
	surfaceThickness: z.number().optional(),
	finishedCopper: z.number(),
	initialCopper: z.number().optional(),
	peelableSolderMask: apPeelableSolderMask,
	holeCopperThickness: z.number(),
	ulMarking: apUlMarking.optional(),
	dateCode: apDateCode,
	dateCodeDescription: z.string().optional(),
	customizedServices: z.array(apCustomizedServices),
	finalInspectionReport: z.array(apFinalInspectionReport),
	specialRequests: z.string()
});

export type AdvancedPcb = z.infer<typeof advancedPcbSchema>;
