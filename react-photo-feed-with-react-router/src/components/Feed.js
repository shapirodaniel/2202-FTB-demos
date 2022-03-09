import React from "react";
import { usePosts } from "../custom-hooks";
import { Comments, Likes } from "./";
import { Link } from "react-router-dom";
import "../component-css/Feed.css";

function Feed() {
  const { posts, visibleComments, toggleCommentVisibility } = usePosts();

  return (
    <section>
      {posts.map(
        ({ postId, date, author, authorId, src, altText, content, likes }) => (
          <div key={postId} className="postContainer">
            <div className="authorAndDate">
              <span>{date}</span>
              <span>|</span>
              <Link className="author" to={`/profiles/${authorId}`}>
                {author}
              </Link>
            </div>
            <img src={src} alt={altText} />
            <Likes likes={likes} />
            <div>{content}</div>
            <button onClick={() => toggleCommentVisibility(postId)}>
              {visibleComments[postId] ? "Hide Comments" : "View Comments"}
            </button>
            {visibleComments[postId] && <Comments postId={postId} />}
          </div>
        )
      )}
    </section>
  );
}

export default Feed;
