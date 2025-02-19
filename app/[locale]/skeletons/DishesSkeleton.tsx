import React from "react"
import DishSkeleton from "./DishSkeleton"

type Props = {
  className?: string
}

export default function DishesSkeleton({}: Props) {
  return (
    <div className="grid w-full grid-cols-6 gap-3">
      <DishSkeleton />
      <DishSkeleton />
      <DishSkeleton />
    </div>
  )
}
