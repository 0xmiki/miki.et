<script lang="ts">
	import { onMount } from 'svelte';

	function openGithub() {
		window.open('https://github.com/0xmiki/telegramhighlights.koplugin', '_blank');
	}

	function openClipsGithub() {
		window.open('https://github.com/0xmiki/clips', '_blank');
	}
</script>

<div class="mt-8 mb-3 flex w-full items-center justify-between">
	<h1 class="text-left text-3xl font-bold">miki: indie hacker</h1>
</div>

<div class="flex flex-col gap-6">
	<div
		class="mt-3 rounded-2xl border border-[#353a45] bg-[#282c34] p-6 shadow-lg transition-transform hover:scale-[1.025] hover:shadow-2xl"
	>
		<p class="mb-2 text-2xl font-semibold tracking-tight text-[#f3f3f3]">Clips</p>
		<p class="mb-4 text-[#bfc7d5]">Use AI to generate clips from YouTube</p>
		<div class="flex w-full items-center gap-3">
			<div
				class="flex items-center gap-1 rounded-full border border-[#353a45] bg-[#23272e] px-3 py-1"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-user-icon lucide-user"
					><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle
						cx="12"
						cy="7"
						r="4"
					/></svg
				>
				<p class="text-xs text-[#bfc7d5]">12</p>
			</div>
			<div
				onclick={openClipsGithub}
				class="flex w-33 cursor-pointer items-center justify-between gap-1 rounded-full border border-[#353a45] bg-[#23272e] px-3 py-1 transition-colors hover:bg-[#2d313a]"
			>
				Github
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-external-link-icon lucide-external-link"
					><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
						d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
					/></svg
				>
			</div>
		</div>
	</div>

	<div
		class="mt-3 rounded-2xl border border-[#353a45] bg-[#282c34] p-6 shadow-lg transition-transform hover:scale-[1.025] hover:shadow-2xl"
	>
		<p class="mb-2 text-2xl font-semibold tracking-tight text-[#f3f3f3]">Koreader Plugin</p>
		<p class="mb-4 text-[#bfc7d5]">
			A plugin that lets users save and access their highlights from their e-readers through a
			telegram miniapp
		</p>
		<div class="flex w-full items-center gap-3">
			<div
				class="flex items-center gap-1 rounded-full border border-[#353a45] bg-[#23272e] px-3 py-1"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-user-icon lucide-user"
					><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle
						cx="12"
						cy="7"
						r="4"
					/></svg
				>
				<p class="text-xs text-[#bfc7d5]">167</p>
			</div>
			<div
				onclick={openGithub}
				class="flex w-33 cursor-pointer items-center justify-between gap-1 rounded-full border border-[#353a45] bg-[#23272e] px-3 py-1 transition-colors hover:bg-[#2d313a]"
			>
				Github
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-external-link-icon lucide-external-link"
					><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
						d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
					/></svg
				>
			</div>
		</div>
	</div>
</div>

<!-- Social links moved to bottom -->
<div class="mt-10 flex w-full justify-center gap-6">
	<a
		href="https://t.me/mikxyas"
		target="_blank"
		rel="noopener"
		class="text-lg font-medium text-white/80 transition-colors hover:underline"
	>
		Telegram
	</a>
	<a
		href="https://x.com/0xlordofbits"
		target="_blank"
		rel="noopener"
		class="text-lg font-medium text-white/80 transition-colors hover:underline"
	>
		𝕏
	</a>
</div>
