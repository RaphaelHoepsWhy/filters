export type DishData = {
  name: string
  type: string
  tags: string[]
}

export const DISHES: DishData[] = [
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
    name: "Pepperoni",
    type: "Pizza",
    tags: ["Cheese", "Tomato", "Pepperoni", "Garlic", "Oregano"],
  },
  {
    name: "Quattro Formaggi",
    type: "Pizza",
    tags: ["Mozzarella", "Gorgonzola", "Parmesan", "Ricotta", "Olive Oil"],
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
