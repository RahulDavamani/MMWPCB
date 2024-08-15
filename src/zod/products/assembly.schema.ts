import { z } from 'zod';

export const asFlexibleOption = z.enum(['TURNKEY', 'KITTED', 'COMBO']);
export const asBoardType = z.enum(['SINGLE_PIECES', 'PANELIZED_PCBS']);
export const asSide = z.enum(['TOP_SIDE', 'BOTTOM_SIDE', 'BOTH_SIDES']);

export const assemblySchema = z.object({
	id: z.string().nullable(),
	flexibleOption: asFlexibleOption,
	boardType: asBoardType,
	side: asSide,
	quantity: z.number(),
	sensitiveParts: z.boolean(),
	alternatesChina: z.boolean(),
	uniqueParts: z.number(),
	smdParts: z.number(),
	bgaParts: z.number(),
	throughHoleParts: z.number(),
	depanelBoards: z.boolean(),
	functionTest: z.boolean(),
	conformalCoating: z.boolean(),
	firmwareLoading: z.boolean(),
	pressFit: z.boolean(),
	boxBuild: z.boolean(),
	cableWireHarness: z.boolean(),
	packageBox: z.boolean(),
	xrayTest: z.number(),
	detailedInformation: z.string()
});

export type Assembly = z.infer<typeof assemblySchema>;
