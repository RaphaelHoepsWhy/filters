import React from "react"
import { DishData } from "../../data"

type Props = {
  className?: string
  dish: DishData
}

export default function Dish({ dish }: Props) {
  return (
    <div
      key={dish.name}
      className="rounded-md border border-neutral-900 bg-neutral-200 p-2"
    >
      <div className="grid grid-cols-[auto,1fr] gap-x-1">
        <div className="font-bold">Name:</div>
        <div> {dish.name} </div>
        <div className="font-bold">Type:</div>
        <div> {dish.type} </div>
        <div className="font-bold">Tags:</div>
        <div> {dish.tags.join(", ")}</div>
      </div>
    </div>
  )
}
