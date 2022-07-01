import { Link } from "react-router-dom";

export function MoviesCard({ img, title, description, releaseYear, vote }) {
  return (
    <div className="">
      <div className="card mb-3 " style={{ width: "18rem" }}>
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>vote average : </strong>
            {vote}
          </li>
          <li className="list-group-item">
            <strong>release year : </strong>
            {releaseYear}
          </li>
        </ul>

        {/* <div className="card-body">
          <Link to="/movies-list/:movieid">
            <button className="card-link">More details</button>
          </Link>

          {/* <Link to="/movies-list/:id"> */}
        {/* COMO FACO ESSE BOTAO ENVIAR VALUE PRA FORM? */}
        {/* BOTAO NOVO ? LINK USEPARAMS?  */}
        {/* </Link> */}
      </div>
    </div>
  );
}
