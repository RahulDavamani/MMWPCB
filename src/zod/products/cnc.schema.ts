import { z } from 'zod';

const cncDesignUnit = z.enum(['MM', 'CM', 'INCH']);
const cncMaterial = z.enum(['ALUMINUM', 'STAINLESS_STEEL', 'MILD_STEEL', 'COPPER', 'CARBON_FIBER']);
const cncMaterialType = z.enum([
	'ALUMINUM_5052',
	'ALUMINUM_6061',
	'ALUMINUM_7075',
	'ALUMINUM_2A12',
	'STAINLESS_STEEL_201',
	'STAINLESS_STEEL_303',
	'STAINLESS_STEEL_304',
	'STAINLESS_STEEL_316',
	'STAINLESS_STEEL_430',
	'MILD_STEEL_1018',
	'MILD_STEEL_1045',
	'MILD_STEEL_A36',
	'COPPER',
	'CARBON_FIBER_PLATE'
]);
const cncColor = z.enum(['SILVER_WHITE', 'SILVER', 'SILVER_GRAY', 'COPPER', 'BLACK']);
const cncSurfaceFinish = z.enum([
	'NONE',
	'STANDARD',
	'BRUSHED',
	'BEAD_BLAST',
	'SPRAY_PAINTING_MATT',
	'SPRAY_PAINTING_HIGH_GLOSS',
	'POWDER_COAT_MATT',
	'POWDER_COAT_HIGH_GLOSS',
	'SANDING_1000',
	'OTHERS'
]);
const cncPartsAssembly = z.enum(['NO', 'ASSEMBLY_TEST', 'SHIP_ASSEMBLY']);
const cncFinishedAppearance = z.enum(['STANDARD', 'PREMIUM']);
const cncInspection = z.enum([
	'STANDARD_INSPECTION',
	'STANDARD_INSPECTION_FORMAL_REPORT',
	'CMM_INSPECTION_FORMAL_REPORT',
	'SOURCE_MATERIAL_CERTIFICATION'
]);
const cncProductDescription = z.enum([
	'PRINTER_ENCLOSURE',
	'INK_CARTRIDGE',
	'MOTORCYCLE_CONNECTOR_ENCLOSURE',
	'CNC_LATHE_REPLACEMENT_ARM',
	'HEADBAND',
	'WHEEL_PLATE',
	'RECORDER_ENCLOSURE',
	'COMPOUND_OPTICAL_MICROSCOPE'
]);

export const cncSchema = z.object({
	id: z.string().nullish(),
	name: z.string().min(1),
	files: z.array(z.object({ name: z.string() })),

	weight: z.number(),
	initialPrice: z.number().nullish(),
	finalPrice: z.number().nullish(),

	quantity: z.array(z.number()).min(1),
	designUnits: cncDesignUnit,
	material: cncMaterial,
	materialType: cncMaterialType,
	color: cncColor,
	surfaceFinish: cncSurfaceFinish,
	surfaceFinishColor: z.string().nullish(),

	technicalDrawing: z.string().nullish(),
	threadsTappedHoles: z.boolean(),
	inserts: z.boolean(),
	tolerance: z.number(),
	surfaceRoughness: z.number(),

	silkScreen: z.string(),
	laserEngraving: z.boolean(),
	partsAssembly: cncPartsAssembly,
	finishedAppearance: cncFinishedAppearance,
	inspection: cncInspection,

	productDescription: cncProductDescription,
	specialRequests: z.string()
});

export type CNC = z.infer<typeof cncSchema>;

export const cncPartialSchema = cncSchema.partial();
export type CNCPartial = z.infer<typeof cncPartialSchema>;
