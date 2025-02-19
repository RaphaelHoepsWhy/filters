import React from "react"

export default function Dish() {
  return (
    <div className="rounded-md border border-neutral-900 bg-neutral-300 p-2">
      <div className="flex flex-col gap-2">
        <div className="h-6 w-1/2 animate-pulse rounded-sm bg-gray-100" />
        <div className="h-6 animate-pulse rounded-sm bg-gray-100" />
        <div className="h-6 animate-pulse rounded-sm bg-gray-100" />
      </div>
    </div>
  )
}
