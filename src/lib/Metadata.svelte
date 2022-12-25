<script lang="ts">
	export let title = "Dongle";

	export let heroImage = "";

	export let description = "Dongle's website";

	export let imageHost = "";

	export let imageProtocol = "";
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={title} name="og:title" />
	<meta content={title} name="twitter:title" />
	{#if heroImage}
		<meta
			content="{imageProtocol}//{imageHost}{heroImage}"
			name="og:image"
		/>
		<meta
			content="{imageProtocol}//{imageHost}{heroImage}"
			name="twitter:image"
		/>
		<meta content="summary_large_image" name="twitter:card" />
	{/if}
	<meta content={description} name="description" />
	<meta content={description} name="og:description" />
	<meta content={description} name="twitter:description" />
</svelte:head>
