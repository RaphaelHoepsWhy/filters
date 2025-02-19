"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useSearchParams } from "next/navigation"
import React from "react"

type Props = {
  className?: string
}

export default function Filters({}: Props) {
  const searchParams = useSearchParams()

  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroup>
  )
}
