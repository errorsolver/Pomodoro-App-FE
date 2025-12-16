<script>
    import ReadingWoman from '$lib/assets/img/ReadingWoman.svg?url';
    import WomanNap from '$lib/assets/img/WomanNap.svg?url';

    export let isWork;
</script>

<div class="flex justify-center mt-8">
    {#if isWork}
        <img src={ReadingWoman} alt="Work Status" class="status-image" fetchpriority="high" />
    {:else}
        <img src={WomanNap} alt="Rest Status" class="status-image" fetchpriority="high" />
    {/if}
</div>

<style scoped>
    .status-image {
        height: clamp(10px, 50vw, 180px);
        width: auto;
    }
</style>