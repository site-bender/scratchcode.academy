import { collapseWhitespace } from "@sitebender/components"
import type {
	DefinedTerm,
	EducationalAudience,
	Language,
	Organization,
	Person,
	WebSite,
} from "@sitebender/components/src/types/schema.org"
import { ACQUIRE_LICENSE_PAGE } from "../../constants"
import { ScratchCodeOrg } from "../organizations"
import { CharlesMunat } from "../persons"

export default function getWebSiteData(version: string): WebSite {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		about: "ScratchCode: learn bespoke web development from scratch.",
		abstract: collapseWhitespace(`
			ScratchCode Academy is an effort to help people learn state-of-the-art,
			bespoke web development skills from scratch. We use a just-in-time learning
			approach following the Munat Methodologies as published by the Paperhat
			Institute.
		`),
		accountablePerson: CharlesMunat as Person,
		acquireLicensePage: ACQUIRE_LICENSE_PAGE,
		alternativeHeadline: "ScratchCode Academy",
		audience: {
			"@type": "EducationalAudience",
			description:
				"Anyone interested in learning bespoke web development skill quickly and easily.",
			educationalRole: "student",
			name: "Learners, Developers, Teachers",
		} as EducationalAudience,
		copyrightHolder: ScratchCodeOrg as Organization,
		creator: CharlesMunat as Person,
		dateCreated: "2023-12-01T00:00:00Z",
		description: collapseWhitespace(`
			ScratchCode is a site that teaches state-of-the-art, bespoke web development skills
			from scratch using the modern just-in-time learning Munat Methodology.
		`),
		editor: CharlesMunat as Person,
		educationalLevel: {
			"@type": "DefinedTerm",
			inDefinedTermSet: "US Grade Levels",
			name: "LifeLongLearning",
			url: "http://elastic1.asn.desire2learn.com/asn/scheme/ASNEducationLevel/LifeLongLearning",
		} as DefinedTerm,
		genre: "https://vocab.getty.edu/aat/300379489",
		inLanguage: {
			"@type": "Language",
			alternateName: "en",
			name: "English",
		} as Language,
		interactivityType: "expositive",
		isAccessibleForFree: true,
		isFamilyFriendly: true,
		keywords: [
			"just-in-time coding",
			"just-in-time learning",
			"web development",
			"web design",
			"sustainability",
			"accessibility",
			"bespoke",
			"state-of-the-art",
			"craft code",
			"craft coding",
		],
		learningResourceType: "supporting document",
		license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
		maintainer: CharlesMunat as Person,
		name: "ScratchCode: teaching bespoke web development from scratch.",
		publisher: ScratchCodeOrg as Organization,
		publishingPrinciples: "https://scratchcode.academy/diversity-policy",
		schemaVersion: "https://schema.org/docs/releases.html#v22.0.",
		teaches: [
			"just-in-time coding",
			"just-in-time learning",
			"web development",
			"web design",
			"web sustainability",
			"web accessibility",
			"ux",
			"html",
			"css",
			"javascript",
			"typescript",
			"state-of-the-art",
			"craft code",
			"craft coding",
		],
		thumbnailUrl: "https://scratchcode.academy/images/scratchcode.svg",
		url: "https://scratchcode.academy/",
		version,
	}
}
