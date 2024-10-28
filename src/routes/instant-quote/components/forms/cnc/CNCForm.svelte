<script lang="ts">
	import DesignFile from '../../DesignFile.svelte';
	import DesignUnits from './DesignUnits.svelte';
	import FinishedAppearance from './FinishedAppearance.svelte';
	import Inserts from './Inserts.svelte';
	import Inspection from './Inspection.svelte';
	import Material from './Material.svelte';
	import Name from './Name.svelte';
	import PartsAssembly from './PartsAssembly.svelte';
	import PartsMarking from './PartsMarking.svelte';
	import ProductDescription from './ProductDescription.svelte';
	import Quantity from './Quantity.svelte';
	import SpecialRequests from './SpecialRequests.svelte';
	import SurfaceFinish from './SurfaceFinish.svelte';
	import SurfaceRoughness from './SurfaceRoughness.svelte';
	import ThreadsTappedHoles from './ThreadsTappedHoles.svelte';
	import Tolerance from './Tolerance.svelte';
</script>

<DesignFile />
<Name />
<Quantity />
<DesignUnits />
<Material />
<SurfaceFinish />
<div class="divider" />
<ThreadsTappedHoles />
<Inserts />
<Tolerance />
<SurfaceRoughness />
<div class="divider" />
<PartsMarking />
<PartsAssembly />
<FinishedAppearance />
<Inspection />
<ProductDescription />
<SpecialRequests />
