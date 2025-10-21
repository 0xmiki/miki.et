<script lang="ts">
	import Hover from '$lib/components/hover.svelte';
	import TheMissingPiece from './blogs/the-missing-piece.svx';
	import AboutMe from './blogs/about-me.svx';
</script>

<div class="p-[9vw] lg:p-[15vw]">
	<div class="px-6">
		<AboutMe />
	</div>
	<div class=" prose prose-neutral dark:prose-invert prose-base mt-55 w-full">
		<TheMissingPiece />
	</div>
	<div class="mt-55 flex flex-col">
		<a
			target="_blank"
			href="https://github.com/0xmiki"
			class="opacity-80 hover:underline hover:opacity-90">GitHub</a
		>
		<a
			target="_blank"
			href="https://x.com/miki_code"
			class="opacity-80 hover:underline hover:opacity-90">X account</a
		>

		<a
			target="_blank"
			href="https://t.me/willtocode"
			class="opacity-80 hover:underline hover:opacity-90">Telegram channel</a
		>
		<p class="opacity-80 hover:opacity-90">mikiyas.dev@gmail.com</p>
	</div>
</div>
