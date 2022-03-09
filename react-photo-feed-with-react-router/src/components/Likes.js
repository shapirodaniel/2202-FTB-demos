import React from "react";
import "../component-css/Likes.css";

export default function Likes({ likes }) {
  return (
    <div className="likesContainer">
      <span>{likes}</span>
      <img src="./assets/heart.png" alt="likes" />
    </div>
  );
}
