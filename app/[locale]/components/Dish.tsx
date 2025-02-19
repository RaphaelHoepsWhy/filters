import React from "react"
import { DishData } from "../data"

type Props = {
  className?: string
  dish: DishData
}

export default function Dish({ dish }: Props) {
  return (
    <div key={dish.name} className="rounded-md bg-neutral-100 p-4 text-black">
      <div className="flex flex-col gap-x-2">
        <div className="text-sm">{dish.type} </div>
        <div className="text-lg">{dish.name}</div>
      </div>
    </div>
  )
}
