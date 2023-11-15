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
	Terms of use for ScratchCode, a haven for ScratchCoders in an AI world
	and a methodology for creating bespoke, state-of-the-art,
	sustainable web applications.
`)

export function getWebPageData(version: string): WebPage {
	return {
		...(getSharedWebPageData(version) as WebPage),
		about: "The Craft-Code.dev web site and community.",
		abstract: collapseWhitespace(`
			AI brings a new era in web development. We can now create
			commodity web sites and applications with a few keystrokes.
			But this progress may come at the expense of lost skills.
			ScratchCode is an effort to preserve and evolve the essential
			skills of web development and more.
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
			grade: "4",
			dateCreated: "2023-11-01T00:00:00.000Z",
		}) as Article),
		about: "The ScratchCode website terms of use.",
		headline: "Are you a ScratchCoder?",
		timeRequired: "PT1M58S",
		version,
		wordCount: 495,
	}
}

export function getOpenGraphData(): OpenGraphBasic {
	return {
		...getSharedGraphData("article"),
		description,
		title: "ScratchCode: Our terms of use",
	}
}

export function getTwitterCard(): TwitterCard {
	return {
		...(getSharedTwitterData(
			"https://scratchcode.academy/images/craft-code.svg",
			1242,
		) as TwitterCard),
		description,
		title: "ScratchCode: Our terms of use",
	}
}
