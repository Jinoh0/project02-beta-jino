import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { PlaylistsCard } from "../../components/PlaylistsCard";

// AQUI VAI O USEEFFECT COM O IDPARAMS E FETCHMOVIESLISTS AXIOS.GET

export function Home() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    async function fetchPlaylists() {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/jinohong-proj02-teste"
      );
      setPlaylists([...response.data]);
    }
    fetchPlaylists();
  }, []);

  return (
    <>
      <div className="card-body card text-center card-header">
        <h5 className="card-title">
          Ever thought of organizing your favorite movies?
        </h5>
        <p className="card-text">
          Click here to check our movies gallery and add to your list!
        </p>
        <Link to="/movies-list">
          <button className="btn btn-primary">Go to Movies list</button>
        </Link>
      </div>

      <h1>Lists you made here</h1>
      {playlists.map((currentPlaylist) => {
        console.log(currentPlaylist);
        return (
          <PlaylistsCard
            owner={currentPlaylist.owner}
            description={currentPlaylist.description}
            id={currentPlaylist._id}
          />
        );
      })}
    </>
  );
}
