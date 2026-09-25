/** @param {string} frame */
function pose(frame, variant = 0) {
	const original = frame.split('\n').map((line) => [...line]);
	const grid = original.map((row) => [...row]);
	if (variant !== 0) {
		// Exchange a few neighboring shading marks, leaving the silhouette anchored.
		/** @type {{x: number, y: number, dx: number, dy: number, rank: number}[]} */
		const candidates = [];
		grid.forEach((row, y) =>
			row.forEach((char, x) => {
				if (!'.:#@'.includes(char)) return;
				for (const [dx, dy] of [
					[1, 0],
					[0, 1]
				]) {
					const neighbor = grid[y + dy]?.[x + dx];
					if (neighbor && '.:#@'.includes(neighbor) && neighbor !== char) {
						candidates.push({
							x,
							y,
							dx,
							dy,
							rank:
								(((x + 1) * 73856093) ^
									((y + 1) * 19349663) ^
									(variant * 83492791) ^
									(dy * 2971215073)) >>>
								0
						});
					}
				}
			})
		);
		candidates.sort((a, b) => a.rank - b.rank);
		const touched = new Set();
		const inkCount = frame.replace(/\s/g, '').length;
		const maxSwaps = Math.max(1, Math.floor(inkCount * 0.025));
		let swaps = 0;
		for (const { x, y, dx, dy } of candidates) {
			const from = `${x},${y}`;
			const to = `${x + dx},${y + dy}`;
			if (touched.has(from) || touched.has(to)) continue;
			[grid[y][x], grid[y + dy][x + dx]] = [grid[y + dy][x + dx], grid[y][x]];
			touched.add(from);
			touched.add(to);
			if (++swaps >= maxSwaps) break;
		}

		// Animate edges and scattered interior texture without changing occupied cells.
		const light = ".,:;'`";
		const medium = ':;*+=~';
		const dark = '#@%&';
		original.forEach((row, y) =>
			row.forEach((char, x) => {
				if (char === ' ') return;
				const boundary = [
					[-1, 0],
					[1, 0],
					[0, -1],
					[0, 1]
				].some(([dx, dy]) => !original[y + dy]?.[x + dx] || original[y + dy][x + dx] === ' ');
				// Stable pseudo-random scatter avoids stripes and stays repeatable per pose.
				let seed =
					Math.imul(x + 1, 374761393) ^
					Math.imul(y + 1, 668265263) ^
					Math.imul(variant, 1442695041);
				seed = Math.imul(seed ^ (seed >>> 13), 1274126177);
				seed = (seed ^ (seed >>> 16)) >>> 0;
				if (seed % 100 >= (boundary ? 60 : 35)) return;
				const palette = dark.includes(char) ? dark : medium.includes(char) ? medium : light;
				const alternatives = [...palette].filter((symbol) => symbol !== char);
				grid[y][x] = alternatives[(seed + variant) % alternatives.length];
			})
		);
	}
	return grid.map((row) => ` ${row.join('')} `).join('\n');
}

/** @param {string[][]} transitions */
export function createTimeline(transitions) {
	return transitions.flatMap((transition) => [
		// Three localized shading variants, each held for three animation ticks.
		...[0, 1, 2].flatMap((variant) => Array(3).fill(pose(transition[0], variant))),
		// Exclude both endpoints: the next keyframe supplies the destination.
		...transition.slice(1, -1).map((frame) => pose(frame))
	]);
}
