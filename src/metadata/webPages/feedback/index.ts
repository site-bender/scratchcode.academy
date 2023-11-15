import { collapseWhitespace } from "@sitebender/components"
import { TwitterCard } from "@sitebender/components/src/types"
import type { OpenGraphBasic } from "@sitebender/components/src/types/openGraph"
import type { WebPage } from "@sitebender/components/src/types/schema.org"
import getSharedGraphData from "~metadata/webPages/getSharedGraphData"
import getSharedTwitterData from "~metadata/webPages/getSharedTwitterData"
import getSharedWebPageData from "~metadata/webPages/getSharedWebPageData"
import { CHARS } from "../../../constants"

const description = collapseWhitespace(`
	The ScratchCode community and website feedback form. Report bugs
	(please!), make suggestions, correct mistakes, and more. We also
	accept compliments.
`)

export function getWebPageData(version: string): WebPage {
	return {
		...(getSharedWebPageData(version) as WebPage),
		about:
			"The ScratchCode community feedback form. Report bugs, make suggestions, and more.",
		abstract: collapseWhitespace(`
			Here we provide a form for giving feedback to the ScratchCode
			community and the founders and site developers. Report bugs
			(please!), make suggestions, correct our mistakes, and more.
			You can even compliment us. We won${CHARS.apostrophe}t mind.
		`),
		description,
		relatedLink: [
			"https://scratchcode.academy/axioms",
			"https://scratchcode.academy/essays",
			"https://scratchcode.academy/methods",
		],
	}
}

export function getOpenGraphData(): OpenGraphBasic {
	return {
		...getSharedGraphData(),
		description,
		title: "Give feedback to the ScratchCode site.",
	}
}

export function getTwitterCard(): TwitterCard {
	return {
		...(getSharedTwitterData(
			"https://scratchcode.academy/images/craft-code.svg",
			1242,
		) as TwitterCard),
		description,
		title: "Give feedback to the ScratchCode site.",
	}
}
