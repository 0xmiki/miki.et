<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="flex w-full justify-center">
	<div class="w-full max-w-6xl p-4">
		{@render children()}
	</div>
</main>
