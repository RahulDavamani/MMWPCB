import { z } from 'zod';

export const stType = z.enum(['FRAMEWORK', 'NON_FRAMEWORK']);
export const stSide = z.enum(['TOP_SIDE', 'BOTTOM_SIDE', 'TOP_BOTTOM_SINGLE', 'TOP_BOTTOM_SEPARATE']);
export const stExistingFiducials = z.enum(['HALF_LASERED', 'LASERED_THROUGH', 'NONE']);

export const stencilSchema = z.object({
	id: z.string().nullable(),
	buildTime: z.string(),
	initialPrice: z.number(),
	finalPrice: z.number().optional(),
	type: stType,
	multiLevel: z.boolean(),
	side: stSide,
	length: z.number(),
	width: z.number(),
	quantity: z.number(),
	thickness: z.number(),
	existingFiducials: stExistingFiducials,
	electroPolishing: z.boolean(),
	specialRequests: z.string()
});

export type Stencil = z.infer<typeof stencilSchema>;
