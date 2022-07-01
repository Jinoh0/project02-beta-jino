import { Link } from "react-router-dom";

export function PlaylistsCard({ owner, description }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{owner}</h5>
        <p className="card-text">{description}</p>
        <Link to={`/playlist-details/${id}`} className="card-link">
          See all details
        </Link>
        <Link to="/" className="card-link">
          Another link
        </Link>
      </div>
    </div>
  );
}
