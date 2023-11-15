import { TwitterCard } from "@sitebender/components/src/types"

export default function getSharedTwitterData(
	url: string,
	width = 650,
	height = 650,
): Partial<TwitterCard> {
	return {
		card: "summary",
		creator: "@CraftCodeDev",
		image: {
			alt: "ScratchCoder",
			height,
			url,
			width,
		},
		site: "@CraftCodeDev",
	}
}
