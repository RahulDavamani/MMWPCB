import { closeModal, showModal } from '$lib/client/modal';
import { writable } from 'svelte/store';

export interface UI {
	isMobile: boolean;
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
	title?: string;
	toastDuration?: number;

	toastClasses?: string;
	alertClasses?: string;
	titleClasses?: string;
}

export interface AlertModal {
	modalBackdrop?: boolean;
	boxClasses?: string;

	title?: string;
	titleClasses?: string;

	showCloseBtn?: boolean;
	iconClasses?: string;

	showDivider?: boolean;
	dividerClasses?: string;

	body?: string;
	bodyClasses?: string;

	details?: string;
	detailsClasses?: string;

	actions?: AlertModalAction[];
}

export interface AlertModalAction {
	name: string;
	classes?: string;
	onClick?: () => void | Promise<void>;
}

export const ui = (() => {
	const { subscribe, set, update } = writable<UI>({ isMobile: false });

	// Methods
	const setLoader = (loader?: Loader) => update((state) => ({ ...state, loader }));
	const setToast = (toast?: Toast) => update((state) => ({ ...state, toast }));
	const setAlertModal = (alertModal?: AlertModal) => {
		update((state) => ({ ...state, alertModal }));
		showModal('alertModal');
	};
	const closeAlertModal = () => {
		update((state) => ({ ...state, alertModal: undefined }));
		closeModal('alertModal');
	};

	const loaderWrapper =
		<T>(loader: Loader, fn: () => Promise<T>, start = true, end = true) =>
		async () => {
			if (start) ui.setLoader(loader);
			try {
				const result = await fn();
				return result;
			} finally {
				if (end) ui.setLoader();
			}
		};

	return {
		subscribe,
		set,
		update,
		setLoader,
		setToast,
		setAlertModal,
		closeAlertModal,
		loaderWrapper
	};
})();
