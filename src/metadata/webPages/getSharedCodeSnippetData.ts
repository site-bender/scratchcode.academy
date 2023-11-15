import type {
	Language,
	Organization,
	Person,
	SoftwareSourceCode,
} from "@sitebender/components/src/types/schema.org"

import { ACQUIRE_LICENSE_PAGE } from "~constants"
import { CraftCodeOrg } from "../organizations"
import { CharlesMunat } from "../persons"

export default function getSharedCodeSnippetData(): Partial<SoftwareSourceCode> {
	return {
		"@context": "https://schema.org",
		"@type": "SoftwareSourceCode",
		acquireLicensePage: ACQUIRE_LICENSE_PAGE,
		codeSampleType: "code snippet",
		creator: CharlesMunat as Person,
		inLanguage: {
			"@type": "Language",
			alternateName: "en",
			name: "English",
		} as Language,
		isAccessibleForFree: true,
		isFamilyFriendly: true,
		license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
		publisher: CraftCodeOrg as Organization,
		schemaVersion: "https://schema.org/docs/releases.html#v22.0.",
	}
}
