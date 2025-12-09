<script>
  import { page } from "$app/state";
  import ContainerHorizontal from "$lib/assets/img/ContainerHorizontal.svg";
  import ContainerProfile from "$lib/assets/img/ContainerProfile.svg";
</script>

<div class="flex flex-col gap-4 w-180 mx-auto m-8 mb-32">
  {#each { length: 4 } as item}
    <div class="wrap p-4">
      <img src={ContainerHorizontal} alt="" class="background-image" />
      <img src={ContainerProfile} alt="" width="80px" />
      <div class="content grow ps-4">
        <p>Name</p>
        <div class="flex justify-between">
          <p>Focus Count</p>
          <p>0 Times</p>
        </div>
        <div class="flex justify-between">
          <p>Focus Time</p>
          <p>2h 40m</p>
        </div>
        <div class="flex justify-between">
          <p>Session Count</p>
          <p>2 Times</p>
        </div>
      </div>
    </div>
  {/each}
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
