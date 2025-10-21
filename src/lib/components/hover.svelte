<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';

	let { hover, title = null, description, footer = null } = $props();
</script>

<HoverCard.Root>
	<HoverCard.Trigger
		class="rounded-sm  text-blue-400 no-underline  underline-offset-4  hover:underline"
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
