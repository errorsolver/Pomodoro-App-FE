<script lang="ts">
    import { page } from '$app/state';
    import BtnCompleted from '$lib/assets/img/BtnCompleted.svg?url';
    import BtnIncomplete from '$lib/assets/img/BtnIncomplete.svg?url';
    import BtnCompletedSelected from '$lib/assets/img/BtnCompletedSelected.svg?url';
    import BtnIncompleteSelected from '$lib/assets/img/BtnIncompleteSelected.svg?url';

    const { children } = $props<{ children: unknown }>();

    let pathname = $derived(page.url.pathname);
</script>

<div class="max-w-full">
    <div
        class="flex flex-col items-center justify-self-center sticky top-0 pb-4 w-full max-w-full z-50 bg-linear-to-b from-[#F8F8F6] from-83% to-transparent to-90%"
    >
        <p class="text-3xl text-center">Session</p>
        <div class="flex justify-center space-x-4 mt-4">
            <a href="/session/completed">
                {#if pathname.endsWith('/completed')}
                    <img
                        src={BtnCompletedSelected}
                        alt="Button Completed"
                        width="auto"
                        height="auto"
                    />
                {:else}
                    <img
                        src={BtnCompleted}
                        alt="Button Completed"
                        width="auto"
                        height="auto"
                    />
                {/if}
            </a>
            <a href="/session/incomplete">
                {#if pathname.endsWith('/incomplete')}
                    <img
                        src={BtnIncompleteSelected}
                        alt="Button Incomplete"
                        width="auto"
                        height="auto"
                    />
                {:else}
                    <img
                        src={BtnIncomplete}
                        alt="Button Incomplete"
                        width="auto"
                        height="auto"
                    />
                {/if}
            </a>
        </div>
    </div>

    {#if typeof children === 'function'}
        {@render children()}
    {:else}
        {children}
    {/if}
</div>
