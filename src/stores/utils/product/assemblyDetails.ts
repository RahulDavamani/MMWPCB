import type { Lang } from '$lib/locales/en';
import type { Assembly } from '../../../zod/products/assembly.schema';

export const assemblyDetails = (lg: Lang) => {
	const l = lg.instantQuote.assembly;

	const id = {
		key: 'id',
		l: l.id,
		parseValue: (val: Assembly['id']) => val?.toUpperCase()
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
		validate: (val: Assembly['name']) => val.length < 1
	};

	const buildTime = {
		key: 'buildTime',
		l: l.buildTime
	};

	const weight = {
		key: 'weight',
		l: l.weight,
		parseValue: (val: Assembly['weight']) => `${val.toFixed(2)} kg`
	};

	const initialPrice = {
		key: 'initialPrice',
		l: l.initialPrice,
		parseValue: (val: Assembly['initialPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : 'RFQ')
	};

	const finalPrice = {
		key: 'finalPrice',
		l: l.finalPrice,
		parseValue: (val: Assembly['finalPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : val)
	};

	const flexibleOptions = (() => {
		const values = [
			{ ...l.flexibleOptions.values.turnkey, value: 'TURNKEY' },
			{ ...l.flexibleOptions.values.kitted, value: 'KITTED' },
			{ ...l.flexibleOptions.values.combo, value: 'COMBO' }
		] as { title: string; description: string; value: Assembly['flexibleOption'] }[];

		return {
			key: 'flexibleOptions',
			l: l.flexibleOptions,
			values,
			parseValue: (val: Assembly['flexibleOption']) => values.find((v) => v.value === val)?.title
		};
	})();

	const boardType = (() => {
		const values = [
			{ title: l.boardType.values.singlePieces, value: 'SINGLE_PIECES' },
			{ title: l.boardType.values.panelizedPcbs, value: 'PANELIZED_PCBS' }
		] as { title: string; value: Assembly['boardType'] }[];

		return {
			key: 'boardType',
			l: l.boardType,
			values,
			parseValue: (val: Assembly['boardType']) => values.find((v) => v.value === val)?.title
		};
	})();

	const side = (() => {
		const values = [
			{ title: l.side.values.topSide, value: 'TOP_SIDE' },
			{ title: l.side.values.bottomSide, value: 'BOTTOM_SIDE' },
			{ title: l.side.values.bothSides, value: 'BOTH_SIDES' }
		] as { title: string; value: Assembly['side'] }[];

		return {
			key: 'side',
			l: l.side,
			values,
			parseValue: (val: Assembly['side']) => values.find((v) => v.value === val)?.title
		};
	})();

	const quantity = {
		key: 'quantity',
		l: l.quantity,
		validate: (val: Assembly['quantity']) => val < 1
	};

	const sensitiveParts = (() => {
		const values = [
			{ title: lg.common.no, value: false },
			{ title: lg.common.yes, value: true }
		] as { title: string; value: Assembly['sensitiveParts'] }[];

		return {
			key: 'sensitiveParts',
			l: l.sensitiveParts,
			values,
			parseValue: (val: Assembly['sensitiveParts']) => values.find((v) => v.value === val)?.title
		};
	})();

	const alternatesChina = (() => {
		const values = [
			{ title: lg.common.no, value: false },
			{ title: lg.common.yes, value: true }
		] as { title: string; value: Assembly['alternatesChina'] }[];

		return {
			key: 'alternatesChina',
			l: l.alternatesChina,
			values,
			parseValue: (val: Assembly['alternatesChina']) => values.find((v) => v.value === val)?.title
		};
	})();

	const solderPads = {
		key: 'solderPads',
		l: l.solderPads,
		validate: (val: Assembly['solderPads']) => val < 0
	};

	const customizedServices = (() => {
		const values = [
			{
				value: 'DEPANEL_BOARDS',
				l: l.customizedServices.values.depanelBoards
			},
			{
				value: 'FUNCTION_TEST',
				l: l.customizedServices.values.functionTest
			},
			{
				value: 'CONFORMAL_COATING',
				l: l.customizedServices.values.conformalCoating
			},
			{
				value: 'FIRMWARE_LOADING',
				l: l.customizedServices.values.firmwareLoading
			},
			{
				value: 'PRESS_FIT',
				l: l.customizedServices.values.pressFit,
				imgSrc: ''
			},
			{
				value: 'BOX_BUILD',
				l: l.customizedServices.values.boxBuild,
				imgSrc: ''
			},
			{
				value: 'CABLE_WIRE_HARNESS',
				l: l.customizedServices.values.cableWireHarness,
				imgSrc: ''
			},
			{
				value: 'PACKAGE_BOX',
				l: l.customizedServices.values.packageBox
			}
		] as {
			value: Assembly['customizedServices'][number];
			l: { title?: string; description?: string; url?: string; imgSrc?: string };
			url?: string;
			imgSrc?: string;
		}[];

		return {
			key: 'customizedServices',
			l: l.customizedServices,
			values,
			parseValue: (val: Assembly['customizedServices']) =>
				val.map((v) => values.find((x) => x.value === v)?.l.title).join(', ')
		};
	})();

	const xrayTest = {
		key: 'xrayTest',
		l: l.xrayTest,
		validate: (val: Assembly['xrayTest']) => val < 0
	};

	const detailedInformation = {
		key: 'detailedInformation',
		l: l.detailedInformation
	};

	return {
		id,
		createdAt,
		updatedAt,
		name,
		buildTime,
		weight,
		initialPrice,
		finalPrice,
		flexibleOptions,
		boardType,
		side,
		quantity,
		sensitiveParts,
		alternatesChina,
		solderPads,
		customizedServices,
		xrayTest,
		detailedInformation
	};
};
