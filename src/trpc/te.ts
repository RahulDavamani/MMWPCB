import { TRPCClientError } from '@trpc/client';
import { TRPCError } from '@trpc/server';
import { getErrorCode } from '../lib/data/errorCode';
import { error, type NumericRange } from '@sveltejs/kit';
import { ui } from '../stores/ui.store';
import { closeModal } from '$lib/client/modal';
import { get } from 'svelte/store';
import { lg } from '../stores/i18n.store';

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

export interface TRPCClientErrorHandlerOptions<T> {
	callback?: (e: TRPCHandlerError<T>) => void;
	showToast?: boolean;
	showModal?: {
		title?: string;
		retryFn?: () => void;
	};
}

export const tce = <T>(e: unknown, options: TRPCClientErrorHandlerOptions<T> = {}) => {
	const l = get(lg).common;
	const { code, message, zodErrors } = te<T>(e);
	const { callback, showToast, showModal } = options;
	const codeMessage = `${code ?? l.error}: ${message}`;

	if (callback) callback({ code, message, zodErrors });
	if (showToast) ui.setToast({ alertClasses: 'alert-error', title: codeMessage });
	if (showModal)
		ui.setAlertModal({
			title: showModal.title ?? l.error,
			body: codeMessage,
			actions: showModal.retryFn
				? [
						{
							name: l.retry,
							classes: 'btn-warning',
							onClick: () => {
								closeModal('alertModal');
								showModal.retryFn?.();
							}
						}
					]
				: undefined
		});

	throw codeMessage;
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
