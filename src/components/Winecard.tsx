import { Link } from "react-router-dom"
import { IWines } from "../interfaces/wine"

function WineCard({_id, winery, wineName, region, country, style, grapes, vintage }: IWines) {
    return <div className="">
    <Link to={`/wines/${_id}`}>
      <div className="">
        <div className="">
          <div className="">{`${winery}`}</div>
        </div>
        <div className="">
          <div className="">{`${wineName}`}</div>
        </div>
        <div className="">
          <h5 className="">{`Country/Region:`}</h5>
          <h5>{`${country} - ${region}`}</h5>
          <h5 className="">{`Style:`}</h5>
          <h5>{style}</h5>
          <h5 className="">{`Vintage:`}</h5>
          <h5>{vintage}</h5>
        </div>
      </div>
    </Link>
  </div>
}

export default WineCard