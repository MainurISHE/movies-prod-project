import React from "react";
import MovieItem from "../MovieItem/MovieItem";

export default function MovieList({ movies, onToggleWatched, onSetReaction }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onToggleWatched={onToggleWatched}
          onSetReaction={onSetReaction}
        />
      ))}
    </ul>
  );
}
