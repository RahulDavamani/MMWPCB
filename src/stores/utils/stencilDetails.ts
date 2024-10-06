import type { Lang } from '$lib/locales/en';
import type { Stencil } from '../../zod/products/stencil.schema';

export const stencilDetails = ($lg: Lang) => {
	const l = $lg.instantQuote.stencil;

	const id = {
		key: 'id',
		l: l.id,
		parseValue: (val: Stencil['id']) => val?.toUpperCase()
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
		validate: (val: Stencil['name']) => val.length < 1
	};

	const fileName = {
		key: 'fileName',
		l: l.fileName,
		parseValue: (val: Stencil['fileName']) => val?.split('__')[1]
	};

	const buildTime = {
		key: 'buildTime',
		l: l.buildTime
	};

	const weight = {
		key: 'weight',
		l: l.weight,
		parseValue: (val: Stencil['weight']) => `${val.toFixed(2)} kg`
	};

	const initialPrice = {
		key: 'initialPrice',
		l: l.initialPrice,
		parseValue: (val: Stencil['initialPrice']) => `$${val.toFixed(2)}`
	};

	const finalPrice = {
		key: 'finalPrice',
		l: l.finalPrice,
		parseValue: (val: Stencil['finalPrice']) => (typeof val == 'number' ? `$${val.toFixed(2)}` : val)
	};

	const type = (() => {
		const values = [
			{ title: l.type.values.framework, value: 'FRAMEWORK' },
			{ title: l.type.values.nonFramework, value: 'NON_FRAMEWORK' }
		] as { title: string; value: Stencil['type'] }[];

		return {
			key: 'type',
			l: l.type,
			values,
			parseValue: (val: Stencil['type']) => values.find((v) => v.value === val)?.title
		};
	})();

	const multiLevel = (() => {
		const values = [
			{ title: $lg.common.no, value: false },
			{ title: $lg.common.yes, value: true }
		] as { title: string; value: Stencil['multiLevel'] }[];

		return {
			key: 'multiLevel',
			l: l.multiLevel,
			values,
			parseValue: (val: Stencil['multiLevel']) => values.find((v) => v.value === val)?.title
		};
	})();

	const side = (() => {
		const values = [
			{ title: l.side.values.top, value: 'TOP_SIDE' },
			{ title: l.side.values.bottom, value: 'BOTTOM_SIDE' },
			{ title: l.side.values.topBottomSingle, value: 'TOP_BOTTOM_SINGLE' },
			{ title: l.side.values.topBottomSeparate, value: 'TOP_BOTTOM_SEPARATE' }
		] as { title: string; value: Stencil['side'] }[];

		return {
			key: 'side',
			l: l.side,
			values,
			parseValue: (val: Stencil['side']) => values.find((v) => v.value === val)?.title
		};
	})();

	const length = {
		key: 'length',
		l: l.length,
		parseValue: (val: Stencil['length']) => `${val.toFixed(2)} mm`
	};

	const width = {
		key: 'width',
		l: l.width,
		parseValue: (val: Stencil['width']) => `${val.toFixed(2)} mm`
	};

	const quantity = {
		key: 'quantity',
		l: l.quantity,
		validate: (val: Stencil['quantity']) => val < 1
	};

	const thickness = {
		key: 'thickness',
		l: l.thickness,
		parseValue: (val: Stencil['thickness']) => `${val.toFixed(2)} mm`
	};

	const existingFiducials = (() => {
		const values = [
			{ title: l.existingFiducials.values.halfLasered, value: 'HALF_LASERED' },
			{ title: l.existingFiducials.values.laseredThrough, value: 'LASERED_THROUGH' },
			{ title: $lg.common.none, value: 'NONE' }
		] as { title: string; value: Stencil['existingFiducials'] }[];

		return {
			key: 'existingFiducials',
			l: l.existingFiducials,
			values,
			parseValue: (val: Stencil['existingFiducials']) => values.find((v) => v.value === val)?.title
		};
	})();

	const electroPolishing = (() => {
		const values = [
			{ title: $lg.common.no, value: false },
			{ title: $lg.common.yes, value: true }
		] as { title: string; value: Stencil['electroPolishing'] }[];

		return {
			key: 'electroPolishing',
			l: l.electroPolishing,
			values,
			parseValue: (val: Stencil['electroPolishing']) => values.find((v) => v.value === val)?.title
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
		buildTime,
		weight,
		initialPrice,
		finalPrice,
		type,
		multiLevel,
		side,
		length,
		width,
		quantity,
		thickness,
		existingFiducials,
		electroPolishing,
		specialRequests
	};
};
