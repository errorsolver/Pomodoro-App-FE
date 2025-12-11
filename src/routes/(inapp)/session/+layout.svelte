<script>
  import { page } from "$app/state";
  import BtnCompleted from "$lib/assets/img/BtnCompleted.svg?url";
  import BtnIncomplete from "$lib/assets/img/BtnIncomplete.svg?url";
  import BtnCompletedSelected from "$lib/assets/img/BtnCompletedSelected.svg?url";
  import BtnIncompleteSelected from "$lib/assets/img/BtnIncompleteSelected.svg?url";
  import { json } from "@sveltejs/kit";

  let { children } = $props();

  let url = $derived(page.url);
  let pathname = $derived(page.url.pathname);
  let search = $derived(page.url.search);
</script>

<div class="">
  <div class="sticky top-0 pt-2 z-999 bg-linear-to-b from-white from-82% to-transparent to-100% pb-6">
    <p class="text-3xl text-center">
      Session
    </p>
    <div class="flex justify-center space-x-4 mt-4">
      <a href="/session/completed">
        {#if pathname.endsWith("/completed")}
          <img src={BtnCompletedSelected} alt="Button Completed" width="auto" height="auto" />
        {:else}
          <img src={BtnCompleted} alt="Button Completed" width="auto" height="auto" />
        {/if}
      </a>
      <a href="/session/incomplete">
        {#if pathname.endsWith("/incomplete")}
          <img src={BtnIncompleteSelected} alt="Button Incomplete" width="auto" height="auto" />
        {:else}
          <img src={BtnIncomplete} alt="Button Incomplete" width="auto" height="auto" />
        {/if}
      </a>
    </div>
  </div>
  
  {@render children?.()}
</div>
