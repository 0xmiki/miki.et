/// <reference types="@sveltejs/kit" />
/// <reference types="mdsvex" />

declare module '*.svx' {
	import { SvelteComponentTyped } from 'svelte';
	export default class MarkdownComponent extends SvelteComponentTyped {}
}
