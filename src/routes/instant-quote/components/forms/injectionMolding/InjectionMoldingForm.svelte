<script lang="ts">
	import DesignFile from '../../DesignFile.svelte';
	import DesignUnits from './DesignUnits.svelte';
	import FinishedAppearance from './FinishedAppearance.svelte';
	import Inserts from './Inserts.svelte';
	import Inspection from './Inspection.svelte';
	import Material from './Material.svelte';
	import Molds from './Molds.svelte';
	import Name from './Name.svelte';
	import PartsAssembly from './PartsAssembly.svelte';
	import PartsMarking from './PartsMarking.svelte';
	import ProductDescription from './ProductDescription.svelte';
	import Quantity from './Quantity.svelte';
	import SpecialRequests from './SpecialRequests.svelte';
	import SPIFinish from './SPIFinish.svelte';
	import ThreadsTappedHoles from './ThreadsTappedHoles.svelte';
	import Tolerance from './Tolerance.svelte';
	import ToolRequirements from './ToolRequirements.svelte';
</script>

<DesignFile />
<Name />
<Quantity />
<DesignUnits />
<Material />
<SPIFinish />
<ToolRequirements />
<Molds />
<div class="divider" />
<ThreadsTappedHoles />
<Inserts />
<Tolerance />
<div class="divider" />
<PartsMarking />
<PartsAssembly />
<FinishedAppearance />
<Inspection />
<ProductDescription />
<SpecialRequests />
