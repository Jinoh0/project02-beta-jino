import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function PlaylistDetails() {
  const { id } = useParams;
  const navigate = useNavigate();

  const [pMovies, setPMovies] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlaylists() {
      try {
        const response = await axios.get(`
                https://ironrest.herokuapp.com/jinohong-proj02-teste/${id}
                `);

        setPMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        navigate("/error");
      }
    }
    fetchPlaylists();
  }, [id]);

  async function handleDelete() {
    try {
      await axios.delete(`
            https://ironrest.herokuapp.com/jinohong-proj02-teste/${id}
            `);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return loading ? (
    <h1>LOADING...</h1>
  ) : (
    <>
      <h1>{pMovies.owner}</h1>
      <h2>{pMovies.description}</h2>

      {pMovies.movies.map((currentMovie) => {
        return (
          <>
            <h1>{currentMovie.original_title}</h1>
            <p>{currentMovie.overview}</p>
            <p>{currentMovie.popularity}</p>
            <p>{currentMovie.release_date}</p>
            <p>{currentMovie.vote_average}</p>
            <p>{currentMovie.vote_count}</p>
          </>
        );
      })}

      <button onClick={handleDelete} className="btn btn-danger">
        Remove
      </button>
    </>
  );
}
