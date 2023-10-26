<script lang="ts">
	export let title: string;
	export let publishedTimeText: string;
	export let views: number;
	export let videoId: string;
	export let thumbnail: string;
	export let channelName: string;
	export let avatar: string;
</script>

<a href="/{videoId}">
	<div class="relative">
		<div
			class="absolute bg-black/80 text-white bottom-1 right-1 text-xs px-1 font-semibold rounded-md"
		>
			10:20
		</div>
		<img
			src={thumbnail}
			alt=""
			class="sm:h-[208px] h-[250px] w-full object-cover rounded-2xl bg-gray-200"
		/>
	</div>
	<div class="flex gap-3 mt-3">
		<img src={avatar} alt="" class="h-9 w-9 rounded-full bg-gray-100" />
		<div class="">
			<h3 class="capitalize font-medium">{title}</h3>
			<p class="text-gray-600 text-sm capitalize mt-1">{channelName}</p>
			<div class="text-gray-600 text-sm">
				<span>{views} views</span>
				<span>{publishedTimeText}</span>
			</div>
		</div>
	</div>
</a>
