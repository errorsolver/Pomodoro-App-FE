<script>
  import { page } from "$app/state";
  import BtnCompleted from "$lib/assets/icons/BtnCompleted.svg";
  import BtnIncomplete from "$lib/assets/icons/BtnIncomplete.svg";
  import BtnCompletedSelected from "$lib/assets/icons/BtnCompletedSelected.svg";
  import BtnIncompleteSelected from "$lib/assets/icons/BtnIncompleteSelected.svg";
  import { json } from "@sveltejs/kit";

  let { children } = $props();

  let url = $derived(page.url);
  let pathname = $derived(page.url.pathname);
  let search = $derived(page.url.search);
</script>

<div class="mt-8">
  <div class="sticky top-2 z-999">
    <p class="text-3xl text-center">Session</p>
    <div class="flex justify-center space-x-4 mt-4">
      <a href="/session/completed">
        {#if pathname.endsWith("/completed")}
          <img src={BtnCompletedSelected} alt="Button Completed" />
        {:else}
          <img src={BtnCompleted} alt="Button Completed" />
        {/if}
      </a>
      <a href="/session/incomplete">
        {#if pathname.endsWith("/incomplete")}
          <img src={BtnIncompleteSelected} alt="Button Incomplete" />
        {:else}
          <img src={BtnIncomplete} alt="Button Incomplete" />
        {/if}
      </a>
    </div>
  </div>
  
  {@render children?.()}
</div>
