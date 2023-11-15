import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"
import scratchcodeTheme from "./scratchcode.theme.dark.json"

const ignore = []

// ignore unused exports
export default defineConfig({
	integrations: [
		sitemap({
			canonicalURL: "https://scratchcode.academy/",
			filter: (page) => !ignore.includes(page),
			lastmod: new Date(),
		}),
	],
	markdown: {
		shikiConfig: {
			theme: scratchcodeTheme,
		},
	},
	site: "https://scratchcode.academy/",
})
