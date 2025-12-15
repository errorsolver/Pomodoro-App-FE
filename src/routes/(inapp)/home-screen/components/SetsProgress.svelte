<script>
    import DotActive from '$lib/assets/img/DotActive.svg?url';
    import DotInActive from '$lib/assets/img/DotInActive.svg?url';

    export let sets;
    export let maxSet;
</script>

<div class="flex justify-center gap-4 mt-4">
    {#each { length: sets }}
        <img src={DotActive} class="dot" alt="active dot" width="18px" />
    {/each}
    {#each { length: maxSet - sets }}
        <img src={DotInActive} class="dot" alt="inactive dot" width="18px" />
    {/each}
</div>
