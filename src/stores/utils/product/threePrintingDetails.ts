import type { Lang } from '$lib/locales/en';
import type { ThreePrinting } from '../../../zod/products/threePrinting.schema';

export const threePrintingDetails = (lg: Lang) => {
	const l = lg.instantQuote.threePrinting;

	const id = {
		key: 'id',
		l: l.id,
		parseValue: (val: ThreePrinting['id']) => val?.toUpperCase()
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
		validate: (val: ThreePrinting['name']) => val.length < 1
	};

	const fileName = {
		key: 'fileName',
		l: l.fileName,
		parseValue: (val: ThreePrinting['fileName']) => val?.split('__')[1]
	};

	const weight = {
		key: 'weight',
		l: l.weight,
		parseValue: (val: ThreePrinting['weight']) => `${val.toFixed(2)} kg`
	};

	const initialPrice = {
		key: 'initialPrice',
		l: l.initialPrice,
		parseValue: (val: ThreePrinting['initialPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : 'RFQ')
	};

	const finalPrice = {
		key: 'finalPrice',
		l: l.finalPrice,
		parseValue: (val: ThreePrinting['finalPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : val)
	};
	const quantity = {
		key: 'quantity',
		l: l.quantity,
		parseValue: (val: ThreePrinting['quantity']) => val.join(', '),
		validate: (val: ThreePrinting['quantity']) => val.filter((v) => v < 1).length > 0
	};

	const designUnits = {
		key: 'designUnits',
		l: l.designUnits,
		values: ['MM', 'CM', 'INCH'] as ThreePrinting['designUnits'][],
		parseValue: (val: ThreePrinting['designUnits']) => val.toLowerCase()
	};

	const material = (() => {
		const values = [
			{ title: l.material.values.aluminum, value: 'ALUMINUM' },
			{ title: l.material.values.stainlessSteel, value: 'STAINLESS_STEEL' },
			{ title: l.material.values.nylon, value: 'NYLON' },
			{ title: l.material.values.abs, value: 'ABS' },
			{ title: l.material.values.petg, value: 'PETG' }
		] as { title: string; value: ThreePrinting['material'] }[];

		return {
			key: 'material',
			l: l.material,
			values,
			parseValue: (val: ThreePrinting['material']) => values.find((v) => v.value === val)?.title
		};
	})();

	const materialType = (() => {
		const values = [
			{ title: l.materialType.values.aluminum, value: 'ALUMINUM' },
			{ title: l.materialType.values.stainlessSteel, value: 'STAINLESS_STEEL' },
			{ title: l.materialType.values.pa12, value: 'PA_12' },
			{ title: l.materialType.values.hppa12, value: 'HP_PA_12' },
			{ title: l.materialType.values.glassFiberNylon, value: 'GLASS_FIBER_NYLON' },
			{ title: l.materialType.values.petg, value: 'PETG' }
		] as { title: string; value: ThreePrinting['materialType'] }[];

		return {
			key: 'materialType',
			l: l.materialType,
			values,
			parseValue: (val: ThreePrinting['materialType']) => values.find((v) => v.value === val)?.title
		};
	})();

	const color = (() => {
		const values = [
			{ title: lg.common.color.metallic, color: 'bg-slate-200', value: 'METALLIC' },
			{ title: lg.common.color.silver, color: 'bg-slate-400', value: 'SILVER' },
			{ title: lg.common.color.white, color: 'bg-white', value: 'WHITE' },
			{ title: lg.common.color.darkBlack, color: 'bg-black', value: 'DARK_BLACK' },
			{ title: lg.common.color.black, color: 'bg-black', value: 'BLACK' },
			{ title: lg.common.color.silverGray, color: 'bg-slate-600', value: 'SILVER_GRAY' },
			{ title: lg.common.color.red, color: 'bg-red-400', value: 'RED' },
			{ title: lg.common.color.blue, color: 'bg-blue-400', value: 'BLUE' },
			{ title: lg.common.color.yellow, color: 'bg-yellow-400', value: 'YELLOW' },
			{ title: lg.common.color.green, color: 'bg-green-400', value: 'GREEN' }
		] as { title: string; color: string; value: ThreePrinting['color'] }[];

		return {
			key: 'color',
			l: l.color,
			values,
			parseValue: (val: ThreePrinting['color']) => values.find((v) => v.value === val)?.title
		};
	})();

	const process = {
		key: 'process',
		l: l.process,
		values: ['SLM', 'SLS', 'FDM'] as ThreePrinting['process'][]
	};

	const surfaceFinish = (() => {
		const values = [
			{ title: lg.common.none, section: '', value: 'NONE' },
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
			},
			{ title: l.surfaceFinish.values.dying, section: l.surfaceFinish.sections.dying, value: 'DYING' }
		] as { title: string; section: string; value: ThreePrinting['surfaceFinish'] }[];

		return {
			key: 'surfaceFinish',
			l: l.surfaceFinish,
			values,
			parseValue: (val: ThreePrinting['surfaceFinish']) => values.find((v) => v.value === val)?.title
		};
	})();

	const surfaceFinishColor = {
		key: 'surfaceFinishColor',
		l: l.surfaceFinishColor
	};

	const technicalDrawing = {
		key: 'technicalDrawing',
		l: l.technicalDrawing,
		parseValue: (val: ThreePrinting['technicalDrawing']) => val?.split('__')[1]
	};

	const threadsTappedHoles = (() => {
		const values = [
			{ title: lg.common.no, value: false },
			{ title: lg.common.yes, value: true }
		] as { title: string; value: ThreePrinting['threadsTappedHoles'] }[];

		return {
			key: 'threadsTappedHoles',
			l: l.threadsTappedHoles,
			values,
			parseValue: (val: ThreePrinting['threadsTappedHoles']) => values.find((v) => v.value === val)?.title
		};
	})();

	const inserts = (() => {
		const values = [
			{ title: lg.common.no, value: false },
			{ title: lg.common.yes, value: true }
		] as { title: string; value: ThreePrinting['inserts'] }[];

		return {
			key: 'inserts',
			l: l.inserts,
			values,
			parseValue: (val: ThreePrinting['inserts']) => values.find((v) => v.value === val)?.title
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
		validate: (val: ThreePrinting['silkScreen']) => (typeof val === 'string' ? val.length < 1 : true)
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
		] as { title: string; value: ThreePrinting['partsAssembly'] }[];

		return {
			key: 'partsAssembly',
			l: l.partsAssembly,
			values,
			parseValue: (val: ThreePrinting['partsAssembly']) => values.find((v) => v.value === val)?.title
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
		] as { title: string; value: ThreePrinting['productDescription'] }[];

		return {
			key: 'productDescription',
			l: l.productDescription,
			values,
			parseValue: (val: ThreePrinting['productDescription']) => values.find((v) => v.value === val)?.title
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
		fileName,
		weight,
		initialPrice,
		finalPrice,
		quantity,
		designUnits,
		material,
		materialType,
		color,
		process,
		surfaceFinish,
		surfaceFinishColor,
		technicalDrawing,
		threadsTappedHoles,
		inserts,
		silkScreen,
		laserEngraving,
		partsAssembly,
		productDescription,
		specialRequests
	};
};
