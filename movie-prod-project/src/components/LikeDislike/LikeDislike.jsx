import React from "react";

export default function LikeDislike({ reaction, onLike, onDislike }) {
  return (
    <div>
      <button
        onClick={onLike}
        style={{ opacity: reaction === "like" ? 1 : 0.4 }}
      >
        👍
      </button>
      <button
        onClick={onDislike}
        style={{ opacity: reaction === "dislike" ? 1 : 0.4 }}
      >
        👎
      </button>
    </div>
  );
}