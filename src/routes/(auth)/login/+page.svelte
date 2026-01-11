<script lang="ts">
    import SleepingWoman from '$lib/assets/img/SleepingWoman.svg?url';
    import EyeOpen from '$lib/assets/img/EyeOpen.svg?url';
    import EyeClosed from '$lib/assets/img/EyeClosed.svg?url';
    import BtnLogin from '$lib/assets/img/BtnLogin.svg?url';
    import BtnSignInGoogle from '$lib/assets/img/BtnSignInGoogle.svg?url';
    import BtnSignInApple from '$lib/assets/img/BtnSignInApple.svg?url';
    import BtnSignInFacebook from '$lib/assets/img/BtnSignInFacebook.svg?url';
    import { enhance } from '$app/forms';

    export let form;
    
    let isShowPassword = false;
    let isSubmitting = false;
</script>

<div class="flex gap-40 justify-center h-screen items-center">
    <div>
        <img
            src={SleepingWoman}
            alt="Sleeping Woman Illustration"
            width="auto"
            height="auto"
            fetchpriority="high"
        />
    </div>

    <div>
        <h1 class="text-5xl font-bold mb-2">Come back in</h1>
        <p class="patrickhand mb-8">Find your calm again.</p>

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
            <div class="input-wrapper">
                <input
                    id="password"
                    class="w-full"
                    name="password"
                    type={isShowPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    required
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
                                width="auto"
                                height="auto"
                            />
                        {:else}
                            <img
                                src={EyeClosed}
                                alt="Hide Password"
                                width="auto"
                                height="auto"
                            />
                        {/if}
                    </button>
                </span>
            </div>
            <a
                href={void 0}
                class="text-right font-bold text-red-500 mt-1 cursor-not-allowed"
            >
                Forgot Password?
            </a>

            <button type="submit" class="mt-6 mb-2" disabled={isSubmitting}>
                <img
                    src={BtnLogin}
                    class="cursor-pointer"
                    alt="Login Button"
                    width="auto"
                    height="auto"
                />
            </button>
        </form>
        <p class="text-center patrickhand mb-1">
            Don't have an account yet? <a
                href="/register"
                class="caveatregular underline font-bold">Sign Up</a
            >
        </p>
        <p class="patrickhand text-center mb-2">Or</p>
        <div class="flex flex-col gap-4">
            <a href={void 0} class="cursor-not-allowed">
                <img
                    src={BtnSignInGoogle}
                    alt="Login with Google Button"
                    width="auto"
                    height="auto"
                />
            </a>
            <a href={void 0} class="cursor-not-allowed">
                <img
                    src={BtnSignInApple}
                    alt="Login with Apple Button"
                    width="auto"
                    height="auto"
                />
            </a>
            <a href={void 0} class="cursor-not-allowed">
                <img
                    src={BtnSignInFacebook}
                    alt="Login with Facebook Button"
                    width="auto"
                    height="auto"
                />
            </a>
        </div>
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
