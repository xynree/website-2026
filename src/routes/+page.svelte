<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.to('.box', { x: 180, duration: 1, repeat: -1, yoyo: true });
	});
</script>

<h2>xinrui chen</h2>
<div class="box" />

<style>
	.box {
		width: 20px;
		height: 20px;
		background-color: rgb(148, 148, 195);
	}
</style>
