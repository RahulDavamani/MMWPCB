<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import FormItem from '../../../FormItem.svelte';

	$: ({ title, placeholder } = $lg.instantQuote.standardPcb.specialRequest);
</script>

<FormItem {title}>
	<textarea class="textarea textarea-bordered w-full" rows="2" {placeholder} />
</FormItem>
