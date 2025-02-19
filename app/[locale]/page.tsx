import Dishes from "./components/Dishes"
import Filters from "./components/Filters"

type Params = {
  searchParams: Promise<{
    type?: string
  }>
  params: Promise<{ locale: string }>
}

export default async function Home(props: Params) {
  const { type } = await props.searchParams

  return (
    <div className="flex flex-col items-start gap-4">
      <Filters />
      <Dishes type={type} />
    </div>
  )
}
