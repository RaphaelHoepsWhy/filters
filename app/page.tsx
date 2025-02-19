import { getDishes } from "./actions"
import Dish from "./components/Dish"

export default async function Home() {
  const dishes = await getDishes()

  return (
    <div className="grid grid-cols-6 gap-3">
      {dishes.map((dish) => (
        <Dish key={dish.name} dish={dish} />
      ))}
    </div>
  )
}
