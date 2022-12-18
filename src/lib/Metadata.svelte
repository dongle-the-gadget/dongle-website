<script lang="ts">
	import { page } from "$app/stores";

	export let title = "Dongle";

	export let heroImage = "";
</script>

<title>{title}</title>
<meta content={title} name="og:title">
<meta content={title} name="twitter:title">
<meta content="https://{$page.url.host}{heroImage}" name="og:image">
<meta content="https://{$page.url.host}{heroImage}" name="twitter:image:src">
<meta name="twitter:card" content="summary_large_image">