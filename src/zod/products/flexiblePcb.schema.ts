import { z } from 'zod';

export const fpBoardType = z.enum(['SINGLE_PIECES', 'PANEL_BY_CUSTOMER', 'PANEL_BY_VELENOVA']);

export const fpRouteProcess = z.enum(['VELENOVA_PREFER', 'V_SCORING', 'TAB_ROUTE', 'V_SCORING_AND_TAB_ROUTE']);

export const fpPetType = z.enum(['TRANSPARENT', 'TRANSLUCENT']);

export const fpSolderMaskColor = z.enum(['YELLOW_COVERLAY', 'WHITE_COVERLAY', 'BLACK_COVERLAY', 'TRANSPARENT', 'NONE']);

export const fpSilkscreenColor = z.enum(['WHITE', 'BLACK', 'NONE']);

export const fpStiffener = z.enum(['TOP_SIDE', 'BOTTOM_SIDE', 'BOTH_SIDES', 'NONE']);

export const fpTape = z.enum(['THREEM_467', 'TESA_8853', 'TESA_8854', 'THREEM_9495LE', 'NONE']);

export const fpDoubleSidedTape = z.enum(['HT_A1134', 'NONE']);

export const fpEmiShieldingFilm = z.enum(['HCF_6000G', 'PC800', 'NONE']);

export const fpPeelableSolderMask = z.enum(['TOP_SIDE', 'BOTTOM_SIDE', 'BOTH_SIDES', 'NONE']);

export const fpUlMarking = z.enum([
	'TOP_SILK_SCREEN',
	'BOTTOM_SILK_SCREEN',
	'TOP_SOLDER_MASK',
	'BOTTOM_SOLDER_MASK',
	'TOP_COPPER',
	'BOTTOM_COPPER',
	'DEFAULT',
	'NONE'
]);

export const fpDateCode = z.enum(['VELENOVA_PREFER', 'CUSTOMER_REQUIRED', 'UPDATE_DESIGNED_DATE_CODE', 'NONE']);

export const fpCustomizedServices = z.enum([
	'HALF_CUT',
	'EDGE_PLATING',
	'IMPEDANCE_CONTROL',
	'VIA_FILLED_WITH_COPPER',
	'FPC_WITH_AIRGAP',
	'SINGLE_SIDE_DOUBLE_ACCESS',
	'STIFFENER_BETWEEN_EDGE_CONNECTOR'
]);

export const flexiblePcbSchema = z.object({
	id: z.string().nullish(),
	name: z.string().min(1),
	files: z.array(z.object({ name: z.string() })),
	buildTime: z.number().gt(0),
	weight: z.number(),
	initialPrice: z.number().nullish(),
	finalPrice: z.number().nullish(),
	boardType: fpBoardType,
	xoutAllowance: z.boolean().nullish(),
	routeProcess: fpRouteProcess.nullish(),
	breakAwayRail: z.boolean().nullish(),
	panelRequirements: z.string().nullish(),
	differentDesign: z.number().gt(0),
	length: z.number().gt(0),
	width: z.number().gt(0),
	quantity: z.number().gt(0),
	layers: z.number().gt(0),
	material: z.string().min(1),
	petType: fpPetType.nullish(),
	thickness: z.number(),
	minTrack: z.number(),
	minHoleSize: z.number(),
	solderMaskColor: fpSolderMaskColor,
	silkscreenColor: fpSilkscreenColor,
	edgeConnector: z.boolean(),
	stiffener: fpStiffener,
	surfaceFinish: z.string().min(1),
	finishedCopper: z.number(),
	etest: z.boolean(),
	tape: fpTape,
	doubleSidedTape: fpDoubleSidedTape,
	emiShieldingFilm: fpEmiShieldingFilm,
	peelableSolderMask: fpPeelableSolderMask,
	ulMarking: fpUlMarking,
	dateCode: fpDateCode,
	dateCodeDescription: z.string().nullish(),
	customizedServices: z.array(fpCustomizedServices),
	specialRequests: z.string()
});

export type FlexiblePcb = z.infer<typeof flexiblePcbSchema>;

export const flexiblePcbPartialSchema = flexiblePcbSchema.partial();
export type FlexiblePcbPartial = z.infer<typeof flexiblePcbPartialSchema>;
