<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col">
	<div class="flex items-center gap-2 mb-4 text-2xl font-bold">
		<Icon icon="mdi:faq" class="text-accent mt-1" />
		Q&A
	</div>
	<div class="border shadow rounded-lg px-3 py-2 grow flex flex-col justify-between">
		<ul class="list-disc pl-6 text-sm space-y-1">
			<li>How do I set my shipping address?</li>
			<li>How do I manage my shopping cart?</li>
			<li>I have not received my order. What can I do?</li>
			<li>How do I delete my account?</li>
		</ul>
		<!-- <a href="/support" class="btn btn-sm btn-outline btn-accent w-full mt-3">
			Ask a Question
			<Icon icon="mdi:chat-question" width={18} />
		</a> -->
	</div>
</div>
