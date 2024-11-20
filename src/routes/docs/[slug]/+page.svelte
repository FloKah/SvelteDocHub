<script>
	import Sidebar from '$lib/components/+Sidebar.svelte';
	export let data;
    $: doc = data.doc;
	$: sidebarDocs = data.docs
</script>

<div class="flex gap-8 max-w-screen-xl">

    <Sidebar docs="{sidebarDocs}"/>

    <div class="">

        <div class="flex items-center py-4 border-b border-gray-400">
            <div>
                /docs
            </div>
            <div>
                /
            </div>
            <div class="flex gap-4">
                <a href="/docs/{doc.title}">{doc.title}.md</a>
            </div>
        </div>

        <div class="prose max-w-screen-xl py-10">{@html doc.content}</div>
    </div>
</div>