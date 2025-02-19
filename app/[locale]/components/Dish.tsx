import React from "react"
import { DishData } from "../data"

type Props = {
  className?: string
  dish: DishData
}

export default function Dish({ dish }: Props) {
  return (
    <div key={dish.name} className="rounded-md bg-neutral-200 p-4 text-black">
      <div className="grid grid-cols-[auto,1fr] gap-x-2">
        <div className="font-bold">Name:</div>
        <div> {dish.name} </div>
        <div className="font-bold">Type:</div>
        <div> {dish.type} </div>
      </div>
    </div>
  )
}
