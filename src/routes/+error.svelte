<script lang="ts">	
	import { Metadata, Titlebar } from "$lib";
	import { page } from "$app/stores";
	import { Button, TextBlock } from "fluent-svelte";
</script>

<Metadata />

<div class="error-page">
	<div class="error-panel">
		<div class="cdtitlebar">
			<Titlebar>Error {$page.status}</Titlebar>
		</div>
		<div class="content-dialog">
			<div class="content-dialog-body">
				<TextBlock variant="subtitle" class="content-dialog-title">Something went wrong</TextBlock>
				<TextBlock>{$page.error.message}</TextBlock>
			</div>
			<div class="content-dialog-footer">
				<Button variant="accent" href="/">Go Home</Button>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use "src/styles/pages/error";
</style>
