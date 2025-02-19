"use server"

import { DishData, DISHES } from "./data"

export const getDishes = async ({ type }: { type?: string } = {}): Promise<
  DishData[]
> => {
  return new Promise((resolve) => {
    const delay = 1200

    setTimeout(() => {
      if (type) {
        resolve(DISHES.filter((dish) => dish.type === type))
      } else {
        resolve(DISHES)
      }
    }, delay)
  })
}
