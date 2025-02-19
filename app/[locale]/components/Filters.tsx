"use client"

import useSearchParam from "@/app/hooks/useSearchParam"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
// import { useSearchParams } from "next/navigation"
import React from "react"

type Props = {
  className?: string
}

export default function Filters({}: Props) {
  // const searchParams = useSearchParams()
  const [type, setType, isPending] = useSearchParam("type")

  function handleChange(value: string | undefined) {
    setType(value)
  }

  return (
    <ToggleGroup value={type} onValueChange={handleChange} type="single">
      <ToggleGroupItem value="Pizza">Pizza</ToggleGroupItem>
      <ToggleGroupItem value="Pasta">Pasta</ToggleGroupItem>
      <ToggleGroupItem value="Noodles">Noodles</ToggleGroupItem>
    </ToggleGroup>
  )
}
