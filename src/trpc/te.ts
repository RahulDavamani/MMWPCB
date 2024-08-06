import { TRPCClientError } from '@trpc/client';
import { TRPCError } from '@trpc/server';
import { getErrorCode } from '../lib/errorCode';
import { error, type NumericRange } from '@sveltejs/kit';
import { ui } from '../stores/ui.store';

export interface TRPCZodError {
	code: string;
	minimum: number;
	type: string;
	inclusive: boolean;
	exact: boolean;
	message: string;
	path: string[];
}

export type TRPCZodErrors<T> = {
	[K in keyof T]: T[K] extends object | undefined | null ? TRPCZodErrors<T[K]> : TRPCZodError;
};

export interface TRPCHandlerError<T> {
	code: NumericRange<400, 599>;
	message: string;
	zodErrors?: TRPCZodErrors<T>;
}

export interface TRPCClientErrorHandlerOptions {
	throwError?: boolean;
	stopLoading?: boolean;
	showToast?: boolean;
}

export const tce = <T>(
	e: unknown,
	callback?: (e: TRPCHandlerError<T>) => void,
	{ stopLoading = true, showToast = true }: TRPCClientErrorHandlerOptions = {}
) => {
	const { code, message, zodErrors } = te<T>(e);

	if (callback) callback({ code, message, zodErrors });

	if (stopLoading) ui.update((state) => ({ ...state, loader: undefined }));
	if (showToast) ui.setToast({ alertClasses: 'alert-error', title: `${code ?? 'Error'}: ${message}` });

	throw `${code}: ${message}`;
};

export const tse = (e: unknown) => {
	const { code, message } = te(e);
	throw error(code, { message });
};

export const te = <T>(e: unknown): TRPCHandlerError<T> => {
	console.log(e);
	if (e instanceof TRPCClientError) {
		try {
			const errors = JSON.parse(e.message);
			if (typeof errors === 'object' && 'path' in errors[0])
				return {
					code: e.data?.httpStatus,
					message: 'Input Validation Error',
					zodErrors: formatZodErrors<T>(errors)
				};
		} catch (_) {
			return {
				code: e.data?.httpStatus,
				message: e.stack ?? e.message
			};
		}
	}

	if (e instanceof TRPCError)
		return {
			code: getErrorCode({ trpc: e.code })?.http ?? 500,
			message: e.stack ?? e.message
		};

	return {
		code: 500,
		message: `INTERNAL_SERVER_ERROR||${String(e)}`
	};
};

export const formatZodErrors = <T>(errors: TRPCZodError[]): TRPCZodErrors<T> => {
	const formattedErrors: TRPCZodErrors<T> = {} as TRPCZodErrors<T>;

	errors.forEach((error) => {
		const path = error.path;
		let currentObj: TRPCZodErrors<T> = formattedErrors;

		for (let i = 0; i < path.length; i++) {
			const key = path[i];

			if (i === path.length - 1) {
				currentObj[key as keyof T] = error as T[keyof T] extends object | undefined | null
					? TRPCZodErrors<T[keyof T]>
					: TRPCZodError;
			} else {
				currentObj[key as keyof T] = currentObj[key as keyof T] || ({} as TRPCZodErrors<T>);
				currentObj = currentObj[key as keyof T] as TRPCZodErrors<T>;
			}
		}
	});

	return formattedErrors;
};
