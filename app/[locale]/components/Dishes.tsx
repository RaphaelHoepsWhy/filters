import React from "react"
import { getDishes } from "../actions"
import Dish from "./Dish"

type Props = {
  className?: string
  type?: string
}

export default async function Dishes({ type }: Props) {
  const dishes = await getDishes({ type })

  return (
    <div className="grid grid-cols-6 gap-3">
      {dishes.map((dish) => (
        <Dish key={dish.name} dish={dish} />
      ))}
    </div>
  )
}
