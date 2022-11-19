<script lang="ts">
	import { page } from "$app/stores";

	export let title = "Dongle";

	export let image = "";
</script>

<title>{title}</title>
<meta content={title} name="og:title">
<meta content={title} name="twitter:title">

<meta content={image} name="og:image">
<meta content="https://{$page.url.host}{image}" name="twitter:image">