import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { MoviesList } from "./pages/MoviesList/index";
import { MoreDetails } from "./pages/MoreDetails/index";
import { AddForm } from "./components/AddForm";
import {PlaylistDetails} from "./pages/PalylistDetails/index"

function App() {
  return (
    <div className="App m-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies-list" element={<MoviesList />} />
        <Route path="/movies-list/:movieid" element={<MoreDetails />} />
        <Route path="/playlist-details/:id" element={<PlaylistDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
