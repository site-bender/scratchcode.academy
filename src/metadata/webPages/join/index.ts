import { collapseWhitespace } from "@sitebender/components"
import { TwitterCard } from "@sitebender/components/src/types"
import type { OpenGraphBasic } from "@sitebender/components/src/types/openGraph"
import type { WebPage } from "@sitebender/components/src/types/schema.org"
import getSharedGraphData from "~metadata/webPages/getSharedGraphData"
import getSharedTwitterData from "~metadata/webPages/getSharedTwitterData"
import getSharedWebPageData from "~metadata/webPages/getSharedWebPageData"

const description = collapseWhitespace(`
	Join us! The ScratchCode community is an effort to  preserve web development
	skills in the face of AI. We are open to all who want to help the humans.
`)

export function getWebPageData(version: string): WebPage {
	return {
		...(getSharedWebPageData(version) as WebPage),
		about: "Form to join the ScratchCode community and support our efforts.",
		abstract: collapseWhitespace(`
			The ScratchCode community is an effort to bring together like-minded people.
			People who want to preserve coding skills. People who like making elegant,
			hand-crafted web applications. We need people who care about the human side
			of web development and coding. Join us today!
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
		title: "You, too, can be a ScratchCoder!",
	}
}

export function getTwitterCard(): TwitterCard {
	return {
		...(getSharedTwitterData(
			"https://scratchcode.academy/images/craft-code.svg",
			1242,
		) as TwitterCard),
		description,
		site: "@CraftCodeDev",
		title: "You, too, can be a ScratchCoder!",
	}
}
