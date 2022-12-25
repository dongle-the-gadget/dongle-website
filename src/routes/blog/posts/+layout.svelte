<script lang="ts">
	import { externalLink, Metadata } from "$lib";
	import Share from "@fluentui/svg-icons/icons/share_24_regular.svg?raw";
	import ArrowLeft from "@fluentui/svg-icons/icons/arrow_left_24_regular.svg?raw";
	import { IconButton, MenuFlyout, MenuFlyoutItem } from "fluent-svelte";
	import type { LayoutData } from "./$types";
	import { page } from "$app/stores";

	export let data: LayoutData;

	$: ({ title, thumbnail, author, date, description, host } = data);
</script>

<Metadata title="Dongle • {title}" heroImage={thumbnail} description={description} imageHost={host} />

<section class="blog-post">
	<article>
		<div class="post-title">
			<IconButton
				--icon-color="var(--text-color-secondary)"
				aria-label="Back to Blog"
				class="back-button"
				href="/blog"
				title="Back to Blog"
			>
				{@html ArrowLeft}
			</IconButton>
			<h1>{title}</h1>
		</div>
		<div class="post-info">
			<img alt="{author} avatar" src="https://github.com/{author}.png" />
			<a class="hyperlink" href="https://github.com/{author}" {...externalLink}
				>@{author}</a
			>
			<span>•</span>
			{new Date(date.replace(/-/g, "/").replace(/T.+/, "")).toLocaleDateString(
				"en-US",
				{
					year: "numeric",
					day: "numeric",
					month: "short"
				}
			)}
			<MenuFlyout placement="bottom">
				<IconButton
					size={20}
					aria-label="Share"
					class="share-button"
					title="Share"
					id="share-button"
				>
					{@html Share}
				</IconButton>
				<svelte:fragment slot="flyout">
					<MenuFlyoutItem
						on:click={() => navigator.clipboard.writeText($page.url.href)}
					>
						Copy URL
					</MenuFlyoutItem>
					<MenuFlyoutItem
						on:click={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent($page.url.href)}`, "_blank")}
					>
						Twitter
					</MenuFlyoutItem>
					<MenuFlyoutItem
						on:click={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent($page.url.href)}`, "_blank")}
					>
						Facebook
					</MenuFlyoutItem>
				</svelte:fragment>
			</MenuFlyout>
		</div>
		{#if thumbnail}
			<img class="post-thumbnail" src={thumbnail} alt="Thumbnail" />
		{/if}
		<div class="markdown-body">
			<slot />
		</div>
	</article>
</section>

<style lang="scss">
	@use "src/styles/pages/blogPost";
</style>
