<script>
    import MenuTable from '$lib/components/MenuTable.svelte';

    let { children } = $props();
</script>

{@render children?.()}

<MenuTable />
