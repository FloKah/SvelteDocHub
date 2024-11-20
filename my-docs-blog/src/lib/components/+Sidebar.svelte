<script>
	export let docs;

</script>

<div class="flex flex-col gap-2 shrink-0 max-w-64 p-4">

    <h1 class="font-bold text-center">YOUR PROJECT</h1>
    <div class="p-4 text-xl font-bold border-b border-gray-500 text-center">Documentation</div>
    <ul class="flex flex-col gap-3 max-h-screen overflow-y-auto">
        {#each docs as doc}
            <li class="flex gap-2 text-sm">
                &#8227;
                <a href="/{doc.title}" class=" hover:underline">{doc.title.replaceAll('-', ' ')}</a>
            </li>
        {/each}
    </ul>
</div>