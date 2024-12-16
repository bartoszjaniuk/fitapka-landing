/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				background: "#191A1E",
				text: "#ebeff8",
				primary: "#BFFF41",
			},
		},
	},
	plugins: [],
};
