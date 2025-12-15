<script>
    import ReadingWoman from '$lib/assets/img/ReadingWoman.svg?url';
    import WomanNap from '$lib/assets/img/WomanNap.svg?url';

    export let isWork;
</script>

<div class="flex justify-center mt-8">
    {#if isWork}
        <img src={ReadingWoman} alt="" class="status-image" />
    {:else}
        <img src={WomanNap} alt="test" class="status-image" />
    {/if}
</div>
