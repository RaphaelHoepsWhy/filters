import { useRouter } from "@/i18n/routing"
import { useSearchParams } from "next/navigation"
import { useCallback, useTransition } from "react"
import usePathnameWithParams, {
  searchParamsToObject,
} from "./usePathnameWithParams"

export default function useSearchParam(
  key: string,
): [
  value: any,
  set: (value: any, inputParams?: URLSearchParams) => void,
  isPending: boolean,
] {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const { pathname, params } = usePathnameWithParams()

  const set = useCallback(
    ({
      value,
      inputParams,
      optimisticSet,
    }: {
      value?: string
      inputParams?: URLSearchParams
      optimisticSet?: () => undefined
    }) => {
      const queryParams =
        inputParams ?? new URLSearchParams(searchParams.toString())

      if (!!value) {
        queryParams.set(key, value)
      } else {
        queryParams.delete(key)
      }

      startTransition(() => {
        if (!!optimisticSet) optimisticSet()

        router.push({
          pathname, // unresolved next.js pathname, e.g. /items/[id].
          params, // next.js routing params required to resolve pathname, e.g. the value of [id]
          query: searchParamsToObject(queryParams),
        })
      })
    },
    [key, params, pathname, router, searchParams],
  )

  return [searchParams.get(key), set, isPending]
}
