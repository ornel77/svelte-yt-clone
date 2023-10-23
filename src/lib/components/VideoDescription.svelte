<script lang="ts">
	let showMore = false;
</script>

<div class:h-fit={showMore} class:h-[105px]={!showMore} class="bg-gray-200 mb-5 relative overflow-hidden text-sm rounded-lg hover:bg-gray-300 p-3 group">
	<div class="font-medium mb-2">
		<span>10, 000 views . 20-11-20</span>
	</div>
	<p class="mb-5">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat incidunt, totam unde nostrum
		ipsum doloremque, commodi mollitia sunt voluptatem reiciendis fugiat qui ratione impedit
		voluptas quod consectetur voluptatum, quidem ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus ad ipsa accusamus non cupiditate dicta aut eos sunt voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, veniam optio in doloribus laborum sint fugit veritatis non autem labore itaque fugiat voluptas magnam ab sit repellendus nulla velit? Autem vero beatae consequatur ratione obcaecati, illum praesentium non, nihil sapiente suscipit culpa. Fugiat, nam. Nulla nihil quo dolor hic iste.
	</p>
	<button
		on:click={() => (showMore = !showMore)}
		class="absolute bottom-1 right-1 bg-gray-200 font-medium p-1 capitalize group-hover:bg-gray-300"
		>show {showMore ? 'less' : 'more'}
    </button>
</div>
