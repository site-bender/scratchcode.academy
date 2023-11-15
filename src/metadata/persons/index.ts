import {
	CharlesMunatImage as Chas,
	HannahPearsonCoatsImage as Hannah,
} from "../images"
import { JimmyCoOrg, ScratchCodeOrg } from "../organizations"

export const CharlesMunat = {
	"@context": "https://schema.org",
	"@type": "Person",
	affiliation: ScratchCodeOrg,
	email: "mailto:coder@scratchcode.academy",
	familyName: "Munat",
	givenName: "Charles",
	image: Chas,
	jobTitle: "Founder and lead developer",
	memberOf: ScratchCodeOrg,
	name: "Charles F. Munat",
	url: "https://scratchcode.academy/about",
}

export const HannahPearsonCoats = {
	"@context": "https://schema.org",
	"@type": "Person",
	affiliation: JimmyCoOrg,
	email: "mailto:hannah@jimmyco.io",
	familyName: "Hannah",
	givenName: "Pearson-Coats",
	image: Hannah,
	jobTitle: "Founder and business analyst",
	memberOf: JimmyCoOrg,
	name: "Hannah Pearson-Coats",
	url: "https://scratchcode.academy/about",
}
