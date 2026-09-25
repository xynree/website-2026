<script lang="ts">
	import { onMount } from 'svelte';
	import star from '$lib/art/star.txt?raw';
	import flower from '$lib/art/flower.txt?raw';
	import eye from '$lib/art/eye.txt?raw';
	import hand from '$lib/art/hand.txt?raw';
	import butterfly from '$lib/art/butterfly.txt?raw';
	import { createMorphFrames } from '$lib/morph';
	import { createTimeline } from '$lib/timeline';
	import { embedTitle } from '$lib/title';

	const transitions = createMorphFrames([star, flower, eye, hand, butterfly], 7);
	const title = '☺︎ xinrui chen';
	const subtitle = 'hanging out in seattle, wa';
	const frames = createTimeline(transitions).map((frame: string) =>
		embedTitle(frame, title, subtitle)
	);
	const artColumns = frames[0].split('\n')[0].length;
	const symbols = ["'", '`', '\\', ';', '¨', '°', '¯'];
	const dots = Array.from({ length: 32 }, (_, id) => ({
		id,
		symbolOffset: Math.floor(Math.random() * symbols.length),
		x: 3 + Math.random() * 94,
		y: 3 + Math.random() * 94
	}));
	let frame = $state(0);
	let reducedMotion = $state(false);
	const visibleFrame = $derived(reducedMotion ? 0 : frame);
	const titleParts = $derived(frames[visibleFrame].split(title));
	const subtitleParts = $derived(titleParts[1].split(subtitle));
	const keyframe = $derived(Math.floor(visibleFrame / (frames.length / transitions.length)));

	onMount(() => {
		const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
		let request = 0;
		let lastFrameTime = performance.now();
		const animate = (now: number) => {
			if (now - lastFrameTime >= 80) {
				frame = (frame + 1) % frames.length;
				lastFrameTime = now;
			}
			request = requestAnimationFrame(animate);
		};
		const update = () => {
			cancelAnimationFrame(request);
			reducedMotion = preference.matches;
			lastFrameTime = performance.now();
			if (!reducedMotion) request = requestAnimationFrame(animate);
		};
		update();
		preference.addEventListener('change', update);
		return () => {
			cancelAnimationFrame(request);
			preference.removeEventListener('change', update);
		};
	});
</script>

<main class="page">
	<div class="floating-dots" aria-hidden="true">
		{#each dots as dot (dot.id)}
			<span style:left="{dot.x}%" style:top="{dot.y}%"
				>{symbols[(dot.symbolOffset + keyframe) % symbols.length]}</span
			>
		{/each}
	</div>
	<div class="centerpiece" style:--art-columns={artColumns}>
		<div
			class="art"
			role="img"
			aria-label="ASCII art morphing through a star, flower, eye, hand, and butterfly."
		>
			<pre aria-hidden="true">{titleParts[0]}<span class="art-title">{title}</span
				>{subtitleParts[0]}<span class="art-title">{subtitle}</span>{subtitleParts[1]}</pre>
		</div>
		<nav class="links" aria-label="Links">
			<a href="https://instagram.com/xynree">art</a>
			<span aria-hidden="true">•</span>
			<a href="https://instagram.com/xyncomix">comics</a>
			<span aria-hidden="true">•</span>
			<a href="https://github.com/xynree">web</a>
			<span aria-hidden="true">•</span>
			<a href="mailto:xynree@gmail.com" aria-label="Email xinrui chen" title="Email xinrui chen"
				><span class="envelope" aria-hidden="true">✉</span></a
			>
		</nav>
	</div>
	<h1 class="sr-only">xinrui chen</h1>
	<p class="sr-only">☺︎ hanging out in seattle, wa</p>
</main>
