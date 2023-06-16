<script lang="ts">
	import Map from '../components/Map.svelte';
	import { selectedProvince } from '../stores';

	let selectedProvinceValue: string | null;

	selectedProvince.subscribe((value) => {
		selectedProvinceValue = value;
	});

</script>

<!-- <svelte:component this={SVG} /> -->
<main class="bg-blue-200 h-[100svh]">
	<h1>Open Alcohol Map (Work in progress)</h1>
	<div>Selected province: {selectedProvinceValue ?? '-'}</div>
	<Map />
</main>
