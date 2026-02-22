export default {
	loader: { load: ["[tex]/html"] },
	tex: {
		packages: { "[+]": ["html"] },
		inlineMath: [
			["$", "$"],
			["\\(", "\\)"],
		],
		displayMath: [
			["$$", "$$"],
			["\\[", "\\]"],
		],
	},
};
