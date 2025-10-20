<script>
	import { onMount } from 'svelte';
	onMount(() => document.documentElement.classList.remove('dark'));
</script>

<svelte:head>
	<title>Aim — coming soon</title>
	<meta
		name="description"
		content="Habit-shaping AI that talks you into the good and out of the bad. Launching soon."
	/>
</svelte:head>

<!-- HERO -->
<section class="flex min-h-screen w-full items-center justify-center bg-[#f5f2e9] text-stone-800">
	<div class="mx-auto max-w-2xl px-6 text-center">
		<!-- Brand -->
		<h1 class="font-sans text-5xl font-medium tracking-tight sm:text-7xl">Aim</h1>

		<!-- Tagline -->
		<p class="mt-4 text-lg text-stone-600 sm:text-xl">
			Habit-shaping AI that whispers the good and warns you of the bad.<br />
			<span class="text-stone-500">Launching very soon.</span>
		</p>

		<!-- Notify CTA -->
		<form
			class="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
			on:submit|preventDefault={({ currentTarget }) => {
				alert(`Thanks! We'll ping ${currentTarget.email.value} when Aim goes live.`);
				currentTarget.reset();
			}}
		>
			<input
				type="email"
				name="email"
				placeholder="Enter your email"
				required
				class="min-w-0 flex-1 rounded-md border border-stone-300 bg-white/60 px-4 py-2.5 text-stone-800 placeholder-stone-500 backdrop-blur-sm focus:ring-1 focus:ring-stone-600 focus:outline-none"
			/>
			<button
				type="submit"
				class="rounded-md bg-stone-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-900 active:scale-95"
			>
				Notify me
			</button>
		</form>

		<!-- Social links -->
		<!-- <nav class="mt-14 flex justify-center gap-x-6 text-stone-500">
			{#each ['twitter', 'instagram', 'linkedin'] as s}
				<a href="/" class="hover:text-stone-800">{s}</a>
			{/each}
		</nav> -->
	</div>
</section>
