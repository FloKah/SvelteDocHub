<script>
    import Sidebar from '$lib/components/+Sidebar.svelte';
	export let data;

</script>

<div class="flex h-screen">
    <!-- Sidebar -->
    <Sidebar docs="{data.docs}"/>

    <!-- Main Content -->
    <div class="flex-1 p-4">
        <h1 class="text-2xl font-bold mb-4">Welcome to the Documentation</h1>
        <p class="text-lg">
            Please select a document from the sidebar to view its content.
        </p>
    </div>
</div>