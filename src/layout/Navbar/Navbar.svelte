<script lang="ts">
	import { navigating, page } from "$app/stores";
	import type { NavbarItem } from "$data/links";

	import { externalLink } from "$lib";
	import { ListItem, Tooltip } from "fluent-svelte";
	import Navigation from "@fluentui/svg-icons/icons/navigation_24_regular.svg?raw";

	export let items: NavbarItem[] = [];
	export let buttons: {
		icon: string;
		href: string;
		label: string;
		isExternal: boolean;
	}[] = [];

	let innerWidth = 649; // Don't render the mobile layout before hydration
	let sidebarVisible = false;
	let sidebar: HTMLElement;
	let sidebarButton: HTMLButtonElement;

	const toggleSidebar = () => {
		sidebarVisible = !sidebarVisible;
	};

	const handleOuterClick = (e: MouseEvent) => {
		if (
			!(
				!sidebarVisible ||
				e.target === sidebarButton ||
				sidebarButton.contains(e.target as Node) ||
				e.target === sidebar ||
				sidebar.contains(e.target as Node)
			)
		) {
			toggleSidebar();
		}
	};

	$: {
		$navigating && (sidebarVisible = false);
	}
</script>

<svelte:window bind:innerWidth on:click={handleOuterClick} />

<header class="sticky">
	<div class="navbar">
		<nav class="inner">
			<a class="logo" href="/" data-sveltekit-prefetch> Dongle </a>
			{#if innerWidth > 648}
				<div class="divider" />
				{#each items as { name, path, external, icon, type }}
					{#if type === "divider"}
						<div class="divider" />
					{:else}
						<a
							class="item"
							data-sveltekit-prefetch
							class:selected={$page.url.pathname === path ||
								($page.url.pathname.split("/").length > 1 &&
									path.split("/").length > 1 &&
									$page.url.pathname.startsWith(path) &&
									!(path === "" || path === "/")) ||
								(path === "/" && $page.url.pathname === "")}
							href={path}
							target={external ? "_blank" : undefined}
							rel={external ? "noreferrer noopener" : undefined}
						>
							{#if icon}
								{@html icon}
							{/if}
							<span>{name}</span>
						</a>
					{/if}
				{/each}
			{/if}
		</nav>
		<div class="buttons">
			{#if innerWidth > 648}
				{#each buttons as { icon, href, label, isExternal }}
					{#if isExternal}
					<a class="button" {href} aria-label={label} {...externalLink} title={label}>
						{@html icon}
					</a>
					{:else}
					<a class="button" {href} aria-label={label} title={label}>
						{@html icon}
					</a>
					{/if}
				{/each}
			{:else}
				<button
					on:click={toggleSidebar}
					bind:this={sidebarButton}
					class="button sidebar-button"
				>
					{@html Navigation}
				</button>
			{/if}
		</div>
		<aside
			bind:this={sidebar}
			class="sidebar scroller"
			class:visible={sidebarVisible}
		>
			{#each items as { name, path, external, icon, type }}
				{#if type === "divider"}
					<hr />
				{:else}
					<ListItem
						type="navigation"
						data-sveltekit-prefetch
						on:click={toggleSidebar}
						selected={$page.url.pathname === path ||
							($page.url.pathname.split("/").length > 1 &&
								path.split("/").length > 1 &&
								$page.url.pathname.startsWith(path) &&
								!(path === "" || path === "/")) ||
							(path === "/" && $page.url.pathname === "")}
						href={path}
						target={external ? "_blank" : undefined}
						rel={external ? "noreferrer noopener" : undefined}
					>
						<svelte:fragment slot="icon">
							{#if icon}
								{@html icon}
							{/if}
						</svelte:fragment>
						<span>{name}</span>
					</ListItem>
				{/if}
			{/each}
			<hr />
			{#each buttons as { icon, href, label }}
				<ListItem
					{href}
					data-sveltekit-prefetch
					type="navigation"
					{...externalLink}
				>
					<svelte:fragment slot="icon">
						{#if icon}
							{@html icon}
						{/if}
					</svelte:fragment>
					<span>{label}</span>
				</ListItem>
			{/each}
		</aside>
	</div>
</header>

<style lang="scss">
	@use "./Navbar";
</style>
