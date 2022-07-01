import { useEffect, useState } from "react";
import { HomeBtn } from "../../components/HomeBtn/index";
import { MoviesCard } from "../../components/MoviesCard";
import axios from "axios";
import { AddForm } from "../../components/AddForm";
import { Link, useParams } from "react-router-dom";
// O FORM VAI AQUI DENTRO

export function EditPlaylist() {
  const [allMovies, setAllMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/jinohong-proj02-teste/${id}`
        );
        setAllMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, [id]);

  const [favList, setFavList] = useState([]);

  console.log(favList);

  return (
    <>
      <div className="d-flex flex-row p-2">
        <HomeBtn />
        <div className="flex-column justify-content-around">
          {allMovies.map((currentMovie) => {
            return (
              <div
                className="d-flex flex-column card mb-3 "
                style={{ width: "18rem" }}
              >
                <MoviesCard
                  img={`https://image.tmdb.org/t/p/w500${currentMovie.backdrop_path}`}
                  title={currentMovie.original_title}
                  description={currentMovie.overview}
                  releaseYear={currentMovie.release_date}
                  vote={currentMovie.vote_average}
                />
                <div className="card-body">
                  <Link to="/movies-list/:movieid">
                    <button className="card-link">More details</button>
                  </Link>

                  {/* <Link to="/movies-list/:id"> */}
                  <button
                    onClick={() => {
                      setFavList([...favList, currentMovie]);
                    }}
                    className="card-link"
                  >
                    Add to MyList
                  </button>
                  {/* COMO FACO ESSE BOTAO ENVIAR VALUE PRA FORM? */}
                  {/* BOTAO NOVO ? LINK USEPARAMS?  */}
                  {/* </Link> */}
                </div>
              </div>
            );
          })}
        </div>
        <AddForm favList={favList} />
      </div>
    </>
  );
}
