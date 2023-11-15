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
	Answers to frequently-asked questions about Craft Coding.
	We also provide a form by which you may ask your own
	questions. We do our best to reply to all.
`)

export function getWebPageData(version: string): WebPage {
	return {
		...(getSharedWebPageData(version) as WebPage),
		about: "Answers to frequently-asked questions about Craft Coding.",
		abstract: collapseWhitespace(`
			We answer a variety of questions including whether ScratchCoders are nerds,
			why we use a lot of quotations, who is behind all this, and more. Ask your
			own questions with our included form.
		`),
		description,
		relatedLink: [
			"https://scratchcode.academy/axioms",
			"https://scratchcode.academy/essays",
			"https://scratchcode.academy/methods",
		],
	}
}

export function getArticleData(version: string): Article {
	return {
		...(getSharedArticleData({
			grade: "3",
			dateCreated: "2023-11-01T00:00:00.000Z",
		}) as Article),
		about: "Answers to frequently-asked questions about ScratchCode.",
		headline: "Frequently-asked questions about ScratchCode",
		timeRequired: "PT5M26S",
		version,
		wordCount: 1359,
	}
}

export function getOpenGraphData(): OpenGraphBasic {
	return {
		...getSharedGraphData("article"),
		description,
		title: "Frequently-asked questions about ScratchCode",
	}
}

export function getTwitterCard(): TwitterCard {
	return {
		...(getSharedTwitterData(
			"https://scratchcode.academy/images/craft-code.svg",
			1242,
		) as TwitterCard),
		description,
		title: "Frequently-asked questions about ScratchCode",
	}
}
