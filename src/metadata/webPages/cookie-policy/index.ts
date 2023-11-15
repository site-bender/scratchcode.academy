import { collapseWhitespace } from "@sitebender/components"
import { TwitterCard } from "@sitebender/components/src/types"
import type {
	Article,
	WebPage,
} from "@sitebender/components/src/types/schema.org"

import type { OpenGraphBasic } from "@sitebender/components/src/types/openGraph"
import getSharedArticleData from "~metadata/webPages/getSharedArticleData"
import getSharedGraphData from "~metadata/webPages/getSharedGraphData"
import getSharedTwitterData from "~metadata/webPages/getSharedTwitterData"
import getSharedWebPageData from "~metadata/webPages/getSharedWebPageData"

const description = collapseWhitespace(`
	The ScratchCode site currently does not use cookies. That,
	in a nutshell, is our cookie policy. We will update this
	page before implementing any changes.
`)

export function getWebPageData(version: string): WebPage {
	return {
		...(getSharedWebPageData(version) as WebPage),
		about: "The ScratchCode policy on cookies.",
		abstract: collapseWhitespace(`
			The ScratchCode site currently does not use cookies. That,
			in a nutshell, is our cookie policy. We will update this
			page before implementing any changes.
		`),
		description,
		relatedLink: [
			"https://scratchcode.academy/diversity-policy",
			"https://scratchcode.academy/privacy-policy",
			"https://scratchcode.academy/terms-of-use",
		],
	}
}

export function getArticleData(version: string): Article {
	return {
		...(getSharedArticleData({
			grade: "2",
			dateCreated: "2023-11-01T00:00:00.000Z",
		}) as Article),
		about: "The Craft-Code.dev website cookie policy.",
		headline: "The Craft-Code.dev cookie policy",
		timeRequired: "PT41S",
		version,
		wordCount: 173,
	}
}

export function getOpenGraphData(): OpenGraphBasic {
	return {
		...getSharedGraphData("article"),
		description,
		title: "The ScratchCode site cookie policy",
	}
}

export function getTwitterCard(): TwitterCard {
	return {
		...(getSharedTwitterData(
			"https://scratchcode.academy/images/craft-code.svg",
			1242,
		) as TwitterCard),
		description,
		title: "The ScratchCode site cookie policy",
	}
}
