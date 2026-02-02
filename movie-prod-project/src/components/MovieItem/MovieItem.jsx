import React from "react";
import LikeDislike from "../LikeDislike/LikeDislike";

export default function MovieItem({ movie, onToggleWatched, onSetReaction }) {
  return (
    <li>
      <span>{movie.name}</span>

      <button onClick={() => onToggleWatched(movie.id)}>
        {movie.watched ? "Просмотрено" : "Не просмотрено"}
      </button>

      {movie.watched && (
        <LikeDislike
          reaction={movie.reaction}
          onLike={() => onSetReaction(movie.id, "like")}
          onDislike={() => onSetReaction(movie.id, "dislike")}
        />
      )}
    </li>
  );
}
