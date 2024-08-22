import { z } from 'zod';

export const asFlexibleOption = z.enum(['TURNKEY', 'KITTED', 'COMBO']);
export const asBoardType = z.enum(['SINGLE_PIECES', 'PANELIZED_PCBS']);
export const asSide = z.enum(['TOP_SIDE', 'BOTTOM_SIDE', 'BOTH_SIDES']);
export const asCustomizedServices = z.enum([
	'DEPANEL_BOARDS',
	'FUNCTION_TEST',
	'CONFORMAL_COATING',
	'FIRMWARE_LOADING',
	'PRESS_FIT',
	'BOX_BUILD',
	'CABLE_WIRE_HARNESS',
	'PACKAGE_BOX'
]);

export const assemblySchema = z.object({
	id: z.string().optional(),
	name: z.string().min(1),
	fileName: z.string().min(1).optional(),
	buildTime: z.number().gt(0),
	weight: z.number(),
	initialPrice: z.number(),
	finalPrice: z.number().optional(),
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
	customizedServices: z.array(asCustomizedServices),
	xrayTest: z.number(),
	detailedInformation: z.string()
});

export type Assembly = z.infer<typeof assemblySchema>;
