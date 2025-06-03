import { z } from 'zod';

const imDesignUnit = z.enum(['MM', 'CM', 'INCH']);
const imMaterial = z.enum(['ABS', 'POM', 'NYLON', 'PVC', 'TPU']);
const imColor = z.enum(['BLACK', 'WHITE', 'TRANSPARENT', 'GRAY', 'RED', 'BLUE', 'GREEN', 'YELLOW']);
const imSPIFinish = z.enum([
	'SPI_A1',
	'SPI_A2',
	'SPI_A3',
	'SPI_B1',
	'SPI_B2',
	'SPI_B3',
	'SPI_C1',
	'SPI_C2',
	'SPI_C3',
	'SPI_D1',
	'SPI_D2',
	'SPI_D3'
]);
const imMolds = z.enum(['KEEP_MOLDS_FACTORY', 'MOLDS_SHIPPED']);
const imPartsAssembly = z.enum(['NO', 'ASSEMBLY_TEST', 'SHIP_ASSEMBLY']);
const imFinishedAppearance = z.enum(['STANDARD', 'PREMIUM']);
const imInspection = z.enum(['STANDARD_INSPECTION', 'SOURCE_MATERIAL_CERTIFICATION']);
const imProductDescription = z.enum([
	'PRINTER_ENCLOSURE',
	'INK_CARTRIDGE',
	'MOTORCYCLE_CONNECTOR_ENCLOSURE',
	'CNC_LATHE_REPLACEMENT_ARM',
	'HEADBAND',
	'WHEEL_PLATE',
	'RECORDER_ENCLOSURE',
	'COMPOUND_OPTICAL_MICROSCOPE'
]);

export const injectionMoldingSchema = z.object({
	id: z.string().nullish(),
	name: z.string().min(1),
	files: z.array(z.object({ name: z.string() })),

	weight: z.number(),
	initialPrice: z.number().nullish(),
	finalPrice: z.number().nullish(),

	quantity: z.number(),
	minExpectedVolume: z.number(),
	maxExpectedVolume: z.number().nullish(),
	designUnits: imDesignUnit,
	material: imMaterial,
	color: imColor,
	spiFinish: imSPIFinish,
	toolRequirements: z.string(),
	molds: imMolds,

	technicalDrawing: z.string().nullish(),
	threadsTappedHoles: z.boolean(),
	inserts: z.boolean(),
	tolerance: z.number(),

	silkScreen: z.string(),
	laserEngraving: z.boolean(),
	partsAssembly: imPartsAssembly,
	finishedAppearance: imFinishedAppearance,
	inspection: imInspection,

	productDescription: imProductDescription,
	specialRequests: z.string()
});

export type InjectionMolding = z.infer<typeof injectionMoldingSchema>;

export const injectionMoldingPartialSchema = injectionMoldingSchema.partial();
export type InjectionMoldingPartial = z.infer<typeof injectionMoldingPartialSchema>;
