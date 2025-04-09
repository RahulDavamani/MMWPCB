import { z } from 'zod';

const tpDesignUnit = z.enum(['MM', 'CM', 'UM', 'INCH']);
const tpMaterial = z.enum([
	'ALUMINUM',
	'STAINLESS_STEEL',
	'NYLON',
	'ABS',
	'PETG',
	'CO_CR_ALLOY',
	'PURE_TITANIUM',
	'TITANIUM_ALLOY',
	'ALUMINUM_ALLOY',
	'HIGH_TEMPERATURE_NICKEL_ALLOY',
	'OTHERS'
]);
const tpMaterialType = z.enum([
	'ALUMINUM',
	'STAINLESS_STEEL',
	'PA_12',
	'HP_PA_12',
	'GLASS_FIBER_NYLON',
	'ABS',
	'STRATASYS_ABS',
	'PETG'
]);
const tpColor = z.enum([
	'METALLIC',
	'SILVER',
	'WHITE',
	'DARK_BLACK',
	'BLACK',
	'SILVER_GRAY',
	'RED',
	'BLUE',
	'YELLOW',
	'GREEN'
]);
const tpProcess = z.enum(['SLM', 'SLS', 'FDM']);
const tpSurfaceFinish = z.enum(['NONE', 'SPRAY_PAINTING_MATT', 'SPRAY_PAINTING_HIGH_GLOSS', 'SANDING_1000', 'DYING']);
const tpPartsAssembly = z.enum(['NO', 'ASSEMBLY_TEST', 'SHIP_ASSEMBLY']);
const tpProductDescription = z.enum([
	'PRINTER_ENCLOSURE',
	'INK_CARTRIDGE',
	'MOTORCYCLE_CONNECTOR_ENCLOSURE',
	'CNC_LATHE_REPLACEMENT_ARM',
	'HEADBAND',
	'WHEEL_PLATE',
	'RECORDER_ENCLOSURE',
	'COMPOUND_OPTICAL_MICROSCOPE'
]);

export const threePrintingSchema = z.object({
	id: z.string().nullish(),
	name: z.string().min(1),
	files: z.array(z.object({ name: z.string() })),

	weight: z.number(),
	initialPrice: z.number().nullish(),
	finalPrice: z.number().nullish(),

	quantity: z.array(z.number()).min(1),
	designUnits: tpDesignUnit,
	material: tpMaterial,
	materialType: tpMaterialType,
	color: tpColor,
	process: tpProcess,
	surfaceFinish: tpSurfaceFinish,
	surfaceFinishColor: z.string().nullish(),

	technicalDrawing: z.string().nullish(),
	threadsTappedHoles: z.boolean(),
	inserts: z.boolean(),

	silkScreen: z.string(),
	laserEngraving: z.boolean(),
	partsAssembly: tpPartsAssembly,
	wallThicknessRisk: z.boolean(),
	printedThreadsRisk: z.boolean(),

	productDescription: tpProductDescription,
	specialRequests: z.string()
});

export type ThreePrinting = z.infer<typeof threePrintingSchema>;

export const threePrintingPartialSchema = threePrintingSchema.partial();
export type ThreePrintingPartial = z.infer<typeof threePrintingPartialSchema>;
