// Reserve fixed character cells for both lines without changing the ASCII grid.
/** @param {string} frame */
export function embedTitle(frame, title = 'xinrui chen', subtitle = 'hanging out in seattle, wa') {
	const rows = frame.split('\n');
	const y = Math.floor(rows.length / 2);
	const lines = [title, '', subtitle];
	lines.forEach((line, index) => {
		const text = ` ${line} `;
		// The text-presentation selector on the smiley does not occupy a cell.
		const cells = [...text.replace(/\uFE0E/g, '')].length;
		const row = y + index;
		const x = Math.max(
			0,
			Math.min(rows[row].length - cells, Math.floor((rows[row].length - cells) / 2))
		);
		rows[row] = rows[row].slice(0, x) + text + rows[row].slice(x + cells);
	});
	return rows.join('\n');
}
