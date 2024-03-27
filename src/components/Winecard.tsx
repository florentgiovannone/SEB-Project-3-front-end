import { Link } from "react-router-dom"
import { IWines } from "../interfaces/wine"

function WineCard({ _id, winery, wineName, region, country, style, grapes, vintage, image, user }: IWines) {
  return <section className="m6">
    <div style={{ height: 250, width: 250 }} className="card background-is-grey mgb-large m-3">
      <div className="card-content p-0 m-0">
        <div className="content">
          <p className="card-title has-text-centered is-rouge m-0 has-text-weight-bold">{`${winery}`}</p>
          <p className="card-title has-text-centered is-rouge m-0 has-text-weight-bold">{`${wineName}`}</p>
        </div>
      </div>
      <div className="card-content background-is-grey m">
        <Link to={`/wines/${_id}`}>
          <div className="card-image">
            <figure className="image has-ratio is-4by5">
              <img
                src={`${image}`}
                alt="Placeholder image"
              />
            </figure>
          </div>
        </Link>
      </div>
    </div>
  </section>
}
export default WineCard