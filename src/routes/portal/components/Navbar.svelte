<script lang="ts">
	import NavUser from '../../components/layout/NavUser.svelte';
	export let pageTitle = '';
</script>

<div class="bg-base-100 pt-3 sticky top-0 z-10">
	<div class="navbar bg-base-300 px-6 border border-gray-300 shadow-md rounded-box flex justify-between min-h-14 h-14">
		<div class="text-lg font-bold">{pageTitle}</div>
		<NavUser isPortal={true} />
	</div>
</div>
