import React from "react"
import WineCard from "./Winecard"
import { IWines } from "../interfaces/wine"
import Footer from "./footer"


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
  return (<><section className="container m-6">
    <div className="columns is-centered ">
      <div className="columns is-multiline">
        {wines?.map((wine) => {
          return <WineCard
          key={wine._id}
          {...wine}
        />
        })}
      </div>
    </div>

  </section>
      <Footer />
  </>)
}
export default wineList