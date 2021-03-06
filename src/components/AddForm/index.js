import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// AQUI VAI O axios.POST VARIOS FUNCAO HANDLE E
//  DA PR COLOCAR UM TOASTER TAMBEM VARIOS USESTATE  ASYNC E AXUIS

export function AddForm({ favList }) {
  let navigate = useNavigate();

  const [form, setForm] = useState({
    owner: "",
    description: "",
    movies: favList,
  });
  console.log(favList);

  const handleChange = (e) => {
    setForm({ ...form, movies: favList, [e.target.name]: e.target.value });
  };

  const handleDelete = (title) => {
    const clone = [...favList];
    console.log(clone);
    const newForm = clone.filter((currentTitle) => {
      return title !== currentTitle;
    });
    console.log(newForm);
    // setForm({...favList, form.movies:newForm});
    //com setfav nao vai , pq ela nao existe aqui , como eu faco pra isso funcionar?
  };

  const handleSubmit = async (error) => {
    error.preventDefault();
    try {
      await axios.post(
        "https://ironrest.herokuapp.com/jinohong-proj02-teste",
        form
      );
      navigate("/");
      console.log({ ...form });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex justify-content-end p-5 ">
        <div className="d-flex flex-column">
          <div className="form-group">
            <label htmlFor="listname">Playlist name:</label>
            <input
              name="owner"
              type="text"
              className="form-control"
              id="listname"
              placeholder="Your playlist name"
              onChange={handleChange}
            />
            <small id="listname" className="form-text text-muted">
              Be creative with you favorites list name!
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              name="description"
              type="text"
              className="form-control"
              id="description"
              placeholder="aaa"
              onChange={handleChange}
            />
          </div>

          <ul>
            {favList.map((title) => {
              return (
                <>
                  <li>{title.original_title}</li>
                  <button
                    onClick={() => {
                      handleDelete(title);
                    }}
                    // {() => {
                    //   const newList = favList.filter((currentTitle) => {
                    //     return title !== currentTitle;
                    //   });
                    //   setFavList(newList);
                    // }}

                    type="button"
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </>
              );
            })}
          </ul>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
