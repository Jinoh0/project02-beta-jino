import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { MoviesList } from "./pages/MoviesList/index";
import { MoreDetails } from "./pages/MoreDetails/index";
import { AddForm } from "./components/AddForm";
import { PlaylistDetails } from "./pages/PalylistDetails/index";
import { EditPlaylist } from "./pages/EditPlaylist/index";

function App() {
  return (
    <div className="App m-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies-list" element={<MoviesList />} />
        <Route path="/playlist-details/:id" element={<PlaylistDetails />} />
        <Route path="/edit-playlist/:id" element={<EditPlaylist />} />
      </Routes>
    </div>
  );
}

export default App;
