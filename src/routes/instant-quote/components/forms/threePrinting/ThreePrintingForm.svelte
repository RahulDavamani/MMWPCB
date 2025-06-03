<script lang="ts">
	import DesignFile from '../../DesignFile.svelte';
	import DesignUnits from './DesignUnits.svelte';
	import Inserts from './Inserts.svelte';
	import Material from './Material.svelte';
	import Name from './Name.svelte';
	import PartsAssembly from './PartsAssembly.svelte';
	import PartsMarking from './PartsMarking.svelte';
	import PrintingRisk from './PrintingRisk.svelte';
	import ProductDescription from './ProductDescription.svelte';
	import Quantity from './Quantity.svelte';
	import SpecialRequests from './SpecialRequests.svelte';
	import ThreadsTappedHoles from './ThreadsTappedHoles.svelte';
</script>

<DesignFile />
<Name />
<Quantity />
<DesignUnits />
<Material />
<div class="divider" />
<ThreadsTappedHoles />
<Inserts />
<div class="divider" />
<PartsMarking />
<PartsAssembly />
<PrintingRisk />
<ProductDescription />
<SpecialRequests />
