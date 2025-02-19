export type DishData = {
  name: string
  type: string
  tags: string[]
}

export const DISHES: DishData[] = [
  {
    name: "Lasagne",
    type: "Pasta Dish",
    tags: ["Cheese", "Tomato", "Beef", "Garlic"],
  },
  {
    name: "Carbonara",
    type: "Pasta",
    tags: ["Cheese", "Bacon", "Egg", "Garlic", "Pepper"],
  },
  {
    name: "Margherita",
    type: "Pizza",
    tags: ["Cheese", "Tomato", "Basil", "Garlic", "Olive Oil"],
  },
  {
    name: "Pad Thai",
    type: "Noodles",
    tags: ["Egg", "Peanut", "Lime", "Garlic", "Chili"],
  },
  {
    name: "Ramen",
    type: "Noodles",
    tags: ["Egg", "Pork", "Seaweed", "Garlic", "Soy"],
  },
  {
    name: "Risotto",
    type: "Rice",
    tags: ["Cheese", "Mushroom", "Wine", "Garlic", "Butter"],
  },
  {
    name: "Burrito",
    type: "Mexican",
    tags: ["Beans", "Rice", "Cheese", "Tomato", "Chili"],
  },
  {
    name: "Sushi",
    type: "Japanese",
    tags: ["Rice", "Fish", "Seaweed", "Soy", "Wasabi"],
  },
]
