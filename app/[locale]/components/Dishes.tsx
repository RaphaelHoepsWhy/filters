import React from "react"
import { getDishes } from "../actions"
import Dish from "./Dish"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  type?: string
}

export default async function Dishes({ type, className }: Props) {
  const dishes = await getDishes({ type })

  return (
    <div className={cn("grid w-full grid-cols-6 gap-3", className)}>
      {dishes.map((dish) => (
        <Dish key={dish.name} dish={dish} />
      ))}
    </div>
  )
}
