import { redirect, type Handle } from '@sveltejs/kit';

// The site lives at www.miki.et; the bare domain sends people there.
export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.hostname === 'miki.et') {
		const url = new URL(event.url);
		url.hostname = 'www.miki.et';
		redirect(308, url);
	}
	return resolve(event);
};
