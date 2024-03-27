import { Link } from "react-router-dom"
import { IWines } from "../interfaces/wine"

function WineCardDashboard({ _id, winery, wineName }: IWines) {
  return <section className="m6">
    <div style={{ height: 100, width: 250 }} className="card background-is-rouge  mgb-large m-3">
        <Link to={`/wines/${_id}`}>
        <div className="content">
          <p className="card-title has-text-centered is-grey m-0 has-text-weight-bold">{`${winery}`}</p>
          <p className="card-title has-text-centered is-grey m-0 has-text-weight-bold">{`${wineName}`}</p>
        </div>
        </Link>
    </div>
  </section>
}
export default WineCardDashboard