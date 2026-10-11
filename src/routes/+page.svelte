<script lang="ts">
	import GithubLogoIcon from 'phosphor-svelte/lib/GithubLogoIcon';
	import XLogoIcon from 'phosphor-svelte/lib/XLogoIcon';
	import ArticleIcon from 'phosphor-svelte/lib/ArticleIcon';
	import ArrowUpRightIcon from 'phosphor-svelte/lib/ArrowUpRightIcon';

	type Project = {
		name: string;
		status: string;
		statusHref?: string;
		description: string;
		links: { label: string; href: string }[];
		image?: { src: string; width: number; height: number; alt: string };
	};

	const projects: Project[] = [
		{
			name: 'Anchor',
			status: 'Product built · working on the story',
			description:
				'A skill is a list of instructions. An anchor is a class: the properties and behaviors of a feature, typed and hosted, so every agent on your team knows how it works. Works with Claude Code, Codex, Cursor, and any MCP client. The product is done. Now I’m working on the branding and on showing developers why they need it.',
			links: [{ label: 'anchor.et', href: 'https://anchor.et' }],
			image: {
				src: '/projects/anchor.png',
				width: 1200,
				height: 630,
				alt: 'A 2D platformer skill as a SKILL.md file on a laptop, next to the same knowledge as a typed, hosted anchor class.'
			}
		},
		{
			name: 'Day One',
			status: 'Live',
			description:
				'A friend and I were each building our own projects, but we wanted to work side by side: talk regularly and keep up with each other’s progress. Nothing fit, so I built Day One, a shared space to throw around ideas, plan, and build together.',
			links: [{ label: 'dayone.miki.et', href: 'https://dayone.miki.et' }],
			image: {
				src: '/projects/dayone.png',
				width: 3200,
				height: 2000,
				alt: 'Day One showing a shared space with project folders in the sidebar and a group chat giving feedback on a landing page.'
			}
		},
		{
			name: '4D chess',
			status: 'Went viral on X',
			statusHref: 'https://x.com/miki_code/status/2096132455652549117',
			description:
				'My 4D chess demo blew up on X, so I turned it into a real game. Play across four connected boards and explore the position in an interactive tesseract. Invite a friend, play the computer, or learn through guided lessons.',
			links: [
				{ label: '4dchess.lol', href: 'https://4dchess.lol' },
				{ label: 'GitHub', href: 'https://github.com/0xmiki/4dchess' }
			],
			image: {
				src: '/projects/4dchess.png',
				width: 1400,
				height: 760,
				alt: '4D chess showing four connected chessboards beside an interactive tesseract.'
			}
		},
		{
			name: 'Bookshots',
			status: '1,000+ users',
			description:
				'I posted this KOReader plugin on Reddit and it kind of blew up. Highlight a passage on your Kindle and it lands in your Telegram inbox as a quote image like this one. A companion mini app lets you browse your books and style your quotes.',
			links: [
				{ label: 'Open bot', href: 'https://t.me/bookshotsbot' },
				{
					label: 'KOReader plugin',
					href: 'https://github.com/0xmiki/telegramhighlights.koplugin'
				},
				{ label: 'Mini app source', href: 'https://github.com/0xmiki/bookshots-miniapp' }
			],
			image: {
				src: '/projects/bookshots.png',
				width: 905,
				height: 905,
				alt: 'A Kindle highlight from Ursula K. Le Guin’s Lao Tzu, sent to Telegram as a quote image by Bookshots.'
			}
		},
		{
			name: 'ChessCave',
			status: 'Paused · porting to Electron',
			description:
				'I built ChessCave to review my own games and get better at chess. It runs your games through Stockfish, turns your mistakes into practice drills, and lets you ask Codex about a position. Everything stays on your computer.',
			links: [
				{ label: 'Downloads', href: 'https://github.com/0xmiki/chesscave/releases/latest' },
				{ label: 'GitHub', href: 'https://github.com/0xmiki/chesscave' }
			],
			image: {
				src: '/projects/chesscave.png',
				width: 1920,
				height: 1080,
				alt: 'ChessCave reviewing a chess game with engine analysis and Codex coaching.'
			}
		}
	];

	const stack = [
		'Svelte',
		'SvelteKit',
		'Convex',
		'Supabase',
		'Electron',
		'Tauri',
		'Lua',
		'Cloudflare'
	];

	let lightbox: HTMLDialogElement;
	let expanded = $state<Project['image']>();

	function expand(image: Project['image']) {
		expanded = image;
		lightbox.showModal();
	}
</script>

<svelte:head>
	<title>miki | Projects</title>
	<meta
		name="description"
		content="What Miki is building: Anchor, Day One, 4D chess, Bookshots, and ChessCave."
	/>
</svelte:head>

<header class="site-header">
	<h1>miki ⋆｡°✩</h1>
	<nav aria-label="Personal links">
		<a href="https://github.com/0xmiki"><GithubLogoIcon size={20} aria-hidden="true" />GitHub</a>
		<a href="https://x.com/miki_code" aria-label="@miki_code on X"
			><XLogoIcon size={20} aria-hidden="true" />@miki_code</a
		>
		<span class="disabled-link" role="link" aria-disabled="true"
			><ArticleIcon size={20} aria-hidden="true" />Blog</span
		>
	</nav>
</header>

<main id="work">
	{#each projects as project, index (project.name)}
		<article>
			<h2>{project.name}</h2>
			<p class="status">
				{#if project.statusHref}
					<a href={project.statusHref}>{project.status}</a>
				{:else}
					{project.status}
				{/if}
			</p>
			<p>{project.description}</p>
			<div class="project-links">
				{#each project.links as link (link.href)}
					<a href={link.href}>{link.label}</a>
				{/each}
			</div>
			{#if project.image}
				{@const image = project.image}
				<button class="image-button" type="button" onclick={() => expand(image)}>
					<img
						src={image.src}
						width={image.width}
						height={image.height}
						alt={image.alt}
						loading={index === 0 ? 'eager' : 'lazy'}
					/>
					<span class="visually-hidden">Expand image</span>
				</button>
			{/if}
		</article>
	{/each}
</main>

<dialog class="lightbox" bind:this={lightbox} onclose={() => (expanded = undefined)}>
	<button type="button" onclick={() => lightbox.close()}>
		{#if expanded}
			<img src={expanded.src} width={expanded.width} height={expanded.height} alt={expanded.alt} />
		{/if}
		<span class="visually-hidden">Close image</span>
	</button>
</dialog>

<footer>
	<p class="stack"><span>Stack I use</span> {stack.join(' · ')}</p>
	<a href="https://github.com/0xmiki?tab=repositories"
		>All repositories <ArrowUpRightIcon size={16} aria-hidden="true" /></a
	>
</footer>
