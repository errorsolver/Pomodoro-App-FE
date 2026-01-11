<script lang="ts">
    import BtnCreateASpace from '$lib/assets/img/BtnCreateASpace.svg?url';
    import SleepingWoman from '$lib/assets/img/SleepingWoman.svg?url';
    import EyeOpen from '$lib/assets/img/EyeOpen.svg?url';
    import EyeClosed from '$lib/assets/img/EyeClosed.svg?url';
    import { enhance } from '$app/forms';

    export let form;
    
    let isShowPassword = false;
    let isSubmitting = false;
</script>

<div class="flex gap-40 justify-center h-screen items-center">
    <div>
        <img src={SleepingWoman} alt="Sleeping Woman Illustration" fetchpriority="high" />
    </div>

    <div>
        <h1 class="text-5xl font-bold mb-2">Create a space</h1>
        <p class="patrickhand mb-8">A calm place to keep your focus.</p>

        {#if form?.error}
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {form.error}
            </div>
        {/if}

        <form method="POST" class="flex flex-col" use:enhance={() => {
            isSubmitting = true;
            return async ({ update }) => {
                await update();
                isSubmitting = false;
            };
        }}>
            <label for="name" class="font-bold">Full Name</label>
            <input
                id="name"
                class="mb-4"
                name="full_name"
                type="text"
                placeholder="Enter your full name"
                required
            />

            <label for="username" class="font-bold">Username</label>
            <input
                id="username"
                class="mb-4"
                name="username"
                type="text"
                placeholder="Enter your username"
                required
            />

            <label for="email" class="font-bold">Email</label>
            <input
                id="email"
                class="mb-4"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
            />

            <label for="password" class="font-bold">Password</label>
            <div class="input-wrapper mb-4">
                <input
                    id="password"
                    class="w-full"
                    name="password"
                    type={isShowPassword ? 'text' : 'password'}
                    placeholder="Enter your password (min 8 characters)"
                    required
                    minlength="8"
                />
                <span class="eye">
                    <button
                        class="block"
                        type="button"
                        on:click={() => (isShowPassword = !isShowPassword)}
                        style="cursor: pointer;"
                    >
                        {#if isShowPassword}
                            <img
                                src={EyeOpen}
                                class="-translate-y-1"
                                alt="Show Password"
                            />
                        {:else}
                            <img src={EyeClosed} alt="Hide Password" />
                        {/if}
                    </button>
                </span>
            </div>

            <button type="submit" class="mt-4 cursor-pointer" disabled={isSubmitting}>
                <img src={BtnCreateASpace} alt="Create Space Button" />
            </button>
        </form>
        <p class="mt-4 text-center patrickhand">
            Already have an account?
            <a href="/login" class="caveatregular underline font-bold"
                >Sign In</a
            >
        </p>
    </div>
</div>

<style scoped>
    input {
        background-color: transparent;
        box-shadow: none;
    }

    input:focus {
        border-color: unset;
        box-shadow: unset;
    }

    .input-wrapper {
        position: relative;
    }
    .input-wrapper .eye {
        position: absolute;
        top: 50%;
        right: 15px;
    }
</style>
