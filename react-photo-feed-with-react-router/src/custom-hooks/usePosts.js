import { useState, useEffect } from "react";

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [visibleComments, setVisibleComments] = useState({});

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/posts");
        const posts = await response.json();

        setPosts(posts);

        const idObj = posts
          .map(({ postId }) => postId)
          .reduce((ht, val) => {
            ht[val] = false;
            return ht;
          }, {});

        setVisibleComments(idObj);
      } catch (ex) {
        console.error(ex);
      }
    };

    getPosts();
  }, []);

  function toggleCommentVisibility(postId) {
    setVisibleComments({
      ...visibleComments,
      [postId]: !visibleComments[postId],
    });
  }

  return { posts, visibleComments, toggleCommentVisibility };
}
