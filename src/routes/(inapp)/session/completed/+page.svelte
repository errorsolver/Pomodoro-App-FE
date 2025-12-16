<script lang="ts">
    import CardLong from '$lib/components/CardLong.svelte';

    export const prerender = false;
</script>

<div class="flex flex-col gap-4 w-180 mx-auto m-8 mb-32">
    {#each { length: 40 } as _}
        <CardLong />
    {/each}
</div>
