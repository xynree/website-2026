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
	let borderColumns = $state(0);
	let borderRows = $state(0);
	let borderSeed = $state(0);
	const visibleFrame = $derived(reducedMotion ? 0 : frame);
	const keyframe = $derived(Math.floor(visibleFrame / (frames.length / transitions.length)));
	const borderSymbols = ['#', '@', '$', '%', '&', 'X'];
	const cornerSymbols = ['▒', '░'];
	const borderChar = (position: number, side: number, layer: number, seed: number) => {
		let value = Math.imul(position + 1, 374761393) ^ Math.imul(side + 1, 668265263);
		value ^= Math.imul(layer + 1, 1442695041) ^ seed;
		value = Math.imul(value ^ (value >>> 13), 1274126177);
		const symbols = side < 4 ? borderSymbols : cornerSymbols;
		return symbols[((value ^ (value >>> 16)) >>> 0) % symbols.length];
	};
	const horizontalBorder = (side: number) =>
		[0, 1]
			.map((layer) =>
				Array.from({ length: borderColumns }, (_, position) =>
					borderChar(position, side, layer, borderSeed)
				).join('')
			)
			.join('\n');
	const verticalBorder = (side: number) =>
		Array.from({ length: borderRows }, (_, position) =>
			[0, 1, 2].map((layer) => borderChar(position, side, layer, borderSeed)).join('')
		).join('\n');
	const cornerBorder = (side: number) =>
		[0, 1]
			.map((row) => [0, 1, 2].map((column) => borderChar(column, side, row, borderSeed)).join(''))
			.join('\n');
	const titleParts = $derived(frames[visibleFrame].split(title));
	const subtitleParts = $derived(titleParts[1].split(subtitle));

	onMount(() => {
		const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
		borderSeed = Math.floor(Math.random() * 0x100000000);
		const updateBorderSize = () => {
			const fontSize = Math.min(13.5, Math.max(10, window.innerWidth * 0.0195));
			borderColumns = Math.ceil(window.innerWidth / (fontSize * 0.6));
			borderRows = Math.ceil(window.innerHeight / (fontSize * 1.25));
		};
		updateBorderSize();
		window.addEventListener('resize', updateBorderSize);
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
			window.removeEventListener('resize', updateBorderSize);
		};
	});
</script>

<main class="page">
	<div class="ascii-border" aria-hidden="true">
		<pre class="border-top">{horizontalBorder(0)}</pre>
		<pre class="border-bottom">{horizontalBorder(1)}</pre>
		<pre class="border-left">{verticalBorder(2)}</pre>
		<pre class="border-right">{verticalBorder(3)}</pre>
		<pre class="border-corner corner-top-left">{cornerBorder(4)}</pre>
		<pre class="border-corner corner-top-right">{cornerBorder(5)}</pre>
		<pre class="border-corner corner-bottom-left">{cornerBorder(6)}</pre>
		<pre class="border-corner corner-bottom-right">{cornerBorder(7)}</pre>
	</div>
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
