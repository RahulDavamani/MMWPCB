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
	id: z.string().nullish(),
	name: z.string().min(1),
	files: z.array(z.object({ name: z.string() })),
	buildTime: z.number().gt(0),
	weight: z.number(),
	initialPrice: z.number().nullish(),
	finalPrice: z.number().nullish(),
	flexibleOption: asFlexibleOption,
	boardType: asBoardType,
	side: asSide,
	quantity: z.number(),
	sensitiveParts: z.boolean(),
	alternatesChina: z.boolean(),
	solderPads: z.number(),
	customizedServices: z.array(asCustomizedServices),
	xrayTest: z.number(),
	detailedInformation: z.string()
});

export type Assembly = z.infer<typeof assemblySchema>;

export const assemblyPartialSchema = assemblySchema.partial();
export type AssemblyPartial = z.infer<typeof assemblyPartialSchema>;
