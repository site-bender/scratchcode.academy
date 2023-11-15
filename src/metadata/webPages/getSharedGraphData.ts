import {
	OpenGraphBasic,
	OpenGraphTypes,
} from "@sitebender/components/src/types/openGraph"

export default function getSharedGraphData(
	type = "website" as OpenGraphTypes,
	image = "https://scratchcode.academy/images/craft-code.svg",
	alt = "ScratchCode",
	width = 1242,
	height = 650,
): Partial<OpenGraphBasic> {
	return {
		image: [
			{
				image,
				alt,
				height,
				type: "image/svg",
				width,
			},
		],
		siteName: "Craft-Code.dev",
		type,
	}
}
