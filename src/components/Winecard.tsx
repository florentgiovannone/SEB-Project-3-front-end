import { Link } from "react-router-dom"
import { IWines } from "../interfaces/wine"

function WineCard({ _id, winery, wineName, region, country, style, grapes, vintage, image }: IWines) {
  return <section>
    <div style={{ height: 250, width: 250 }} className="card background-is-grey m-1">
      <div className="card-content p-0 m-0">
        <div className="content">
          <p className="card-title has-text-centered is-rouge m-0 has-text-weight-bold">{`${winery}`}</p>
          <p className="card-title has-text-centered is-rouge m-0 has-text-weight-bold">{`${wineName}`}</p>
        </div>
      </div>
      <div className="card-content background-is-grey">
        <Link to={`/wines/${_id}`}>
          <div className="content has-text-centered">
            <h5 className="title is-size-6 has-text-black	">{`Country/Region:`}</h5>
            <h5 className="is-size-6 is-rouge has-text-weight-light">{`${country} / ${region}`}</h5>
            <h5 className="title is-size-6 has-text-black	">{`Style:`}</h5>
            <h5 className="is-size-6 is-rouge has-text-weight-light">{style}</h5>
            <h5 className="title is-size-6 has-text-black">{`Vintage:`}</h5>
            <h5 className="is-size-6 is-rouge has-text-weight-light">{vintage}</h5>
          </div>
        </Link>
      </div>
    </div>
  </section>
}
export default WineCard