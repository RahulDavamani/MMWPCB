import type { Lang } from '$lib/locales/en';
import type { InjectionMolding } from '../../../zod/products/injectionMolding.schema';

export const injectionMoldingDetails = (lg: Lang) => {
	const l = lg.instantQuote.injectionMolding;

	const id = {
		key: 'id',
		l: l.id,
		parseValue: (val: InjectionMolding['id']) => val?.toUpperCase()
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
		validate: (val: InjectionMolding['name']) => val.length < 1
	};

	const fileName = {
		key: 'fileName',
		l: l.fileName,
		parseValue: (val: InjectionMolding['fileName']) => val?.split('__')[1]
	};

	const weight = {
		key: 'weight',
		l: l.weight,
		parseValue: (val: InjectionMolding['weight']) => `${val.toFixed(2)} kg`
	};

	const initialPrice = {
		key: 'initialPrice',
		l: l.initialPrice,
		parseValue: (val: InjectionMolding['initialPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : 'RFQ')
	};

	const finalPrice = {
		key: 'finalPrice',
		l: l.finalPrice,
		parseValue: (val: InjectionMolding['finalPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : val)
	};

	const quantity = {
		key: 'quantity',
		l: l.quantity,
		validate: (val: InjectionMolding['quantity']) => val < 1
	};

	const minExpectedVolume = {
		key: 'minExpectedVolume',
		l: l.minExpectedVolume
	};

	const maxExpectedVolume = {
		key: 'maxExpectedVolume',
		l: l.maxExpectedVolume
	};

	const designUnits = {
		key: 'designUnits',
		l: l.designUnits,
		values: ['MM', 'CM', 'INCH'] as InjectionMolding['designUnits'][],
		parseValue: (val: InjectionMolding['designUnits']) => val.toLowerCase()
	};

	const material = (() => {
		const values = [
			{ title: l.material.values.abs, value: 'ABS' },
			{ title: l.material.values.pom, value: 'POM' },
			{ title: l.material.values.nylon, value: 'NYLON' },
			{ title: l.material.values.pvc, value: 'PVC' },
			{ title: l.material.values.tpu, value: 'TPU' }
		] as { title: string; value: InjectionMolding['material'] }[];

		return {
			key: 'material',
			l: l.material,
			values,
			parseValue: (val: InjectionMolding['material']) => values.find((v) => v.value === val)?.title
		};
	})();

	const materialType = (() => {
		const values = [
			{ title: l.materialType.values.abs, value: 'ABS' },
			{ title: l.materialType.values.pom, value: 'POM' },
			{ title: l.materialType.values.nylon, value: 'NYLON' },
			{ title: l.materialType.values.pvc, value: 'PVC' },
			{ title: l.materialType.values.tpu, value: 'TPU' }
		] as { title: string; value: InjectionMolding['materialType'] }[];

		return {
			key: 'materialType',
			l: l.materialType,
			values,
			parseValue: (val: InjectionMolding['materialType']) => values.find((v) => v.value === val)?.title
		};
	})();

	const color = (() => {
		const values = [
			{ title: lg.common.color.black, color: 'bg-black', value: 'BLACK' },
			{ title: lg.common.color.white, color: 'bg-white', value: 'WHITE' },
			{ title: lg.common.color.white, color: 'bg-none', value: 'TRANSPARENT' },
			{ title: lg.common.color.silverGray, color: 'bg-gray-400', value: 'GRAY' },
			{ title: lg.common.color.red, color: 'bg-red-400', value: 'RED' },
			{ title: lg.common.color.blue, color: 'bg-blue-400', value: 'BLUE' },
			{ title: lg.common.color.yellow, color: 'bg-yellow-400', value: 'YELLOW' },
			{ title: lg.common.color.green, color: 'bg-green-400', value: 'GREEN' }
		] as { title: string; color: string; value: InjectionMolding['color'] }[];

		return {
			key: 'color',
			l: l.color,
			values,
			parseValue: (val: InjectionMolding['color']) => values.find((v) => v.value === val)?.title
		};
	})();

	const spiFinish = (() => {
		const values = [
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
		] as InjectionMolding['spiFinish'][];

		return {
			key: 'spiFinish',
			l: l.spiFinish,
			values,
			parseValue: (val: InjectionMolding['spiFinish']) => val.replaceAll('_', ' ')
		};
	})();

	const toolRequirements = {
		key: 'toolRequirements',
		l: l.toolRequirements
	};

	const molds = (() => {
		const values = [
			{ title: l.molds.values.keepMoldsFactory, value: 'KEEP_MOLDS_FACTORY' },
			{ title: l.molds.values.moldsShipped, value: 'MOLDS_SHIPPED' }
		] as { title: string; value: InjectionMolding['molds'] }[];

		return {
			key: 'molds',
			l: l.molds,
			values,
			parseValue: (val: InjectionMolding['molds']) => values.find((v) => v.value === val)?.title
		};
	})();

	const surfaceFinish = (() => {
		const values = [{ title: lg.common.none, section: '', value: 'NONE' }] as {
			title: string;
			section: string;
			value: InjectionMolding['surfaceFinish'];
		}[];

		return {
			key: 'surfaceFinish',
			l: l.surfaceFinish,
			values,
			parseValue: (val: InjectionMolding['surfaceFinish']) => values.find((v) => v.value === val)?.title
		};
	})();

	const surfaceFinishColor = {
		key: 'surfaceFinishColor',
		l: l.surfaceFinishColor
	};

	const technicalDrawing = {
		key: 'technicalDrawing',
		l: l.technicalDrawing,
		parseValue: (val: InjectionMolding['technicalDrawing']) => val?.split('__')[1]
	};

	const threadsTappedHoles = (() => {
		const values = [
			{ title: lg.common.no, value: false },
			{ title: lg.common.yes, value: true }
		] as { title: string; value: InjectionMolding['threadsTappedHoles'] }[];

		return {
			key: 'threadsTappedHoles',
			l: l.threadsTappedHoles,
			values,
			parseValue: (val: InjectionMolding['threadsTappedHoles']) => values.find((v) => v.value === val)?.title
		};
	})();

	const inserts = (() => {
		const values = [
			{ title: lg.common.no, value: false },
			{ title: lg.common.yes, value: true }
		] as { title: string; value: InjectionMolding['inserts'] }[];

		return {
			key: 'inserts',
			l: l.inserts,
			values,
			parseValue: (val: InjectionMolding['inserts']) => values.find((v) => v.value === val)?.title
		};
	})();

	const tolerance = {
		key: 'tolerance',
		l: l.tolerance,
		values: [0, 0.125, 0.075, 0.05, 0.02],
		parseValue: (val: InjectionMolding['tolerance']) => (val === 0 ? l.tolerance.noTolerance : `±${val} mm`)
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
		validate: (val: InjectionMolding['silkScreen']) => (typeof val === 'string' ? val.length < 1 : true)
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
		] as { title: string; value: InjectionMolding['partsAssembly'] }[];

		return {
			key: 'partsAssembly',
			l: l.partsAssembly,
			values,
			parseValue: (val: InjectionMolding['partsAssembly']) => values.find((v) => v.value === val)?.title
		};
	})();

	const finishedAppearance = (() => {
		const values = [
			{ l: l.finishedAppearance.values.standard, value: 'STANDARD' },
			{ l: l.finishedAppearance.values.premium, value: 'PREMIUM' }
		] as { l: { title: string; description: string }; value: InjectionMolding['finishedAppearance'] }[];

		return {
			key: 'finishedAppearance',
			l: l.finishedAppearance,
			values,
			parseValue: (val: InjectionMolding['finishedAppearance']) => values.find((v) => v.value === val)?.l.title
		};
	})();

	const inspection = (() => {
		const values = [
			{ l: l.inspection.values.standardInspection, value: 'STANDARD_INSPECTION' },
			{ l: l.inspection.values.sourceMaterialCertification, value: 'SOURCE_MATERIAL_CERTIFICATION' }
		] as { l: { title: string; description: string[] }; value: InjectionMolding['inspection'] }[];

		return {
			key: 'inspection',
			l: l.inspection,
			values,
			parseValue: (val: InjectionMolding['inspection']) => values.find((v) => v.value === val)?.l.title
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
		] as { title: string; value: InjectionMolding['productDescription'] }[];

		return {
			key: 'productDescription',
			l: l.productDescription,
			values,
			parseValue: (val: InjectionMolding['productDescription']) => values.find((v) => v.value === val)?.title
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
		minExpectedVolume,
		maxExpectedVolume,
		designUnits,
		material,
		materialType,
		color,
		spiFinish,
		toolRequirements,
		molds,
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
