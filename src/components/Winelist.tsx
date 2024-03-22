import React from "react"
import WineCard from "./Winecard"
import { IWines } from "../interfaces/wine"


type Wines = null | Array<IWines>
function wineList() {
  const [wines, setWines] = React.useState<Wines>(null)
  React.useEffect(() => {
    async function fetchWines() {
      const resp = await fetch('/api/rouge/wines')
      const data = await resp.json()
      setWines(data)
    }
    fetchWines()
  }, [])
  console.log(wines);
  return <section className="">
    <div className="">
      <div className="">
        {wines?.map((wine) => {
          return <WineCard
          key={wine._id}
          {...wine}
        />
        })}
      </div>
    </div>
  </section>
}
export default wineList