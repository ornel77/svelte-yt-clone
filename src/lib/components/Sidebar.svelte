<script lang="ts">
	const nav = [
		{
			icon: 'homeIcon',
			title: 'Home'
		},
		{
			icon: 'shortsIcon',
			title: 'Shorts'
		},
		{
			icon: 'libraryIcon',
			title: 'Library'
		},
		{
			icon: 'subIcon',
			title: 'Subscription'
		}
	];
</script>

<div class="bg-white py-2 hidden md:flex flex flex-col px-1 fixed top-[60px]">
	{#each nav as link}
		<a
			href="/"
			class="flex items-center justify-center flex-col gap-1 py-4 hover:bg-gray-100 rounded-lg"
		>
			<img src={`/icons/${link.icon}.svg`} alt={link.title} />
			<p class="text-xs capitalize">{link.title}</p>
		</a>
	{/each}
</div>
