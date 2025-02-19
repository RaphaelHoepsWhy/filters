import { Suspense } from "react"

import DishesSkeleton from "@/app/[locale]/skeletons/DishesSkeleton"
import Filters from "./components/Filters"
import Dishes from "./components/Dishes"

type Params = {
  searchParams: Promise<{
    type?: string
  }>
  params: Promise<{ locale: string }>
}

export default async function Home(props: Params) {
  const { type } = await props.searchParams

  return (
    <div className="flex flex-col items-start gap-4 has-[[data-pending]]:opacity-50">
      <Filters />
      <Suspense fallback={<DishesSkeleton />}>
        <Dishes type={type} />
      </Suspense>
    </div>
  )
}
