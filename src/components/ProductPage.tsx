import { Link } from "react-router-dom"
import { IWines } from "../interfaces/wine"
import location from "../assets/location.png"
import grapesStyle from "../assets/grapes.png"
import year from "../assets/year.png"
import Footer from "./footer"

function ProductPage({ _id, winery, wineName, region, country, style, grapes, vintage, image }: IWines) {
  return <> <section>
    <p className="title has-text-centered m-4">{winery}</p>
    <p className="title has-text-centered m-4">{wineName}</p>
    <div className="columns">
      <div className="column is-two-fifths">
        <div className="card-image">
          <figure className="image is-4by5">
            <img
              src={`${image}`}
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>
      <div className="column is-half has-text-centered">

        <div className="column">
          <div className="media m-6">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  src={location}
                  alt="location"
                />
              </figure>
            </div>
            <div className="media-content m-auto">
              <p className="title is-6 mb-2">{"Location"}</p>
              <p className="is-6 ">{country}</p>
              <p className="subtitle is-6">{region}</p>
            </div>
          </div>
          <div className="media m-6">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  src={grapesStyle}
                  alt="location"
                />
              </figure>
            </div>
            <div className="media-content m-auto">
              <p className="title is-6 mb-2">{"Grapes"}</p>
              <p className="is-6">{grapes}</p>
            </div>
          </div>
          <div className="media m-6">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  src={year}
                  alt="location"
                />
              </figure>
            </div>
            <div className="media-content m-auto">
              <p className="title is-6 mb-2">{"Vintage"}</p>
              <p className="is-6">{vintage}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  <Footer/>
  </>
}
export default ProductPage