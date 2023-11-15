import type {
	Language,
	Organization,
	Person,
	WebPage,
} from "@sitebender/components/src/types/schema.org"
import { CraftCodeOrg } from "../organizations"
import { CharlesMunat } from "../persons"

import { CraftCodeImage } from "~metadata/images"

export default function getSharedWebPageData(
	version: string,
): Partial<WebPage> {
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		creator: CharlesMunat as Person,
		dateCreated: "2023-11-01T00:00:00Z",
		image: CraftCodeImage,
		inLanguage: {
			"@type": "Language",
			alternateName: "en",
			name: "English",
		} as Language,
		isAccessibleForFree: true,
		isFamilyFriendly: true,
		license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
		primaryImageOfPage: CraftCodeImage,
		publisher: CraftCodeOrg as Organization,
		schemaVersion: "https://schema.org/docs/releases.html#v22.0.",
		thumbnailUrl: "https://scratchcode.academy/images/craft-code.svg",
		version,
	}
}
