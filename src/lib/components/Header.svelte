<script>
	import SearchBar from './SearchBar.svelte';
</script>

<header
	class="flex px-4 items-center h-[64px] py-2 border bg-white z-10 justify-between sticky top-0 left-0"
>
	<a href="/" class="md:hidden mr-5">
		<img src="/icons/ytLogo.svg" alt="youtube logo"  />
	</a>

	<div class="md:flex hidden gap-4 items-center">
		<img
			src="/icons/bugerIcon.svg"
			alt="menu icon"
			class="p-3 rounded-full hover:bg-gray-200 cursor-pointer"
		/>
		<a href="/">
			<img src="/icons/ytLogo.svg" alt="youtube logo" />
		</a>
	</div>

	<SearchBar />

	<div class="md:flex hidden items-center gap-3">
		<img
			src="/icons/createIcon.svg"
			alt="createicon"
			class="p-3 rounded-full hover:bg-gray-200 cursor-pointer"
		/>
		<img
			src="/icons/notIcon.svg"
			alt="noticon"
			class="p-3 rounded-full hover:bg-gray-200 cursor-pointer"
		/>
		<img src="/avatar.png" alt="avatar" class="bg-gray-200 rounded-full cursor-pointer h-8 w-8" />
	</div>
</header>
