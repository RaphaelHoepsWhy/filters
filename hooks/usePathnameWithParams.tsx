import { usePathname } from "@/i18n/routing"
import {
  ReadonlyURLSearchParams,
  useParams,
  useSearchParams,
} from "next/navigation"

export function searchParamsToObject(
  searchParams: ReadonlyURLSearchParams | URLSearchParams,
): Record<string, string> {
  const query: Record<string, string> = {}
  searchParams.forEach((value, key) => {
    query[key] = value
  })
  return query
}

export default function usePathnameWithParams() {
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()

  // Provide query as plain js object to make it usable in next-intl components
  const query = searchParamsToObject(searchParams)

  // Cast to any as suggested here
  // https://github.com/amannn/next-intl/issues/643#issuecomment-1873547779
  return { pathname, params: params as any, query }
}
