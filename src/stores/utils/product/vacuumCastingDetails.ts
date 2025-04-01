import type { Lang } from '$lib/locales/en';
import type { VacuumCasting } from '../../../zod/products/vacuumCasting.schema';

export const vacuumCastingDetails = (lg: Lang) => {
	const l = lg.instantQuote.vacuumCasting;

	const id = {
		key: 'id',
		l: l.id,
		parseValue: (val: VacuumCasting['id']) => val?.toUpperCase()
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
		validate: (val: VacuumCasting['name']) => val.length < 1
	};

	const weight = {
		key: 'weight',
		l: l.weight,
		parseValue: (val: VacuumCasting['weight']) => `${val.toFixed(2)} kg`
	};

	const initialPrice = {
		key: 'initialPrice',
		l: l.initialPrice,
		parseValue: (val: VacuumCasting['initialPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : 'RFQ')
	};

	const finalPrice = {
		key: 'finalPrice',
		l: l.finalPrice,
		parseValue: (val: VacuumCasting['finalPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : val)
	};

	const quantity = {
		key: 'quantity',
		l: l.quantity,
		parseValue: (val: VacuumCasting['quantity']) => val.join(', '),
		validate: (val: VacuumCasting['quantity']) => val.filter((v) => v < 1).length > 0
	};

	const designUnits = {
		key: 'designUnits',
		l: l.designUnits,
		values: ['MM', 'CM', 'INCH'] as VacuumCasting['designUnits'][],
		parseValue: (val: VacuumCasting['designUnits']) => val.toLowerCase()
	};

	const material = (() => {
		const values = [
			{ title: l.material.values.abs, value: 'ABS' },
			{ title: l.material.values.pom, value: 'POM' },
			{ title: l.material.values.nylon, value: 'NYLON' },
			{ title: l.material.values.pvc, value: 'PVC' },
			{ title: l.material.values.tpu, value: 'TPU' }
		] as { title: string; value: VacuumCasting['material'] }[];

		return {
			key: 'material',
			l: l.material,
			values,
			parseValue: (val: VacuumCasting['material']) => values.find((v) => v.value === val)?.title
		};
	})();

	const materialType = (() => {
		const values = [
			{ title: l.materialType.values.abs, value: 'ABS' },
			{ title: l.materialType.values.pom, value: 'POM' },
			{ title: l.materialType.values.nylon, value: 'NYLON' },
			{ title: l.materialType.values.pvc, value: 'PVC' },
			{ title: l.materialType.values.tpu, value: 'TPU' }
		] as { title: string; value: VacuumCasting['materialType'] }[];

		return {
			key: 'materialType',
			l: l.materialType,
			values,
			parseValue: (val: VacuumCasting['materialType']) => values.find((v) => v.value === val)?.title
		};
	})();

	const color = (() => {
		const values = [
			{ title: lg.color.black, color: 'bg-black', value: 'BLACK' },
			{ title: lg.color.white, color: 'bg-white', value: 'WHITE' },
			{ title: lg.color.white, color: 'bg-none', value: 'TRANSPARENT' },
			{ title: lg.color.silverGray, color: 'bg-gray-400', value: 'GRAY' },
			{ title: lg.color.red, color: 'bg-red-400', value: 'RED' },
			{ title: lg.color.blue, color: 'bg-blue-400', value: 'BLUE' },
			{ title: lg.color.yellow, color: 'bg-yellow-400', value: 'YELLOW' },
			{ title: lg.color.green, color: 'bg-green-400', value: 'GREEN' }
		] as { title: string; color: string; value: VacuumCasting['color'] }[];

		return {
			key: 'color',
			l: l.color,
			values,
			parseValue: (val: VacuumCasting['color']) => values.find((v) => v.value === val)?.title
		};
	})();

	const surfaceFinish = (() => {
		const values = [
			{ title: lg.common.none, section: '', value: 'NONE' },
			{ title: l.surfaceFinish.values.beadBlast, section: l.surfaceFinish.sections.beadBlast, value: 'BEAD_BLAST' },
			{
				title: l.surfaceFinish.values.sprayPaintingMatt,
				section: l.surfaceFinish.sections.sprayPainting,
				value: 'SPRAY_PAINTING_MATT'
			},
			{
				title: l.surfaceFinish.values.sprayPaintingHighGloss,
				section: l.surfaceFinish.sections.sprayPainting,
				value: 'SPRAY_PAINTING_HIGH_GLOSS'
			},
			{
				title: l.surfaceFinish.values.sanding1000,
				section: l.surfaceFinish.sections.detailSanding,
				value: 'SANDING_1000'
			}
		] as { title: string; section: string; value: VacuumCasting['surfaceFinish'] }[];

		return {
			key: 'surfaceFinish',
			l: l.surfaceFinish,
			values,
			parseValue: (val: VacuumCasting['surfaceFinish']) => values.find((v) => v.value === val)?.title
		};
	})();

	const surfaceFinishColor = {
		key: 'surfaceFinishColor',
		l: l.surfaceFinishColor
	};

	const technicalDrawing = {
		key: 'technicalDrawing',
		l: l.technicalDrawing,
		parseValue: (val: VacuumCasting['technicalDrawing']) => val?.split('__')[1]
	};

	const threadsTappedHoles = (() => {
		const values = [
			{ title: lg.common.no, value: false },
			{ title: lg.common.yes, value: true }
		] as { title: string; value: VacuumCasting['threadsTappedHoles'] }[];

		return {
			key: 'threadsTappedHoles',
			l: l.threadsTappedHoles,
			values,
			parseValue: (val: VacuumCasting['threadsTappedHoles']) => values.find((v) => v.value === val)?.title
		};
	})();

	const inserts = (() => {
		const values = [
			{ title: lg.common.no, value: false },
			{ title: lg.common.yes, value: true }
		] as { title: string; value: VacuumCasting['inserts'] }[];

		return {
			key: 'inserts',
			l: l.inserts,
			values,
			parseValue: (val: VacuumCasting['inserts']) => values.find((v) => v.value === val)?.title
		};
	})();

	const tolerance = {
		key: 'tolerance',
		l: l.tolerance,
		values: [0, 0.125, 0.075, 0.05, 0.02],
		parseValue: (val: VacuumCasting['tolerance']) => (val === 0 ? l.tolerance.noTolerance : `±${val} mm`)
	};

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
		validate: (val: VacuumCasting['silkScreen']) => (typeof val === 'string' ? val.length < 1 : true)
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
		] as { title: string; value: VacuumCasting['partsAssembly'] }[];

		return {
			key: 'partsAssembly',
			l: l.partsAssembly,
			values,
			parseValue: (val: VacuumCasting['partsAssembly']) => values.find((v) => v.value === val)?.title
		};
	})();

	const finishedAppearance = (() => {
		const values = [
			{ l: l.finishedAppearance.values.standard, value: 'STANDARD' },
			{ l: l.finishedAppearance.values.premium, value: 'PREMIUM' }
		] as { l: { title: string; description: string }; value: VacuumCasting['finishedAppearance'] }[];

		return {
			key: 'finishedAppearance',
			l: l.finishedAppearance,
			values,
			parseValue: (val: VacuumCasting['finishedAppearance']) => values.find((v) => v.value === val)?.l.title
		};
	})();

	const inspection = (() => {
		const values = [
			{ l: l.inspection.values.standardInspection, value: 'STANDARD_INSPECTION' },
			{ l: l.inspection.values.sourceMaterialCertification, value: 'SOURCE_MATERIAL_CERTIFICATION' }
		] as { l: { title: string; description: string[] }; value: VacuumCasting['inspection'] }[];

		return {
			key: 'inspection',
			l: l.inspection,
			values,
			parseValue: (val: VacuumCasting['inspection']) => values.find((v) => v.value === val)?.l.title
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
		] as { title: string; value: VacuumCasting['productDescription'] }[];

		return {
			key: 'productDescription',
			l: l.productDescription,
			values,
			parseValue: (val: VacuumCasting['productDescription']) => values.find((v) => v.value === val)?.title
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
		materialType,
		color,
		surfaceFinish,
		surfaceFinishColor,
		technicalDrawing,
		threadsTappedHoles,
		inserts,
		tolerance,
		silkScreen,
		laserEngraving,
		partsAssembly,
		finishedAppearance,
		inspection,
		productDescription,
		specialRequests
	};
};
