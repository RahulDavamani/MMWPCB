export const showModal = (id: string) => (document.getElementById(id) as HTMLDialogElement).showModal();

export const onShowModal = (id: string, callback: () => void) => {
	const modal = document.getElementById(id) as HTMLDialogElement;
	new MutationObserver((mutations) =>
		mutations.forEach((mutation) => mutation.attributeName === 'open' && modal.open && callback())
	).observe(modal, { attributes: true });
};

export const onCloseModal = (id: string, callback: () => void) =>
	(document.getElementById(id) as HTMLDialogElement).addEventListener('close', callback);
