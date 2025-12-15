
<script lang="ts">
    // CardLong: Komponen kartu profil panjang
    import ContainerHorizontal from '$lib/assets/img/ContainerHorizontal.svg?url';
    import ContainerProfile from '$lib/assets/img/ContainerProfile.svg?url';

    export let name = 'Name';
    export let focusCount = 0;
    export let focusTime = 9600; // detik
    export let sessionCount = 2;

    const formatFocusTime = (timeInSeconds: number) => {
        const totalMinutes = Math.floor(timeInSeconds / 60);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes}m`;
    };
</script>

<div class="wrap p-4">
    <img src={ContainerHorizontal} alt="background" class="background-image" />
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
        aspect-ratio: 932 / 178;
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
