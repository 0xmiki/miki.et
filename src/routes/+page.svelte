<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
</script>

<div class="p-[15vw]">
	<div class="px-6">
		<li>e/acc maxi</li>
		<li>agi will not happen unless I build it</li>
		<li>llm engineering = applied alchemy</li>
		<li>believer in spontaneous creativity</li>
		<li>can build full stack applications (trust me bro)</li>
		<li>enough talk i'm currently building the "vercel" and "notion" for AI generated media</li>
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
			<li class="ml-12">A node based canvas to visually construct media generation piplines</li>
			<li class="ml-12">
				And a backend infra which handles image processing and compression as well as video
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
			<li class="ml-12">Node based canvas to visually construct media generation pipelines</li>
			<li class="ml-12">
				An API with a CDN built in. All devs have to do now is use my API and they get media
				compression and storage out of the box.
				<HoverCard.Root>
					<HoverCard.Trigger
						href="https://github.com/sveltejs"
						target="_blank"
						rel="noreferrer noopener"
						class="rounded-sm underline  focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
					>
						@sveltejs
					</HoverCard.Trigger>
					<HoverCard.Content class="w-80">
						<div class="flex justify-between space-x-4">
							<div class="space-y-1">
								<h4 class=" text-sm font-semibold">@sveltejs</h4>
								<p class="text-sm">Cybernetically enhanced web apps.</p>
								<div class="flex items-center pt-2">
									<span class="text-muted-foreground text-xs"> Joined September 2022 </span>
								</div>
							</div>
						</div>
					</HoverCard.Content>
				</HoverCard.Root>
			</li>
		</div>
	</div>
	<div class="mt-55 flex flex-col">
		<a target="_blank" href="https://github.com/0xmiki" class="hover:underline">GitHub</a>
		<a target="_blank" href="https://t.me/willtocode" class="hover:underline">Telegram channel</a>
		<a target="_blank" href="https://x.com/miki_code" class="hover:underline">X account</a>
	</div>
</div>
