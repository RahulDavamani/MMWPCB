import type { Lang } from '$lib/locales/en';
import type { SheetMetal } from '../../../zod/products/sheetMetal.schema';

export const sheetMetalDetails = (lg: Lang) => {
	const l = lg.instantQuote.sheetMetal;

	const id = {
		key: 'id',
		l: l.id,
		parseValue: (val: SheetMetal['id']) => val?.toUpperCase()
	};

	const createdAt = {
		key: 'createdAt',
		l: l.createdAt,
		parseValue: (val: Date) => val.toLocaleString()
	};

	const updatedAt = {
		key: 'updatedAt',
		l: l.updatedAt,
		parseValue: (val: Date) => val.toLocaleString()
	};

	const name = {
		key: 'name',
		l: l.name,
		validate: (val: SheetMetal['name']) => val.length < 1
	};

	const weight = {
		key: 'weight',
		l: l.weight,
		parseValue: (val: SheetMetal['weight']) => `${val.toFixed(2)} kg`
	};

	const initialPrice = {
		key: 'initialPrice',
		l: l.initialPrice,
		parseValue: (val: SheetMetal['initialPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : 'RFQ')
	};

	const finalPrice = {
		key: 'finalPrice',
		l: l.finalPrice,
		parseValue: (val: SheetMetal['finalPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : val)
	};

	const quantity = {
		key: 'quantity',
		l: l.quantity,
		parseValue: (val: SheetMetal['quantity']) => val.join(', '),
		validate: (val: SheetMetal['quantity']) => val.filter((v) => v < 1).length > 0
	};

	const designUnits = {
		key: 'designUnits',
		l: l.designUnits,
		values: ['MM', 'CM', 'INCH'] as SheetMetal['designUnits'][],
		parseValue: (val: SheetMetal['designUnits']) => val.toLowerCase()
	};

	const material = (() => {
		const values = [
			{ title: l.material.values.aluminum, value: 'ALUMINUM' },
			{ title: l.material.values.stainlessSteel, value: 'STAINLESS_STEEL' },
			{ title: l.material.values.mildSteel, value: 'MILD_STEEL' },
			{ title: l.material.values.copper, value: 'COPPER' },
			{ title: l.material.values.carbonFiber, value: 'CARBON_FIBER' }
		] as { title: string; value: SheetMetal['material'] }[];

		return {
			key: 'material',
			l: l.material,
			values,
			parseValue: (val: SheetMetal['material']) => values.find((v) => v.value === val)?.title
		};
	})();

	const color = (() => {
		const values = [
			{ title: lg.color.silverWhite, color: 'bg-slate-200', value: 'SILVER_WHITE' },
			{ title: lg.color.silver, color: 'bg-slate-400', value: 'SILVER' },
			{ title: lg.color.silverGray, color: 'bg-slate-600', value: 'SILVER_GRAY' },
			{ title: lg.color.copper, color: 'bg-orange-600', value: 'COPPER' },
			{ title: lg.color.black, color: 'bg-black', value: 'BLACK' }
		] as { title: string; color: string; value: SheetMetal['color'] }[];

		return {
			key: 'color',
			l: l.color,
			values,
			parseValue: (val: SheetMetal['color']) => values.find((v) => v.value === val)?.title
		};
	})();

	const technicalDrawing = {
		key: 'technicalDrawing',
		l: l.technicalDrawing,
		parseValue: (val: SheetMetal['technicalDrawing']) => val?.split('__')[1]
	};

	const threadsTappedHoles = (() => {
		const values = [
			{ title: lg.common.no, value: false },
			{ title: lg.common.yes, value: true }
		] as { title: string; value: SheetMetal['threadsTappedHoles'] }[];

		return {
			key: 'threadsTappedHoles',
			l: l.threadsTappedHoles,
			values,
			parseValue: (val: SheetMetal['threadsTappedHoles']) => values.find((v) => v.value === val)?.title
		};
	})();

	const inserts = (() => {
		const values = [
			{ title: lg.common.no, value: false },
			{ title: lg.common.yes, value: true }
		] as { title: string; value: SheetMetal['inserts'] }[];

		return {
			key: 'inserts',
			l: l.inserts,
			values,
			parseValue: (val: SheetMetal['inserts']) => values.find((v) => v.value === val)?.title
		};
	})();

	const tolerance = {
		key: 'tolerance',
		l: l.tolerance,
		values: [0, 0.125, 0.075, 0.05, 0.02],
		parseValue: (val: SheetMetal['tolerance']) => (val === 0 ? l.tolerance.noTolerance : `±${val} mm`)
	};

	const wielding = (() => {
		const values = [
			{ title: lg.common.no, value: false },
			{ title: lg.common.yes, value: true }
		] as { title: string; value: SheetMetal['wielding'] }[];

		return {
			key: 'wielding',
			l: l.wielding,
			values,
			parseValue: (val: SheetMetal['wielding']) => values.find((v) => v.value === val)?.title
		};
	})();

	const silkScreen = {
		key: 'silkScreen',
		l: l.silkScreen,
		values: [
			{ value: 'NONE', color: '' },
			{ value: 'Process Black', color: 'bg-black' },
			{ value: 'red 032U', color: 'bg-red-400' },
			{ value: 'yellow U', color: 'bg-yellow-400' },
			{ value: 'Green U', color: 'bg-green-400' }
		],
		validate: (val: SheetMetal['silkScreen']) => (typeof val === 'string' ? val.length < 1 : true)
	};

	const laserEngraving = {
		key: 'laserEngraving',
		l: l.laserEngraving
	};

	const partsAssembly = (() => {
		const values = [
			{ title: lg.common.no, value: 'NO' },
			{ title: l.partsAssembly.values.assemblyTest, value: 'ASSEMBLY_TEST' },
			{ title: l.partsAssembly.values.shipAssembly, value: 'SHIP_ASSEMBLY' }
		] as { title: string; value: SheetMetal['partsAssembly'] }[];

		return {
			key: 'partsAssembly',
			l: l.partsAssembly,
			values,
			parseValue: (val: SheetMetal['partsAssembly']) => values.find((v) => v.value === val)?.title
		};
	})();

	const finishedAppearance = (() => {
		const values = [
			{ l: l.finishedAppearance.values.standard, value: 'STANDARD' },
			{ l: l.finishedAppearance.values.premium, value: 'PREMIUM' }
		] as { l: { title: string; description: string }; value: SheetMetal['finishedAppearance'] }[];

		return {
			key: 'finishedAppearance',
			l: l.finishedAppearance,
			values,
			parseValue: (val: SheetMetal['finishedAppearance']) => values.find((v) => v.value === val)?.l.title
		};
	})();

	const inspection = (() => {
		const values = [
			{ l: l.inspection.values.standardInspection, value: 'STANDARD_INSPECTION' },
			{ l: l.inspection.values.standardInspectionFormalReport, value: 'STANDARD_INSPECTION_FORMAL_REPORT' },
			{ l: l.inspection.values.cmmInspectionFormalReport, value: 'CMM_INSPECTION_FORMAL_REPORT' },
			{ l: l.inspection.values.sourceMaterialCertification, value: 'SOURCE_MATERIAL_CERTIFICATION' }
		] as { l: { title: string; description: string[] }; value: SheetMetal['inspection'] }[];

		return {
			key: 'inspection',
			l: l.inspection,
			values,
			parseValue: (val: SheetMetal['inspection']) => values.find((v) => v.value === val)?.l.title
		};
	})();

	const productDescription = (() => {
		const values = [
			{ title: l.productDescription.values.printerEnclosure, value: 'PRINTER_ENCLOSURE' },
			{ title: l.productDescription.values.inkCartridge, value: 'INK_CARTRIDGE' },
			{ title: l.productDescription.values.motorcycleConnectorEnclosure, value: 'MOTORCYCLE_CONNECTOR_ENCLOSURE' },
			{ title: l.productDescription.values.cncLatheReplacementArm, value: 'CNC_LATHE_REPLACEMENT_ARM' },
			{ title: l.productDescription.values.headband, value: 'HEADBAND' },
			{ title: l.productDescription.values.wheelPlate, value: 'WHEEL_PLATE' },
			{ title: l.productDescription.values.recorderEnclosure, value: 'RECORDER_ENCLOSURE' },
			{ title: l.productDescription.values.compoundOpticalMicroscope, value: 'COMPOUND_OPTICAL_MICROSCOPE' }
		] as { title: string; value: SheetMetal['productDescription'] }[];

		return {
			key: 'productDescription',
			l: l.productDescription,
			values,
			parseValue: (val: SheetMetal['productDescription']) => values.find((v) => v.value === val)?.title
		};
	})();

	const specialRequests = {
		key: 'specialRequests',
		l: l.specialRequests
	};

	return {
		id,
		createdAt,
		updatedAt,
		name,
		weight,
		initialPrice,
		finalPrice,
		quantity,
		designUnits,
		material,
		color,
		technicalDrawing,
		threadsTappedHoles,
		inserts,
		tolerance,
		wielding,
		silkScreen,
		laserEngraving,
		partsAssembly,
		finishedAppearance,
		inspection,
		productDescription,
		specialRequests
	};
};
