<script lang="ts">
	export let title = "Dongle";

	export let heroImage = "";

	export let description = "Dongle's website";

	export let imageHost = "";
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={title} name="og:title" />
	<meta content={title} name="twitter:title" />
	<meta content="{imageHost}{heroImage}" name="og:image" />
	<meta
		content="https://{imageHost}{heroImage}"
		name="og:image:secure_url"
	/>
	<meta
		content="https://{imageHost}{heroImage}"
		name="twitter:image"
	/>
	<meta
		content="https://{imageHost}{heroImage}"
		name="twitter:image:src"
	/>
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={description} name="description" />
	<meta content={description} name="og:description" />
	<meta content={description} name="twitter:description" />
</svelte:head>
