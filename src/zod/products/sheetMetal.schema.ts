import { z } from 'zod';

const smDesignUnit = z.enum(['MM', 'CM', 'INCH']);
const smMaterial = z.enum(['ALUMINUM', 'STAINLESS_STEEL', 'MILD_STEEL', 'COPPER', 'CARBON_FIBER']);
const smMaterialType = z.enum([
	'ALUMINUM_5052',
	'ALUMINUM_6061',
	'STAINLESS_STEEL_201',
	'STAINLESS_STEEL_301',
	'STAINLESS_STEEL_304',
	'STAINLESS_STEEL_316',
	'MILD_STEEL_1018',
	'COPPER_101',
	'COPPER_C110',
	'COPPER_260',
	'CARBON_FIBER_PLATE'
]);
const smColor = z.enum(['SILVER_WHITE', 'SILVER', 'SILVER_GRAY', 'COPPER', 'BLACK']);
const smSurfaceFinish = z.enum([
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
const smPartsAssembly = z.enum(['NO', 'ASSEMBLY_TEST', 'SHIP_ASSEMBLY']);
const smFinishedAppearance = z.enum(['STANDARD', 'PREMIUM']);
const smInspection = z.enum([
	'STANDARD_INSPECTION',
	'STANDARD_INSPECTION_FORMAL_REPORT',
	'CMM_INSPECTION_FORMAL_REPORT',
	'SOURCE_MATERIAL_CERTIFICATION'
]);
const smProductDescription = z.enum([
	'PRINTER_ENCLOSURE',
	'INK_CARTRIDGE',
	'MOTORCYCLE_CONNECTOR_ENCLOSURE',
	'CNC_LATHE_REPLACEMENT_ARM',
	'HEADBAND',
	'WHEEL_PLATE',
	'RECORDER_ENCLOSURE',
	'COMPOUND_OPTICAL_MICROSCOPE'
]);

export const sheetMetalSchema = z.object({
	id: z.string().nullish(),
	name: z.string().min(1),
	files: z.array(z.object({ name: z.string() })),

	weight: z.number(),
	initialPrice: z.number().nullish(),
	finalPrice: z.number().nullish(),

	quantity: z.array(z.number()).min(1),
	designUnits: smDesignUnit,
	material: smMaterial,
	materialType: smMaterialType,
	color: smColor,
	surfaceFinish: smSurfaceFinish,
	surfaceFinishColor: z.string().nullish(),

	technicalDrawing: z.string().nullish(),
	threadsTappedHoles: z.boolean(),
	inserts: z.boolean(),
	tolerance: z.number(),
	wielding: z.boolean(),

	silkScreen: z.string(),
	laserEngraving: z.boolean(),
	partsAssembly: smPartsAssembly,
	finishedAppearance: smFinishedAppearance,
	inspection: smInspection,

	productDescription: smProductDescription,
	specialRequests: z.string()
});

export type SheetMetal = z.infer<typeof sheetMetalSchema>;

export const sheetMetalPartialSchema = sheetMetalSchema.partial();
export type SheetMetalPartial = z.infer<typeof sheetMetalPartialSchema>;
