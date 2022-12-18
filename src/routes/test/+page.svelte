<script lang="ts">
	import { page } from "$app/stores";
</script>

<p>{$page.url.href}</p>
<p>{$page.url.origin}</p>
<p>{$page.url.host}</p>
<p>{$page.url.hostname}</p>