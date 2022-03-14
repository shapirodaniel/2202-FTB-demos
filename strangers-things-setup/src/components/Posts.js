import React, { useState, useEffect } from 'react';

export default function Posts() {
  // posts needs to manage the posts data coming from our strangers things api
  // so we need two pieces of info
  // a way of holding onto state: useState
  // a way of handling async effects: useEffect
  const [posts, setPosts] = useState([]);

  console.log(posts);

  useEffect(() => {
    // create as async fetch function
    async function fetchPosts() {
      try {
        // fetch
        const response = await fetch(
          `http://strangers-things.herokuapp.com/api/2202-FTB-PT-WEB-FT/posts`
        );
        // unpack the response stream
        const { success, error, data } = await response.json();

        if (success) {
          setPosts(data.posts);
        }
      } catch (err) {
        console.error(err);
      }
    }

    // call it
    fetchPosts();
  }, []);

  return <div>hi im posts</div>;
}
