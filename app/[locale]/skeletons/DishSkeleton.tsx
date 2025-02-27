import React from "react"

export default function DishSkeleton() {
  return (
    <div className="animate-pulse-strong rounded-md border bg-neutral-200 p-4">
      <div className="flex flex-col gap-2">
        <div className="h-5 w-1/2 rounded-sm bg-neutral-50" />
        <div className="h-7 w-3/4 rounded-sm bg-neutral-50" />
      </div>
    </div>
  )
}
