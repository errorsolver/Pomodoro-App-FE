<script>
    import ContainerProfile from '$lib/assets/img/ContainerProfile.svg?url';
    import ContainerListIncomplete from '$lib/assets/img/ContainerListIncomplete.svg?url';

    export let name = 'Name';
    export let focusCount = 6;
    export let focusTime = 10000; // detik
    export let sessionCount = 7;

    const formatFocusTime = (timeInSeconds) => {
        const totalMinutes = Math.floor(timeInSeconds / 60);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes}m`;
    };
</script>

<div class="wrap p-4">
    <img src={ContainerListIncomplete} alt="background" class="background-image" />
    <img src={ContainerProfile} alt="profile" width="80px" />
    <div class="content grow ps-4">
        <p>{name}</p>
        <div class="flex justify-between">
            <p>Focus Count</p>
            <p>{focusCount} Times</p>
        </div>
        <div class="flex justify-between">
            <p>Focus Time</p>
            <p>{formatFocusTime(focusTime)}</p>
        </div>
        <div class="flex justify-between">
            <p>Session Count</p>
            <p>{sessionCount} Times</p>
        </div>
    </div>
</div>

<style scoped>
    .wrap {
        position: relative;
        aspect-ratio: 408 / 173;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: fill;
        z-index: 0;
    }

    .content {
        position: relative;
        z-index: 1;
    }
</style>
