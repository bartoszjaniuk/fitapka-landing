/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				background: "#060911",
				layout: "#191a1e",
				text: "#ebeff8",
				primary: "#ADEBB3",
				primaryDarker: "#96D29D",
				primaryLighter: "#C3F2C8",
			},
			fontFamily: {
				"plus-jakarta-sans": "Plus Jakarta Sans",
			},
		},
	},
	plugins: [],
};
