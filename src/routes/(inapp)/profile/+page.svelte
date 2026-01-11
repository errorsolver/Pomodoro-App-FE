<script>
  export let data;
  export let form;

  let { user } = data;
  let name = user.name || '';
  let email = user.email || '';
</script>

<div class="max-w-2xl mx-auto p-8">
  <h1 class="text-3xl font-bold mb-6">Profile</h1>

  {#if form?.success}
    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
      Profile berhasil diupdate!
    </div>
  {/if}

  {#if form?.error}
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
      {form.error}
    </div>
  {/if}

  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <form method="POST" action="?/update">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Nama
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          name="name"
          type="text"
          bind:value={name}
          placeholder="Nama lengkap"
        />
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          type="email"
          bind:value={email}
          placeholder="Email"
        />
      </div>

      <div class="flex items-center justify-between gap-4">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Update Profile
        </button>

        <!-- <form method="POST" action="?/logout">
          <button
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Logout
          </button>
        </form> -->
      </div>
    </form>
  </div>

  <div class="bg-gray-100 rounded p-4 mt-6">
    <h2 class="font-bold mb-2">User Info:</h2>
    <pre class="text-sm">{JSON.stringify(user, null, 2)}</pre>
  </div>
</div>
