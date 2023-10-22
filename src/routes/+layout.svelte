<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.css';
</script>

<Header />
<div class="flex">
	<Sidebar />
	<main class="ml-[74px] p-6 flex-1">
		<slot />
	</main>
</div>
