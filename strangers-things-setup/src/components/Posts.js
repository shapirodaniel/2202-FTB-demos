import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../custom-hooks';

export default function Posts() {
  const { token } = useAuth();
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
          `http://strangers-things.herokuapp.com/api/2202-FTB-PT-WEB-FT/posts`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
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

  console.log(posts);

  return (
    <div>
      {posts.map((post) => {
        const queryString = `?title=${post.title}&description=${post.description}&price=${post.price}`;

        return (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div>{post.price}</div>
            <div>{`isAuthor? ${post.isAuthor.toString()}`}</div>
            <Link to={`/posts/${post._id}/edit${queryString}`}>Edit Post</Link>
          </div>
        );
      })}
    </div>
  );
}
