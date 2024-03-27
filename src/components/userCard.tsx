import { Link } from "react-router-dom"
import { IUser } from "../interfaces/user"

function UserCard({ firstName, lastName, userName, _id, email, image }: IUser) {
  return <section className="m6">
    <div style={{ height: 250, width: 250 }} className="card background-is-grey mgb-large m-3">
      <div className="card-content p-0 m-0">
        <div className="content">
          <p className="card-title has-text-centered is-rouge m-0 has-text-weight-bold">{`${firstName}`}</p>
          <p className="card-title has-text-centered is-rouge m-0 has-text-weight-bold">{`${lastName}`}</p>
        </div>
      </div>
      <div className="card-content background-is-grey m">
        <Link to={`/user/${_id}`}>
          <div className="card-image ">
            <figure className="image is-4by5">
              <img
            
                src={`${image}`}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="content">
            <p className="card-title has-text-centered is-rouge m-0 has-text-weight-bold">{`${userName}`}</p>
            <p className="card-title has-text-centered is-rouge m-0 has-text-weight-bold">{`${email}`}</p>
          </div>

        </Link>
      </div>
    </div>
  </section>
}
export default UserCard