import Dish from "./components/Dish"
import { DISHES } from "./data"

export default function Home() {
  return (
    <div className="grid grid-cols-6 gap-3">
      {DISHES.map((dish) => (
        <Dish key={dish.name} dish={dish} />
      ))}
    </div>
  )
}
