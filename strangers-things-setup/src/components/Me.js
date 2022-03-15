import React, { useState, useEffect } from 'react';
import { useAuth } from '../custom-hooks';

export default function Me() {
  const { token } = useAuth();
  const [me, setMe] = useState({});

  useEffect(() => {
    async function fetchMe() {
      try {
        const response = await fetch(
          `http://strangers-things.herokuapp.com/api/2202-FTB-PT-WEB-FT/users/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { success, data: me, error } = await response.json();

        if (success) {
          setMe(me);
        } else {
          throw new Error('error fetching me');
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchMe();
  }, [token]);

  console.log(me);

  const { messages } = me || {};
  const { posts } = me || {};

  const activePosts = posts ? posts.filter((post) => post.active) : [];
  const inactivePosts = posts ? posts.filter((post) => !post.active) : [];

  async function deletePost(postId) {
    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2202-FTB-PT-WEB-FT/posts/${postId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { success } = await response.json();

      // if we were successful in this delete, what should we do to modify our existing state so that without navigating away from the page or modifying our loggedIn/loggedOut state, we're able to refresh data without making a trip to the server again??

      // we know which post we delete by its _id property
      // so we can target our current "model" of posts, meaning, the data we're storing in the handle provided by useState

      // this is a SOFT DELETE
      // soft deletes protect database integrity by not creating "holes" that could lead to errors related to the relationship between data points
      // the drawbacks are that you end up storing tons of relatively unused data, and you're not GDPR compliant

      if (success) {
        const filteredPosts = posts.map((post) => {
          if (post._id === postId) {
            post.active = false;
          }

          return post;
        });

        setMe({ ...me, posts: filteredPosts });
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section>
      <h1>My Messages</h1>
      <div>
        {messages &&
          messages.map((msg) => (
            <article key={msg._id}>
              <h4>Post ID: {msg.post._id}</h4>
              <p>Post Title: {msg.post.title}</p>
            </article>
          ))}
      </div>
      <h1>My Posts</h1>
      <h3>Active Posts</h3>
      {activePosts.length
        ? activePosts.map((post) => (
            <article key={post._id}>
              <h4>Post Title: {post.title}</h4>
              <p>Description: {post.description}</p>
              <p>Price: {post.price}</p>
              <button onClick={() => deletePost(post._id)}>
                delete this post
              </button>
            </article>
          ))
        : 'no active posts'}
      <h3>Inactive Posts</h3>
      <div>
        {inactivePosts.length
          ? inactivePosts.map((post) => (
              <article key={post._id}>
                <h4>Post Title: {post.title}</h4>
                <p>Description: {post.description}</p>
                <p>Price: {post.price}</p>
              </article>
            ))
          : 'no inactive posts'}
      </div>
    </section>
  );
}
