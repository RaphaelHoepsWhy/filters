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
    <div className="group flex flex-col items-start gap-4">
      <Filters />
      <Suspense fallback={<DishesSkeleton />}>
        <Dishes
          type={type}
          className="group-has-[[data-pending]]:animate-pulse group-has-[[data-pending]]:opacity-70"
        />
      </Suspense>
    </div>
  )
}
