import type {
	Article,
	DefinedTerm,
	EducationalAudience,
	ImageObject,
	Language,
	Organization,
	Person,
} from "@sitebender/components/src/types/schema.org"
import { CraftCodeImage } from "../images"
import { CraftCodeOrg } from "../organizations"
import { CharlesMunat } from "../persons"

export type SharedArticleDataAttrs = {
	grade: string
	image?: ImageObject | undefined
	dateCreated: string
	dateModified?: string | undefined
	datePublished?: string | undefined
}

export default function getSharedArticleData({
	dateCreated,
	dateModified,
	datePublished,
	grade,
	image = CraftCodeImage,
}: SharedArticleDataAttrs): Partial<Article> {
	const modDate = dateModified || dateCreated
	const pubDate = datePublished || dateCreated

	return {
		"@context": "https://schema.org",
		"@type": "Article",
		audience: {
			"@type": "EducationalAudience",
			description:
				"Anyone interested in preserving and evolving bespoke web development skills.",
			educationalRole: "student",
			name: "Learners, Developers, Teachers",
		} as EducationalAudience,
		author: [CharlesMunat as Person],
		copyrightHolder: CraftCodeOrg as Organization,
		dateCreated,
		dateModified: modDate,
		datePublished: pubDate,
		editor: [CharlesMunat as Person],
		educationalLevel: {
			"@type": "DefinedTerm",
			inDefinedTermSet: "US Grade Levels",
			name: grade,
			url: "http://elastic1.asn.desire2learn.com/asn/scheme/ASNEducationLevel/LifeLongLearning",
		} as DefinedTerm,
		image,
		inLanguage: {
			"@type": "Language",
			alternateName: "en",
			name: "English",
		} as Language,
		isAccessibleForFree: true,
		isFamilyFriendly: true,
	}
}
