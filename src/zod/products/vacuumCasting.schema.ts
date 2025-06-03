import { z } from 'zod';

const vcDesignUnit = z.enum(['MM', 'CM', 'INCH']);
const vcMaterial = z.enum(['ABS', 'POM', 'NYLON', 'PVC', 'TPU']);
const vcColor = z.enum(['BLACK', 'WHITE', 'TRANSPARENT', 'GRAY', 'RED', 'BLUE', 'GREEN', 'YELLOW']);
const vcPartsAssembly = z.enum(['NO', 'ASSEMBLY_TEST', 'SHIP_ASSEMBLY']);
const vcFinishedAppearance = z.enum(['STANDARD', 'PREMIUM']);
const vcInspection = z.enum(['STANDARD_INSPECTION', 'SOURCE_MATERIAL_CERTIFICATION']);
const vcProductDescription = z.enum([
	'PRINTER_ENCLOSURE',
	'INK_CARTRIDGE',
	'MOTORCYCLE_CONNECTOR_ENCLOSURE',
	'CNC_LATHE_REPLACEMENT_ARM',
	'HEADBAND',
	'WHEEL_PLATE',
	'RECORDER_ENCLOSURE',
	'COMPOUND_OPTICAL_MICROSCOPE'
]);

export const vacuumCastingSchema = z.object({
	id: z.string().nullish(),
	name: z.string().min(1),
	files: z.array(z.object({ name: z.string() })),

	weight: z.number(),
	initialPrice: z.number().nullish(),
	finalPrice: z.number().nullish(),

	quantity: z.array(z.number()),
	designUnits: vcDesignUnit,
	material: vcMaterial,
	color: vcColor,

	technicalDrawing: z.string().nullish(),
	threadsTappedHoles: z.boolean(),
	inserts: z.boolean(),
	tolerance: z.number(),

	silkScreen: z.string(),
	laserEngraving: z.boolean(),
	partsAssembly: vcPartsAssembly,
	finishedAppearance: vcFinishedAppearance,
	inspection: vcInspection,

	productDescription: vcProductDescription,
	specialRequests: z.string()
});

export type VacuumCasting = z.infer<typeof vacuumCastingSchema>;

export const vacuumCastingPartialSchema = vacuumCastingSchema.partial();
export type VacuumCastingPartial = z.infer<typeof vacuumCastingPartialSchema>;
