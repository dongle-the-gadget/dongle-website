<script lang="ts">
	import { BlogCard, HeaderChip, Metadata, PageSection, tilt, Titlebar } from "$lib";
	import { Button, TextBlock } from "fluent-svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
	$: ({ posts } = data);
	$: mainPost = posts[0];

	let scrollY: number;
</script>

<Metadata title="Dongle • Blog" />

<svelte:window
	on:scroll={() =>
		window.requestAnimationFrame(() => (scrollY = window.scrollY))}
/>

{#if mainPost}
	<PageSection id="blog">
		<div class="blog-backdrop">
			<img
				alt=""
				src={mainPost.metadata.thumbnail}
				style:transform="translateY({Math.floor(scrollY / 2.5)}px)"
				width="0"
			/>
		</div>
		<div class="main-post">
			<a href="/blog/posts/{mainPost.slug}/">
				<img
					alt="Main post thumbnail"
					height="422"
					src={mainPost.metadata.thumbnail}
					use:tilt={{ max: 2.5, scale: 1.01 }}
					width="633"
				/>
			</a>
			<div class="main-post-info">
				<HeaderChip
					>{new Date(
						mainPost.metadata.date
							.replace(/-/g, "/")
							.replace(/T.+/, "")
					).toLocaleDateString("en-US", {
						year: "numeric",
						day: "numeric",
						month: "short",
					})}</HeaderChip
				>
				<h2>{mainPost.metadata.title}</h2>
				<p>{mainPost.metadata.description}</p>
				<Button href="/blog/posts/{mainPost.slug}/" variant="accent"
					>Read More</Button
				>
			</div>
		</div>
		{#if posts.slice(1).length > 0}
			<div class="blog-cards">
				{#each posts.slice(1) as post}
					<BlogCard slug={post.slug} {...post.metadata} />
				{/each}
			</div>
		{:else}
			<p>More posts coming soon!</p>
		{/if}
	</PageSection>
{:else}
	<div class="error-page">
		<div class="error-panel">
			<div class="cdtitlebar">
				<Titlebar>Blog</Titlebar>
			</div>
			<div class="content-dialog">
				<div class="content-dialog-body">
					<TextBlock variant="subtitle" class="content-dialog-title"
						>No posts yet</TextBlock
					>
					<TextBlock>There are currently no posts here. Go check back later.</TextBlock>
				</div>
				<div class="content-dialog-footer">
					<Button variant="accent" href="/">Go Home</Button>
				</div>
			</div>
		</div>
	</div>
{/if}
	
<style lang="scss">
	@use "src/styles/pages/blog";
	@use "src/styles/pages/error";
</style>