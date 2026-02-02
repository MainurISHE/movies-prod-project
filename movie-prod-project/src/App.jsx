import { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie/AddMovie";
import MovieList from "./components/MovieList/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [showWatched, setShowWatched] = useState(false);

  const addMovie = (name) => {
    const newMovie = {
      id: Date.now(),
      name,
      watched: false,
      reaction: null,
    };

    setMovies([...movies, newMovie]);
  };

  const toggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? { ...movie, watched: !movie.watched, reaction: null }
          : movie
      )
    );
  };

  const setReaction = (id, reaction) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, reaction } : movie
      )
    );
  };

  const filteredMovies = movies.filter((movie) =>
    showWatched ? movie.watched : !movie.watched
  );

  return (
    <div>
      <h2>Мои Фильмы</h2>

      <AddMovie onAdd={addMovie} />

      <button onClick={() => setShowWatched(!showWatched)}>
        {showWatched ? "Показать не просмотренные" : "Показать просмотренные"}
      </button>

      <MovieList
        movies={filteredMovies}
        onToggleWatched={toggleWatched}
        onSetReaction={setReaction}
      />
    </div>
  );
}

export default App;
