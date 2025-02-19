import { getDishes } from "./actions"
import Dish from "./components/Dish"
import Filters from "./components/Filters"

export default async function Home() {
  const dishes = await getDishes()

  return (
    <div className="flex flex-col items-start gap-4">
      <Filters />
      <div className="grid grid-cols-6 gap-3">
        {dishes.map((dish) => (
          <Dish key={dish.name} dish={dish} />
        ))}
      </div>
    </div>
  )
}
