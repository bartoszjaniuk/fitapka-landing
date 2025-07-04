// @ts-check
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	adapter: netlify(),

	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
	],
	output: "server",
});
