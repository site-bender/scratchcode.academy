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
	The ScratchCode site and community values compassionate, empathetic,
	adult behavior. We value open, honest, and sincere communication
	and collaboration.
`)

export function getWebPageData(version: string): WebPage {
	return {
		...(getSharedWebPageData(version) as WebPage),
		about: "The ScratchCode policy on diversity and social behavior.",
		abstract: collapseWhitespace(`
			The ScratchCode site and community values compassionate, empathetic,
			adult behavior. We value open, honest, and sincere communication and
			collaboration. We expect every participant to behave in a polite,
			friendly, and humble manner. We will invite those who persist with
			anti-social behavior to leave.
		`),
		description,
		relatedLink: [
			"https://scratchcode.academy/cookie-policy",
			"https://scratchcode.academy/privacy-policy",
			"https://scratchcode.academy/terms-of-use",
		],
	}
}

export function getArticleData(version: string): Article {
	return {
		...(getSharedArticleData({
			grade: "3",
			dateCreated: "2023-11-01T00:00:00.000Z",
		}) as Article),
		about: "The Craft-Code.dev website diversity policy.",
		headline: "The Craft-Code.dev diversity policy",
		timeRequired: "PT1M39S",
		version,
		wordCount: 416,
	}
}

export function getOpenGraphData(): OpenGraphBasic {
	return {
		...getSharedGraphData("article"),
		description,
		title: "The ScratchCode site diversity policy",
	}
}

export function getTwitterCard(): TwitterCard {
	return {
		...(getSharedTwitterData(
			"https://scratchcode.academy/images/craft-code.svg",
			1242,
		) as TwitterCard),
		description,
		title: "The ScratchCode site diversity policy",
	}
}
