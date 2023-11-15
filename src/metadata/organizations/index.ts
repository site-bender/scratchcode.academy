import {
	CharlesMunatImage as Chas,
	HannahPearsonCoatsImage as Hannah,
} from "../images"

export const ScratchCodeOrg = {
	"@context": "https://schema.org",
	"@type": "Organization",
	brand: "ScratchCode",
	contactPoint: {
		email: "coder@scratchcode.academy",
		image: Chas,
		name: "Charles F. Munat",
	},
}

export const JimmyCoOrg = {
	"@context": "https://schema.org",
	"@type": "Organization",
	brand: "Jimmy Consulting",
	contactPoint: {
		email: "hannah@jimmyco.io",
		image: Hannah,
		name: "Hannah Pearson-Coats",
	},
}
