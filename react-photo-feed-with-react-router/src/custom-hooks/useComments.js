import { useState, useEffect } from "react";

export function useComments(postId) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        if (postId) {
          const response = await fetch(
            `http://localhost:8080/comments?commentId=${postId}`
          );
          const [commentObj] = await response.json();

          setComments(commentObj.imgComments);
        }
      } catch (ex) {
        console.error(ex);
      }
    };

    getComments();
  }, [postId]);

  return { comments };
}
