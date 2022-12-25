<script lang="ts">
    import type { PageData } from './$types';
    import { TextBlock } from 'fluent-svelte';
    
    export let data: PageData;
    $: ({ host } = data);
</script>

<TextBlock>{host}</TextBlock>