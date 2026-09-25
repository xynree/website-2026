// All drawings share one character grid, so the page never shifts between frames.
/** @param {string[]} drawings */
export function createMorphFrames(drawings, steps = 7) {
	const lines = drawings.map((art) => art.trimEnd().split('\n'));
	const width = Math.max(...lines.flat().map((line) => line.length));
	const height = Math.max(...lines.map((drawing) => drawing.length));
	const shapes = lines.map((drawing) => {
		const drawingWidth = Math.max(...drawing.map((line) => line.length));
		const offsetX = Math.floor((width - drawingWidth) / 2);
		const offsetY = Math.floor((height - drawing.length) / 2);
		return drawing.flatMap((line, y) =>
			[...line].flatMap((char, x) =>
				char === ' ' ? [] : [{ x: x + offsetX, y: y + offsetY, char }]
			)
		);
	});

	/** @param {{x: number, y: number, char: string}[]} points */
	const render = (points) => {
		const grid = Array.from({ length: height }, () => Array(width).fill(' '));
		points.forEach(({ x, y, char }) => {
			grid[y][x] = char;
		});
		return grid.map((row) => row.join('')).join('\n');
	};
	/** @param {{x: number, y: number}} a @param {{x: number, y: number}} b */
	const distance = (a, b) => (a.x - b.x) ** 2 + ((a.y - b.y) * 2) ** 2;
	/** @param {{x: number, y: number, char: string}} point @param {{x: number, y: number, char: string}[]} candidates */
	const nearest = (point, candidates) =>
		candidates.reduce((best, candidate) =>
			distance(point, candidate) < distance(point, best) ? candidate : best
		);

	return shapes.map((source, index) => {
		const target = shapes[(index + 1) % shapes.length];
		// Match nearby ink first. Extra characters split from or merge into nearby ink.
		const candidates = source
			.flatMap((a, i) =>
				target.map((b, j) => ({
					i,
					j,
					distance: distance(a, b)
				}))
			)
			.sort((a, b) => a.distance - b.distance);
		const usedSource = new Set();
		const usedTarget = new Set();
		/** @type {[{x: number, y: number, char: string}, {x: number, y: number, char: string}][]} */
		const pairs = [];
		for (const { i, j } of candidates) {
			if (usedSource.has(i) || usedTarget.has(j)) continue;
			usedSource.add(i);
			usedTarget.add(j);
			pairs.push([source[i], target[j]]);
		}
		source.forEach((point, i) => {
			if (!usedSource.has(i)) pairs.push([point, nearest(point, target)]);
		});
		target.forEach((point, j) => {
			if (!usedTarget.has(j)) pairs.push([nearest(point, source), point]);
		});

		return Array.from({ length: steps + 1 }, (_, frame) => {
			if (frame === 0) return render(source);
			if (frame === steps) return render(target);
			const progress = frame / steps;
			// Cubic ease-in builds anticipation, then snaps into the next silhouette.
			// Keep the easing in character positions, never opacity or frame duration.
			const movement = progress ** 3;
			return render(
				pairs.map(([a, b], index) => ({
					x: Math.round(a.x + (b.x - a.x) * movement),
					y: Math.round(a.y + (b.y - a.y) * movement),
					// Spread glyph changes across the transition instead of flipping all
					// shading marks simultaneously at its midpoint.
					char: progress < 0.2 + (((index * 37) % 101) / 101) * 0.6 ? a.char : b.char
				}))
			);
		});
	});
}
