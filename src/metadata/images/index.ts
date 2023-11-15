import {
	ImageObject,
	Person,
	QuantitativeValue,
} from "@sitebender/components/src/types/schema.org"
import { ACQUIRE_LICENSE_PAGE, DEFAULT_LICENSE } from "../../constants"

const chas: Person = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Charles F. Munat",
}

const hannah: Person = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Hannah Pearson-Coats",
}

const sharedData: Partial<ImageObject> = {
	"@context": "https://schema.org",
	"@type": "ImageObject",
	acquireLicensePage: ACQUIRE_LICENSE_PAGE,
	copyrightNotice: "Copyright 2023 by Charles F. Munat",
	copyrightYear: "2023",
	creator: chas,
	creditText: "Image by Charles F. Munat",
	dateCreated: "2023-11-01T00:00:00Z",
	dateModified: "2023-11-01T00:00:00Z",
	datePublished: "2023-11-01T00:00:00Z",
	encodingFormat: "image/svg",
	height: {
		"@type": "QuantitativeValue",
		unitCode: "E37",
		value: 650,
	} as QuantitativeValue,
	license: DEFAULT_LICENSE,
	width: {
		"@type": "QuantitativeValue",
		unitCode: "E37",
		value: 650,
	} as QuantitativeValue,
}

export const BespokeIsBetterImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "ScratchCode: Bespoke is better",
	contentSize: "1 KB",
	contentUrl: "https://scratchcode.academy/images/iconic/bespoke-is-better.svg",
	name: "Bespoke is better",
	thumbnailUrl:
		"https://scratchcode.academy/images/iconic/bespoke-is-better.svg",
	url: "https://scratchcode.academy/images/iconic/bespoke-is-better.svg",
}

export const CharlesMunatImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Charles F. Munat",
	contentSize: "2 MB",
	contentUrl: "https://scratchcode.academy/images/charles.png",
	copyrightNotice: "Copyright 2023 by Hannah Pearson-Coats",
	creator: hannah,
	creditText: "Image by Hannah Pearson-Coats",
	description: "A drawing of Charles F. Munat",
	encodingFormat: "image/png",
	height: {
		"@type": "QuantitativeValue",
		unitCode: "E37",
		value: 2543,
	} as QuantitativeValue,
	name: "Charles F. Munat image",
	thumbnailUrl: "https://scratchcode.academy/images/charles-thumbnail.png",
	url: "https://scratchcode.academy/images/charles.png",
	width: {
		"@type": "QuantitativeValue",
		unitCode: "E37",
		value: 2950,
	} as QuantitativeValue,
}

export const CodeImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Code",
	contentSize: "580 B",
	contentUrl: "https://scratchcode.academy/images/iconic/code.svg",
	name: "Code",
	thumbnailUrl: "https://scratchcode.academy/images/iconic/code.svg",
	url: "https://scratchcode.academy/images/iconic/code.svg",
}

export const CodeJustInTimeImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Code just in time",
	contentSize: "614 B",
	contentUrl: "https://scratchcode.academy/images/iconic/code-just-in-time.svg",
	name: "Code just in time",
	thumbnailUrl:
		"https://scratchcode.academy/images/iconic/code-just-in-time.svg",
	url: "https://scratchcode.academy/images/iconic/code-just-in-time.svg",
}

export const ConfigurationIsTediousImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "ScratchCode: Configuration is tedious",
	contentSize: "844 B",
	contentUrl:
		"https://scratchcode.academy/images/iconic/configuration-is-tedious.svg",
	name: "Configuration is tedious",
	thumbnailUrl:
		"https://scratchcode.academy/images/iconic/configuration-is-tedious.svg",
	url: "https://scratchcode.academy/images/iconic/configuration-is-tedious.svg",
}

export const ConnectionImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Connection",
	contentSize: "727 B",
	contentUrl: "https://scratchcode.academy/images/iconic/connection.svg",
	name: "Connection",
	thumbnailUrl: "https://scratchcode.academy/images/iconic/connection.svg",
	url: "https://scratchcode.academy/images/iconic/connection.svg",
}

export const ContextImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Context",
	contentSize: "648 B",
	contentUrl: "https://scratchcode.academy/images/iconic/context.svg",
	name: "Context",
	thumbnailUrl: "https://scratchcode.academy/images/iconic/context.svg",
	url: "https://scratchcode.academy/images/iconic/context.svg",
}

export const CraftCodeImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "ScratchCode",
	contentSize: "687 B",
	contentUrl: "https://scratchcode.academy/images/craft-code.svg",
	name: "ScratchCode",
	thumbnailUrl: "https://scratchcode.academy/images/craft-code.svg",
	url: "https://scratchcode.academy/images/craft-code.svg",
	width: {
		"@type": "QuantitativeValue",
		unitCode: "E37",
		value: 1242,
	} as QuantitativeValue,
}

export const CraftIsItsOwnRewardImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "ScratchCode: Craft is its own reward",
	contentSize: "780 B",
	contentUrl:
		"https://scratchcode.academy/images/iconic/craft-is-its-own-reward.svg",
	name: "Craft is its own reward",
	thumbnailUrl:
		"https://scratchcode.academy/images/iconic/craft-is-its-own-reward.svg",
	url: "https://scratchcode.academy/images/iconic/craft-is-its-own-reward.svg",
}

export const CritiqueImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Critique",
	contentSize: "695 B",
	contentUrl: "https://scratchcode.academy/images/iconic/critique.svg",
	name: "Critique",
	thumbnailUrl: "https://scratchcode.academy/images/iconic/critique.svg",
	url: "https://scratchcode.academy/images/iconic/critique.svg",
}

export const DoItRightTheFirstTimeImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Do it right the first time",
	contentSize: "504 B",
	contentUrl:
		"https://scratchcode.academy/images/iconic/do-it-right-the-first-time.svg",
	name: "Do it right the first time",
	thumbnailUrl:
		"https://scratchcode.academy/images/iconic/do-it-right-the-first-time.svg",
	url: "https://scratchcode.academy/images/iconic/do-it-right-the-first-time.svg",
}

export const HannahPearsonCoatsImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Hannah Pearson-Coats",
	contentSize: "999 KB",
	contentUrl: "https://scratchcode.academy/images/charles.png",
	copyrightNotice: "Copyright 2023 by Hannah Pearson-Coats",
	creator: hannah,
	creditText: "Image by Hannah Pearson-Coats",
	description: "A drawing of Hannah Pearson-Coats",
	encodingFormat: "image/png",
	height: {
		"@type": "QuantitativeValue",
		unitCode: "E37",
		value: 1701,
	} as QuantitativeValue,
	name: "Hannah Pearson-Coats image",
	thumbnailUrl: "https://scratchcode.academy/images/hannah-thumbnail.png",
	url: "https://scratchcode.academy/images/charles.png",
	width: {
		"@type": "QuantitativeValue",
		unitCode: "E37",
		value: 1701,
	} as QuantitativeValue,
}

export const KeepItSimpleImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Keep it simple",
	contentSize: "441 B",
	contentUrl: "https://scratchcode.academy/images/iconic/keep-it-simple.svg",
	name: "Keep it simple",
	thumbnailUrl: "https://scratchcode.academy/images/iconic/keep-it-simple.svg",
	url: "https://scratchcode.academy/images/iconic/keep-it-simple.svg",
}

export const LessIsMoreImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "ScratchCode: Less is more",
	contentSize: "829 B",
	contentUrl: "https://scratchcode.academy/images/iconic/less-is-more.svg",
	name: "Less is more",
	thumbnailUrl: "https://scratchcode.academy/images/iconic/less-is-more.svg",
	url: "https://scratchcode.academy/images/iconic/less-is-more.svg",
}

export const MakeIntentionsClearImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Make intentions clear",
	contentSize: "605 B",
	contentUrl:
		"https://scratchcode.academy/images/iconic/make-intentions-clear.svg",
	name: "Make intentions clear",
	thumbnailUrl:
		"https://scratchcode.academy/images/iconic/make-intentions-clear.svg",
	url: "https://scratchcode.academy/images/iconic/make-intentions-clear.svg",
}

export const MakeItSustainableImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Make it sustainable",
	contentSize: "702 B",
	contentUrl:
		"https://scratchcode.academy/images/iconic/make-it-sustainable.svg",
	name: "Make it sustainable",
	thumbnailUrl:
		"https://scratchcode.academy/images/iconic/make-it-sustainable.svg",
	url: "https://scratchcode.academy/images/iconic/make-it-sustainable.svg",
}

export const MinimizeCognitiveFootprintImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Minimize cognitive footprint",
	contentSize: "614 B",
	contentUrl:
		"https://scratchcode.academy/images/iconic/minimize-cognitive-footprint.svg",
	name: "Minimize cognitive footprint",
	thumbnailUrl:
		"https://scratchcode.academy/images/iconic/minimize-cognitive-footprint.svg",
	url: "https://scratchcode.academy/images/iconic/minimize-cognitive-footprint.svg",
}

export const PlanProperlyImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Plan properly",
	contentSize: "770 B",
	contentUrl: "https://scratchcode.academy/images/iconic/plan-properly.svg",
	name: "Plan properly",
	thumbnailUrl: "https://scratchcode.academy/images/iconic/plan-properly.svg",
	url: "https://scratchcode.academy/images/iconic/plan-properly.svg",
}

export const QuadAxiomsImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "ScratchCode Axioms",
	contentSize: "3 KB",
	contentUrl: "https://scratchcode.academy/images/iconic/quad-axioms.svg",
	name: "ScratchCode Axioms",
	thumbnailUrl: "https://scratchcode.academy/images/iconic/quad-axioms.svg",
	url: "https://scratchcode.academy/images/iconic/quad-axioms.svg",
}

export const QuadEssaysImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "ScratchCode Essays",
	contentSize: "1 KB",
	contentUrl: "https://scratchcode.academy/images/iconic/quad-essays.svg",
	name: "ScratchCode Essays",
	thumbnailUrl: "https://scratchcode.academy/images/iconic/quad-essays.svg",
	url: "https://scratchcode.academy/images/iconic/quad-essays.svg",
}

export const QuadMethodsImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "ScratchCode Methods",
	contentSize: "2 KB",
	contentUrl: "https://scratchcode.academy/images/iconic/quad-methods.svg",
	name: "ScratchCode Methods",
	thumbnailUrl: "https://scratchcode.academy/images/iconic/quad-methods.svg",
	url: "https://scratchcode.academy/images/iconic/quad-methods.svg",
}

export const TaiJiTuImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Taijitu (太極圖)",
	contentSize: "2 KB",
	contentUrl: "https://scratchcode.academy/images/iconic/tai-ji-tu.svg",
	name: "Taijitu (太極圖)",
	thumbnailUrl: "https://scratchcode.academy/images/iconic/tai-ji-tu.svg",
	url: "https://scratchcode.academy/images/iconic/tai-ji-tu.svg",
}

export const UseTheLeastPowerImage: ImageObject = {
	...(sharedData as ImageObject),
	caption: "Use the least power",
	contentSize: "789 B",
	contentUrl:
		"https://scratchcode.academy/images/iconic/use-the-least-power.svg",
	name: "Use the least power",
	thumbnailUrl:
		"https://scratchcode.academy/images/iconic/use-the-least-power.svg",
	url: "https://scratchcode.academy/images/iconic/use-the-least-power.svg",
}
