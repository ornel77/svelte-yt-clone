<script>
	// @ts-nocheck

	// Component
	import ChannelCard from '$lib/components/ChannelCard.svelte';
	import SearchVideoCard from '$lib/components/SearchVideoCard.svelte';

	// ShadCn
	import * as Dialog from '$lib/components/ui/dialog';

	// Props
	export let data;

	const handleFilterClick = () => {
		const searchParams = '';
	};
</script>

<Dialog.Root>
	<div class="flex justify-end my-2">
		<Dialog.Trigger class="font-medium border px-4 py-1 rounded-full hover:bg-gray-200"
			>Filter</Dialog.Trigger
		>
	</div>
</Dialog.Root>

<Dialog.Content class="max-w-[700px] w-full backdrop-blur-0 bg-white">
	<div class="flex gap-5">
		{#each data.contents.filterGroups as filterGroup}
			<div class="w-full">
				<h1 class="font-medium text-xs uppercase py-5 border-b">{filterGroup.title}</h1>
				<div class="mt-5 space-y-5 flex flex-col">
					{#each filterGroup.filters as filter}
						<button on:click={handleFilterClick}>
							{filter.label}
						</button>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</Dialog.Content>

<div class="space-y-5">
	{#each data.contents.contents as { type, channel, video }}
		{#if type == 'video'}
			<SearchVideoCard
				title={video.title}
				videoId={video.videoId}
				channelName={video.author.title}
				views={video.stats.views}
				avatar={video.author.avatar[0].url}
				publishedTimeText={video.publishedTimeText}
				thumbnail={video.thumbnails[0].url}
				badges={video.badges}
				descriptionSnippet={video.descriptionSnippet}
			/>
		{:else if type == 'channel'}
			<ChannelCard
				avatar={channel.avatar[0].url}
				descriptionSnippet={channel.descriptionSnippet}
				subscribers={channel.stats.subscribersText}
				title={channel.title}
				userName={channel.username}
			/>
		{/if}
	{/each}
</div>
