<script>
	// to run on the client
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
</script>

<!-- if we kept the default action we just put /. The slash mean that the action is in the homepage-->
<!-- this action would run on the server not the client -->
<!-- to add a svete action we type use -->
<form action="/?/search" use:enhance method="POST" class="flex h-[40px] basis-[600px]">
	<input
		type="text"
		class="h-[40px] outline-none border rounded-s-3xl focus:border-blue-600 focus:border-2 px-2 flex-1 border-gray-400"
		class:border-red-500={$page.form?.error}
		placeholder="search"
		name="q"
	/>
	<button
		class="flex items-center justify-center cursor-pointer w-16 bg-slate-50 border rounded-e-3xl"
	>
		<img src="/icons/searchIcon.svg" alt="search icon" />
	</button>
</form>
