<script lang="ts">
	import Map from '../components/Map.svelte';
	import PopoverCard from '../components/PopoverCard.svelte';
	import { selectedProvince } from '../stores';

	let selectedProvinceValue: string | null;

	selectedProvince.subscribe((value) => {
		selectedProvinceValue = value;
	});

	$: isInfoPopoverOpen = selectedProvinceValue !== null;
</script>

<!-- <svelte:component this={SVG} /> -->
<main class="bg-blue-200 h-[100svh] relative">
	<h1>Open Alcohol Map (Work in progress)</h1>
	<Map />
	{#if isInfoPopoverOpen}
		<PopoverCard />
	{/if}
</main>
