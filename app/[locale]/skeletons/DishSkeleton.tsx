import React from "react"

export default function DishSkeleton() {
  return (
    <div className="animate-pulse rounded-md border bg-neutral-200 p-2">
      <div className="flex flex-col gap-2">
        <div className="h-6 w-1/2 rounded-sm bg-neutral-50" />
        <div className="h-6 rounded-sm bg-neutral-50" />
        <div className="h-6 rounded-sm bg-neutral-50" />
      </div>
    </div>
  )
}
