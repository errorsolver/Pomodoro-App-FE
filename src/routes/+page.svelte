<script>
  import ComingBackBtn from "$lib/components/BtnComingBack.svelte";
  import CreateSpaceBtn from "$lib/components/BtnCreateSpace.svelte";
  import HeroGirl from "$lib/components/HeroGirl.svelte";
  import pomoChanLogo from "$lib/assets/logo.svg";
</script>

<nav id="header" class="flex justify-between pt-4 lg:px-16 sticky top-0">
  <img src="{pomoChanLogo}" alt="PomoChan Logo" />

  <div>
    <button
      title="Create Space"
      class="create-space"
      on:click={alert("Create space!")}
    >
      <CreateSpaceBtn />
    </button>

    <button title="Come Back" class="comeback" on:click={alert("Coming back!")}>
      <ComingBackBtn />
    </button>
  </div>
</nav>

<div class="container mx-auto px-6 md:px-4 lg:px-48">
  <div id="flying-text" class="mt-8">
    <strong class="flex text-4xl">Take a seat,</strong>
    <strong class="flex flex-row-reverse text-4xl"
      >let the moment slow down.</strong
    >
  </div>

  <div id="hero">
    <HeroGirl />
  </div>
</div>
