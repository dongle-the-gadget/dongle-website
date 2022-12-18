<script lang="ts">
	import { page } from "$app/stores";

	import type { PageData } from "./$types";

	export let data: PageData;
	$: ({ host } = data);
</script>

<p>{$page.url.href}</p>
<p>{$page.url.origin}</p>
<p>{host}</p>
<p>{$page.url.hostname}</p>