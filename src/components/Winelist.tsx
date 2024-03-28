import React from "react";
import WineCard from "./Winecard";
import { IWines } from "../interfaces/wine";
import Footer from "./footer";
import { baseUrl } from "../config";

type Wines = null | Array<IWines>;

function wineList() {
  const [wines, setWines] = React.useState<Wines>(null);
  React.useEffect(() => {
    async function fetchWines() {
      const resp = await fetch(`${baseUrl}/rouge/wines`);
      const data = await resp.json();
      setWines(data);
    }
    fetchWines();
  }, []);

  const [search, setSearch] = React.useState("");

  function handleChange(e: any) {
    setSearch(e.currentTarget.value);
  }

  function filterWines() {
    return wines?.filter((wine: { wineName: string; winery: string }) => {
      const lowerSearch = search.toLowerCase();
      const lowerWineName = wine.wineName.toLowerCase();
      const lowerWinery = wine.winery.toLowerCase();

      return (
        lowerWineName.includes(lowerSearch) || lowerWinery.includes(lowerSearch)
      );
    });
  }

  const filteredLength: any = filterWines()?.length;

  return (
    <>
      <section className="container">
        <div className="columns is-centered ">
          <div className="column is-half-mobile">
          <div className="container ">
            <input
              className="input background-is-rouge is-rounded mt-6"
              placeholder="Search character..."
              onChange={handleChange}
              value={search}
            />
            {filteredLength === 0 && (
              <div className="account  has-text-centered background-is-grey mt-5">
                <p className="text is-black ">Cannot find your wine ?</p>
                <a href="/create">
                  <button className="button  mb-3">Create new Wine</button>
                </a>
              </div>
            )}

            <div className="columns is-multiline is-centered">
              {filterWines()?.map((wine) => {
                return (
                  <div
                    key={wine._id}
                    className="column is-half-desktop is-half-mobile"
                  >
                    <WineCard {...wine} />
                  </div>
                );
              })}
            </div>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default wineList;