<script>
  import ContainerProfile from '$lib/assets/img/ContainerProfile.svg?url';

  let {
    focusCount = 6,
    focusTime = 10000, // detik
    sessionCount = 7,
  } = $props();

  const formatFocusTime = (timeInSeconds) => {
    const totalMinutes = Math.floor(timeInSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
  };
</script>

<div class="wrap p-4">
  <img src="" alt="" class="background-image" />
  <img src={ContainerProfile} alt="" width="80px" />
  <div class="content grow ps-4">
    <p>Name</p>
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
