import { collapseWhitespace } from "@sitebender/components"
import { TwitterCard } from "@sitebender/components/src/types"
import type {
	Language,
	WebPage,
} from "@sitebender/components/src/types/schema.org"

import type { OpenGraphBasic } from "@sitebender/components/src/types/openGraph"
import { CraftCodeImage } from "~metadata/images"

const description = collapseWhitespace(`
	ScratchCode is a haven for ScratchCoders in an AI world
	and a methodology for creating bespoke, state-of-the-art,
	sustainable web applications.
`)

export function getWebPageData(version: string): WebPage {
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		about: "The Craft-Code.dev web site and community.",
		abstract: collapseWhitespace(`
			AI brings a new era in web development. We can now create
			commodity web sites and applications with a few keystrokes.
			But this progress may come at the expense of lost skills.
			ScratchCode is an effort to preserve and evolve the essential
			skills of web development and more.
		`),
		dateCreated: "2023-11-01T00:00:00Z",
		description,
		image: CraftCodeImage,
		inLanguage: {
			"@type": "Language",
			alternateName: "en",
			name: "English",
		} as Language,
		isAccessibleForFree: true,
		isFamilyFriendly: true,
		license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
		primaryImageOfPage: CraftCodeImage,
		relatedLink: [
			"https://scratchcode.academy/axioms",
			"https://scratchcode.academy/essays",
			"https://scratchcode.academy/methods",
		],
		schemaVersion: "https://schema.org/docs/releases.html#v22.0.",
		thumbnailUrl: "https://scratchcode.academy/images/craft-code.svg",
		version,
	}
}

export function getOpenGraphData(): OpenGraphBasic {
	return {
		description,
		image: [
			{
				image: "https://scratchcode.academy/images/craft-code.svg",
				alt: "ScratchCode",
				height: 650,
				type: "image/svg",
				width: 650,
			},
		],
		siteName: "Craft-Code.dev",
		title: "ScratchCode: Our media kit",
		type: "website",
	}
}

export function getTwitterCard(): TwitterCard {
	return {
		card: "summary",
		creator: "@CraftCodeDev",
		description,
		image: {
			alt: "ScratchCoder",
			height: 650,
			url: "https://scratchcode.academy/images/craft-code.svg",
			width: 650,
		},
		site: "@CraftCodeDev",
		title: "ScratchCode: Our media kit",
	}
}
