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

  const [search, setSearch] = React.useState("");

  function handleChange(e: any) {
    setSearch(e.currentTarget.value);
  }

  function filterWines() {
    return wines?.filter((wine: { wineName: string, winery: string }) => {
      return wine.wineName.toLowerCase().includes(search.toLowerCase())
    });
  }
  const filteredLength: any = filterWines()?.length
  
  return (<><section className="container m-8">
    <div className="columns is-centered m-6">
      <div className="container m-3">

        <input
          className="input background-is-rouge is-rounded m-3"
          placeholder="Search character..."
          onChange={handleChange}
          value={search}
        />
        {filteredLength === 0 && <div className="account  has-text-centered background-is-grey mb-5">
          <p className="text is-black ">Cannot find your wine ?</p>
          <a href="/create"><button className="button  mb-3">Create new Wine</button></a>

        </div>}

        <div className="columns is-multiline is-centered mb-6">
          {filterWines()?.map((wine) => {
            return <WineCard
              key={wine._id}
              {...wine}
            />
          })}
        </div>

      </div>
    </div>
    <div className="container mb-6">
      <div className="container mb-6">
        <div className="container mb-6">

        </div>
      </div>
      </div>


  </section>

    <Footer />
  </>)
}
export default wineList