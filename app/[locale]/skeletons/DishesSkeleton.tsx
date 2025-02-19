import React from "react"
import DishSkeleton from "./DishSkeleton"

type Props = {
  className?: string
}

export default function DishesSkeleton({}: Props) {
  return (
    <div className="grid w-full grid-cols-3 gap-3 xl:grid-cols-6">
      <DishSkeleton />
      <DishSkeleton />
      <DishSkeleton />
    </div>
  )
}
