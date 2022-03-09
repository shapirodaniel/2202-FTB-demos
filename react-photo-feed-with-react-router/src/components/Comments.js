import React from "react";
import { useComments } from "../custom-hooks";
import "../component-css/Comments.css";

export default function Comments({ postId }) {
  const { comments } = useComments(postId);

  return (
    <div className="commentsContainer">
      {comments.map(({ id, name, comment }) => (
        <div key={id} className="singleComment">
          <span className="name">{name}:</span>
          <span className="comment">{comment}</span>
        </div>
      ))}
    </div>
  );
}
