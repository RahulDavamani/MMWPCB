<script lang="ts">
	import type { TextPart, BoldPart, LinkPart, ImagePart } from '../../../../../../stores/support.store';

	export let part: TextPart | BoldPart | LinkPart | ImagePart;
</script>

{#if part.type === 'text'}
	<span>{part.text}</span>
{:else if part.type === 'bold'}
	<span class="font-bold">{part.text}</span>
{:else if part.type === 'link'}
	<a href={part.url} class="btn btn-link btn-sm text-base px-0">{part.text}</a>
{/if}
