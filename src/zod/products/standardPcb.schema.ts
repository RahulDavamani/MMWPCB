import { z } from 'zod';

export const spBoardType = z.enum(['SINGLE_PIECES', 'PANEL_BY_CUSTOMER', 'PANEL_BY_VELENOVA']);

export const spRouteProcess = z.enum(['VELENOVA_PREFER', 'V_SCORING', 'TAB_ROUTE', 'V_SCORING_AND_TAB_ROUTE']);

export const spCopperLayer = z.enum(['TOP_LAYER', 'BOTTOM_LAYER', 'NONE']);

export const spSolderMask = z.enum(['TOP_SIDE', 'BOTTOM_SIDE', 'BOTH_SIDES', 'NONE']);

export const spSilkscreen = z.enum(['TOP_SIDE', 'BOTTOM_SIDE', 'BOTH_SIDES', 'NONE']);

export const spMaterial = z.enum(['FR_4', 'ALUMINUM', 'ROGERS', 'HDI', 'COPPER_BASE']);

export const spFr4TG = z.enum(['TG130_140', 'TG150_160', 'TG170_180', 'S1000H_TG150', 'S1000_2M_TG170']);

export const spRogers = z.enum(['ROGERS_4003C', 'ROGERS_4350B']);

export const spStructureMCPCB = z.enum(['METAL_CORE_MIDDLE', 'METAL_BASE_BOTTOM']);

export const spSolderMaskColor = z.enum([
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

export const spSilkscreenColor = z.enum(['WHITE', 'BLACK', 'YELLOW', 'NONE']);

export const spUVPrinting = z.enum(['SINGLE_SIDED_TOP', 'SINGLE_SIDED_BOTTOM', 'DOUBLE_SIDED', 'NONE']);

export const spSurfaceFinish = z.enum([
	'HASL_WITH_LEAD',
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

export const spViaProcess = z.enum(['TENTING_VIAS', 'PLUGGED_VIAS_WITH_SOLDER_MASK', 'VIAS_NOT_COVERED']);

export const spRemoveProductNo = z.enum(['YES', 'NO', 'SPECIFY_LOCATION']);

export const spPeelableSolderMask = z.enum(['TOP_SIDE', 'BOTTOM_SIDE', 'BOTH_SIDES', 'NONE']);

export const spUlMarking = z.enum([
	'TOP_SILK_SCREEN',
	'BOTTOM_SILK_SCREEN',
	'TOP_SOLDER_MASK',
	'BOTTOM_SOLDER_MASK',
	'TOP_COPPER',
	'BOTTOM_COPPER',
	'DEFAULT',
	'NONE'
]);

export const spDateCode = z.enum(['VELENOVA_PREFER', 'CUSTOMER_REQUIRED', 'UPDATE_DESIGNED_DATE_CODE', 'NONE']);

export const spCustomizedServices = z.enum([
	'HALF_CUT',
	'EDGE_PLATING',
	'IMPEDANCE_CONTROL',
	'HALOGEN_FREE',
	'CUSTOM_STACKUP',
	'CARBON_INK',
	'ALL_VIAS_FILLED_WITH_RESIN_AND_CAPPED',
	'VIA_IN_PAD',
	'PRESS_FIT_HOLES',
	'COUNTERSINK',
	'Z_AXIS_MILLING',
	'BLACK_FR4',
	'EMBEDDED_COPPER_PCB',
	'CAVITY_PCB',
	'SEMI_FLEX_PCB',
	'WHOLE_PARTIALLY_HYBRID_PCB',
	'BACK_DRILL_PCB',
	'LEADLESS_PARTIALLY_PLATED_HARD_GOLD'
]);

export const standardPcbSchema = z.object({
	id: z.string().optional(),
	name: z.string().min(1),
	fileName: z.string().min(1).optional(),
	buildTime: z.string().min(1),
	initialPrice: z.number(),
	finalPrice: z.number().optional(),
	boardType: spBoardType,
	xoutAllowance: z.boolean().optional(),
	routeProcess: spRouteProcess.optional(),
	breakAwayRail: z.boolean().optional(),
	panelRequirements: z.string().optional(),
	differentDesign: z.number().gt(0),
	length: z.number().gt(0),
	width: z.number().gt(0),
	quantity: z.number().gt(0),
	layers: z.number().gt(0),
	layerOrder: z.array(z.string()),
	copperLayer: spCopperLayer.optional(),
	solderMask: spSolderMask.optional(),
	silkscreen: spSilkscreen.optional(),
	material: spMaterial,
	fr4TG: spFr4TG.optional(),
	thermalConductivity: z.number().optional(),
	thermoElectricSeparation: z.boolean().optional(),
	rogers: spRogers.optional(),
	structureOfMCPCB: spStructureMCPCB.optional(),
	thickness: z.number(),
	minTrack: z.number(),
	minHoleSize: z.number(),
	solderMaskColor: spSolderMaskColor,
	silkscreenColor: spSilkscreenColor,
	uvPrinting: spUVPrinting,
	edgeConnector: z.boolean(),
	surfaceFinish: spSurfaceFinish,
	surfaceThickness: z.number().optional(),
	acceptHASLChange: z.boolean().optional(),
	viaProcess: spViaProcess,
	finishedCopper: z.number(),
	innerCopper: z.number().optional(),
	removeProductNo: spRemoveProductNo,
	peelableSolderMask: spPeelableSolderMask,
	holeCopperThickness: z.number(),
	ulMarking: spUlMarking.optional(),
	dateCode: spDateCode,
	dateCodeDescription: z.string().optional(),
	customizedServices: z.array(spCustomizedServices),
	specialRequests: z.string()
});

export type StandardPcb = z.infer<typeof standardPcbSchema>;
