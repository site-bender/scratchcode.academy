import { collapseWhitespace } from "@sitebender/components"
import { TwitterCard } from "@sitebender/components/src/types"
import type { OpenGraphBasic } from "@sitebender/components/src/types/openGraph"
import type { WebPage } from "@sitebender/components/src/types/schema.org"
import getSharedGraphData from "~metadata/webPages/getSharedGraphData"
import getSharedTwitterData from "~metadata/webPages/getSharedTwitterData"
import getSharedWebPageData from "~metadata/webPages/getSharedWebPageData"

const description = collapseWhitespace(`
	At ScratchCode, we want to hear from you. Use the contact form
	on this page to send us your message. If at all possible, we
	will get back to you shortly.
`)

export function getWebPageData(version: string): WebPage {
	return {
		...(getSharedWebPageData(version) as WebPage),
		about: "How to contact the ScratchCode community and founders.",
		abstract: collapseWhitespace(`
			Our web form for contacting the ScratchCode community. We do our best
			to respond to all contacts quickly.
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
		...(getSharedGraphData() as OpenGraphBasic),
		description,
		title: "Contact the ScratchCode community",
	}
}

export function getTwitterCard(): TwitterCard {
	return {
		...(getSharedTwitterData(
			"https://scratchcode.academy/images/craft-code.svg",
			1242,
		) as TwitterCard),
		description,
		title: "Contact the ScratchCode community",
	}
}
