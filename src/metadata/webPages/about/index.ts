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
	We run the ScratchCode community, founded by Charles Munat,
	as a public service. We do so to promote and preserve
	hand-crafted, bespoke web development.
`)

export function getWebPageData(version: string): WebPage {
	return {
		...(getSharedWebPageData(version) as WebPage),
		about:
			"The purpose and the people behind the Craft-Code.dev web site and community.",
		abstract: collapseWhitespace(`
			ScratchCode is a considered response to commodity coding. We propose
			a third way between overly-complex enterprise systems and AI-generated
			no-code solutions. We champion simple, hand-crafted, state-of-the-art
			code. Vanilla HTML, CSS, and JavaScript. Zero or nearly-zero
			dependencies. Full sustainability, accessibility, and usability.
			Code as craft. We offer the ScratchCode website as an exemplar of our ideals.
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
			grade: "7",
			dateCreated: "2023-11-01T00:00:00.000Z",
		}) as Article),
		about: "The Craft-Code.dev community.",
		headline: "About the ScratchCode community",
		timeRequired: "PT1M16S",
		version,
		wordCount: 318,
	}
}

export function getOpenGraphData(): Partial<OpenGraphBasic> {
	return {
		...getSharedGraphData("article"),
		description,
		title: "About the ScratchCode effort",
	}
}

export function getTwitterCard(): TwitterCard {
	return {
		...(getSharedTwitterData(
			"https://scratchcode.academy/images/craft-code.svg",
			1242,
		) as TwitterCard),
		description,
		title: "About the ScratchCode effort",
	}
}
