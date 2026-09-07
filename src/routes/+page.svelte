<script lang="ts">
	import GithubLogoIcon from 'phosphor-svelte/lib/GithubLogoIcon';
	import XLogoIcon from 'phosphor-svelte/lib/XLogoIcon';
	import ArticleIcon from 'phosphor-svelte/lib/ArticleIcon';
	import ArrowUpRightIcon from 'phosphor-svelte/lib/ArrowUpRightIcon';

	const projects = [
		{
			name: '4D chess',
			description:
				'Play chess across four connected boards and explore the position in an interactive tesseract. Invite a friend, play the computer, or learn through guided lessons.',
			stack: 'SvelteKit · Convex',
			links: [
				{ label: 'Play online', href: 'https://4dchess.lol' },
				{ label: 'GitHub', href: 'https://github.com/0xmiki/4dchess' }
			],
			image: '/projects/4dchess.png',
			width: 1400,
			height: 760,
			alt: '4D chess showing four connected chessboards beside an interactive tesseract.'
		},
		{
			name: 'Figmaboy',
			description:
				'A desktop design editor with Codex beside the canvas. Draw and edit interfaces by hand or through chat, with local files and a shared undo history.',
			stack: 'Svelte · Tauri · Rust',
			links: [
				{ label: 'Website', href: 'https://0xmiki.github.io/figmaboy/' },
				{ label: 'GitHub', href: 'https://github.com/0xmiki/figmaboy' }
			],
			image: '/projects/figmaboy.png',
			width: 1586,
			height: 992,
			alt: 'Figmaboy editing a radio interface, with editable layers on the left and Codex chat on the right.'
		},
		{
			name: 'Bookshots',
			description:
				'Send Kindle highlights from KOReader to Telegram as quote images. A companion mini app lets you browse your books, organize highlights, and customize quotes.',
			stack: 'Lua · SvelteKit · Telegram',
			links: [
				{ label: 'Open bot', href: 'https://t.me/bookshotsbot' },
				{ label: 'KOReader plugin', href: 'https://github.com/0xmiki/telegramhighlights.koplugin' },
				{ label: 'Mini app source', href: 'https://github.com/0xmiki/bookshots-miniapp' }
			],
			image: '/projects/bookshots.png',
			width: 905,
			height: 905,
			alt: 'A book highlight turned into a customized quote image with Bookshots.'
		},
		{
			name: 'ChessCave',
			description:
				'A desktop app for studying your chess games. Review games with Stockfish, turn mistakes into practice drills, and ask Codex about a position. Studies and notes stay on your computer.',
			stack: 'Svelte · Tauri · Stockfish',
			links: [
				{ label: 'Downloads', href: 'https://github.com/0xmiki/chesscave/releases/latest' },
				{ label: 'GitHub', href: 'https://github.com/0xmiki/chesscave' }
			],
			image: '/projects/chesscave.png',
			width: 1920,
			height: 1080,
			alt: 'ChessCave reviewing a chess game with engine analysis and Codex coaching.'
		},
		{
			name: 'Clips',
			description:
				'Turn a YouTube video into shareable clips. Describe the moments you want, let AI find them, then download the results from the desktop app.',
			stack: 'Svelte · Tauri · Gemini',
			links: [
				{ label: 'Downloads', href: 'https://github.com/0xmiki/clips/releases' },
				{ label: 'GitHub', href: 'https://github.com/0xmiki/clips' }
			],
			image: '/projects/clips.png',
			width: 933,
			height: 1008,
			alt: 'Clips desktop app showing generated video clips and download controls.'
		}
	];
</script>

<svelte:head>
	<title>miki | Projects</title>
	<meta
		name="description"
		content="Projects by Miki: Figmaboy, Bookshots, Clips, 4D chess, and ChessCave. Design tools, reading highlights, video clipping, and chess."
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
	<h2 class="section-title">Projects</h2>
	{#each projects as project, index (project.name)}
		<article>
			<h3>{project.name}</h3>
			<p>{project.description}</p>
			<p class="stack">{project.stack}</p>
			<div class="project-links">
				{#each project.links as link (link.href)}
					<a href={link.href}>{link.label}</a>
				{/each}
			</div>
			<img
				src={project.image}
				width={project.width}
				height={project.height}
				alt={project.alt}
				loading={index === 0 ? 'eager' : 'lazy'}
			/>
		</article>
	{/each}
</main>

<footer>
	<a href="https://github.com/0xmiki?tab=repositories"
		>All repositories <ArrowUpRightIcon size={16} aria-hidden="true" /></a
	>
</footer>
