
<script lang="ts">
    import MenuTable from '$lib/components/MenuTable.svelte';

    export let children;
</script>

{#if typeof children === 'function'}
    {@render children()}
{:else}
    {children}
{/if}

<MenuTable />
