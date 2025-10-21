<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';

	let { hover, title = null, description, footer = null } = $props();
</script>

<HoverCard.Root>
	<HoverCard.Trigger
		href="https://github.com/sveltejs"
		target="_blank"
		rel="noreferrer noopener"
		class="rounded-sm  text-blue-400"
	>
		{hover}
	</HoverCard.Trigger>
	<HoverCard.Content class="w-80">
		<div class="flex justify-between space-x-4">
			<div class="space-y-1">
				{#if title}
					<h4 class=" text-sm font-semibold">{title}</h4>
				{/if}
				<p class="text-sm">{description}</p>
				{#if footer}
					<div class="flex items-center pt-2">
						<span class="text-muted-foreground text-xs"> {footer} </span>
					</div>
				{/if}
			</div>
		</div>
	</HoverCard.Content>
</HoverCard.Root>
