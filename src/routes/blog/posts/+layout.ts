import type { LayoutLoad } from "./$types";
import { error } from "@sveltejs/kit";
import type { Post } from "../+page.server";

export const load: LayoutLoad = async ({ route, url }) => {
	const slug = route.id.replace("/blog/posts/", "") ?? null;

	try {
		const metadata = ((await import(`./${slug}/+page.md`)) as Post).metadata;
		return {
			title: metadata.title,
			description: metadata.description,
			author: metadata.author,
			thumbnail: metadata.thumbnail,
			date: metadata.date,
			host: url.host,
			protocol: url.protocol
		}
	} catch {
		throw error(404, "No such blog post was found!");
	}
};

export const prerender = false;