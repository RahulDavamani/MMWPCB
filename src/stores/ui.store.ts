import { writable } from 'svelte/store';

export interface UI {
	loader?: Loader;
	toast?: Toast;
	alertModal?: AlertModal;
}

export interface Loader {
	title?: string;
	size?: number;
	overlay?: boolean;
	fixed?: boolean;
	progress?: number;

	classes?: string;
	titleClass?: string;
	progressClass?: string;
}

export interface Toast {
	title: string;
	toastDuration?: number;

	toastClasses?: string;
	alertClasses?: string;
	titleClasses?: string;
}

export interface AlertModal {
	title: string;
	body?: string;
	details?: string;
	actions?: AlertModalAction[];
}

export interface AlertModalAction {
	name: string;
	classes?: string;
	onClick?: () => void | Promise<void>;
}

export const ui = (() => {
	const { subscribe, set, update } = writable<UI>({});

	// Methods
	const setLoader = (loader?: Loader) => update((state) => ({ ...state, loader }));
	const setToast = (toast?: Toast) => update((state) => ({ ...state, toast }));
	const setAlertModal = (alertModal?: AlertModal) => update((state) => ({ ...state, alertModal }));

	const loaderWrapper =
		<T>(loader: Loader, fn: () => Promise<T>, start = true, end = true) =>
		async () => {
			if (start) ui.setLoader(loader);
			const result = await fn();
			if (end) ui.setLoader();
			return result;
		};

	return {
		subscribe,
		set,
		update,
		setLoader,
		setToast,
		setAlertModal,
		loaderWrapper
	};
})();
