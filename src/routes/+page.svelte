<script lang="ts">
	import Hover from '$lib/components/hover.svelte';
</script>

<div class="p-[9vw] lg:p-[15vw]">
	<div class="px-6">
		<li>21 yo</li>
		<li>e/acc maxi</li>
		<li>agi will not happen (unless I build it)</li>
		<li>llm engineering = applied alchemy</li>
		<li>believer in spontaneous creativity</li>
		<li>
			can build full stack applications <Hover
				hover={'(trust me bro)'}
				description="Pinkie promise"
			/>
		</li>
		<li>currently building the "vercel" and the "notion" for AI generated media</li>
	</div>
	<div class="mt-55">
		<p class="text-3xl">The Missing Piece</p>
		<div class="mt-3">
			<li class="ml-6">Most of AI inference will be used for generating videos and images</li>
			<li class="ml-6">Everyone is competing to build nanobanana wrappers, however</li>
			<li class="ml-12">
				No one is building the infrastructure for devs. The "vercel", the one click deploy
				experience.
			</li>
			<li class="ml-12">
				No one is rethinking the user experience. The "cursor", like how programmers went from copy
				pasting from chatgpt to using cursor.
			</li>
			<li class="ml-6">And that's exactly what I am building</li>
			<li class="ml-12">
				A node based canvas like Excalidraw to visually construct media generation piplines
			</li>
			<li class="ml-12">
				And a backend infra which handles image processing and compression as well as video delivery
			</li>
			<li class="ml-6">I faced two problems while building my own ai media app</li>
			<li class="ml-12">
				Image generation pipelines got too messy and complicated to manage as code
			</li>
			<li class="ml-12">
				I had to figure out image / video storage and retreval and on top of that I had to compress
				the generated images to display them faster.
			</li>
			<li class="ml-6">The Solution</li>
			<li class="ml-12">
				Node based canvas to visually construct media generation pipelines. Think of it as designing
				prompts and entire pipelines in Excalidraw
			</li>
			<li class="ml-12">
				An API that connects to media generation models like nanobanana and builds a CDN layer on
				top of them. All devs have to do now is call the model through API and they get media
				delivery, compression and storage out of the box.
			</li>
			<li class="ml-24">
				Simplifying infrastructure is a crucial step in allowing anyone to launch their own niche
				Media generation apps. Especially now with the rise of vibe coding and viral marketing.
				Creators want to build their own apps for their followers.
			</li>
		</div>
	</div>
	<div class="mt-55 flex flex-col">
		<a target="_blank" href="https://github.com/0xmiki" class="hover:underline">GitHub</a>
		<a target="_blank" href="https://t.me/willtocode" class="hover:underline">Telegram channel</a>
		<a target="_blank" href="https://x.com/miki_code" class="hover:underline">X account</a>
	</div>
</div>
