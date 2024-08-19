<script>
	import { ui } from '../../../stores/ui.store';
	import Loader from './Loader.svelte';
	import Toast from './Toast.svelte';
	import AlertModal from './AlertModal.svelte';

	$: ({ loader, toast, alertModal } = $ui);
</script>

{#if loader}
	<Loader {...loader} />
{/if}

{#if toast}
	<Toast {...toast} />
{/if}

<AlertModal {...alertModal} />
