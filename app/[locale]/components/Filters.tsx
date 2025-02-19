"use client"

import useSearchParam from "@/app/hooks/useSearchParam"
import { ToggleGroup, ToggleGroupItem } from "@/ui/toggle-group"
// import { useSearchParams } from "next/navigation"
import React, { useOptimistic } from "react"

type Props = {
  className?: string
}

export default function Filters({}: Props) {
  // const searchParams = useSearchParams()
  const [type, setType, isPending] = useSearchParam("type")
  const [optimisticType, setOptimisticType] = useOptimistic(type)

  function handleChange(value: string | undefined) {
    setType({ value, optimisticSet: () => setOptimisticType(value) })
  }

  return (
    <ToggleGroup
      value={optimisticType}
      onValueChange={handleChange}
      type="single"
      data-pending={isPending ? "" : undefined}
    >
      <ToggleGroupItem value="Pizza">Pizza</ToggleGroupItem>
      <ToggleGroupItem value="Pasta">Pasta</ToggleGroupItem>
      <ToggleGroupItem value="Noodles">Noodles</ToggleGroupItem>
    </ToggleGroup>
  )
}
