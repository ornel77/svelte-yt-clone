<script>
	import VideoCard from '$lib/components/VideoCard.svelte';
	export let data;
	const { contents } = data;
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-16">
	{#each contents as { type, video }}
		{#if type == 'video'}
			<VideoCard
				title={video.title}
				videoId={video.videoId}
				channelName={video.author.title}
				views={video?.stats?.views}
				avatar={video.author.avatar[0].url}
				publishedTimeText={video.publishedTimeText}
				thumbnail={video.thumbnails[0].url}
			/>
		{/if}
	{/each}
</div>
