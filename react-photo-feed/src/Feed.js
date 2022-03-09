import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Feed.css';
import Comments from './Comments';
import Likes from './Likes';

function Feed() {
  // we're setting up state by leverage the useState function
  // built in to the React library as a non-default export
  // useState takes an initial "empty" data type usually
  // and that data type should match whatever data we expect to hold eventually
  // in this case, posts and setPosts refer to the data and the setter function that we'll use to update the posts data
  // which we expect to be an array (of something)
  const [posts, setPosts] = useState([]);

  // we're setting up an object called visibleComments
  const [visibleComments, setVisibleComments] = useState({});

  // useEffect is a hook, which is a special function that React provides to do any number of things
  // useEffect in particular is used whenever we need to handle a side-effect, which is a long-running operation or something that requires async handling / promises
  // useEffect is HOF, it takes 2 parameters
  // the first param is the callback function that gets invoked whenever useEffect is triggered
  // the second param is the dependency array, which lets us manage how often the useEffect trigger runs
  // if the dependency array is empty, useEffect runs once on component mount
  // if there's no dependency array, useEffect runs continuously
  // otherwise, useEffect is triggered by changes to any dependency placed within that dependency array
  useEffect(() => {
    const getPosts = async () => {
      try {
        // axios is an ismorphic fetch-like client
        // it does what fetch() does, with less boilerplate
        const { data: posts } = await axios.get('http://localhost:8080/posts');

        setPosts(posts);

        const idObj = posts
          // Array.prototype.map() returns a new array
          // that new array will consist of only the postId
          // being returned from each object
          // we're destructuring the postId in the params block
          // of the callback function supplied to .map()
          .map(({ postId }) => postId)
          // the new array we're chaining to .reduce() looks like:
          // [ 1, 2, 3, 4, 5, ... ]
          // reduce function's callback receives 4 parameters
          // callback functions are functions passed to other functions as arguments
          .reduce((ht, val) => {
            // the accumulator is the first arg, it's an object
            // so we're assigning to that ht value a new field
            // and we're initializing that field with the boolean value of false
            // { 1: false, 2: false, ... n: false }
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
    if (visibleComments[postId]) {
      const clonedPosts = { ...visibleComments };
      delete clonedPosts[postId];
      setVisibleComments(clonedPosts);
    } else {
      setVisibleComments({ ...visibleComments, [postId]: true });
    }
  }

  return (
    <section>
      {posts.map(({ postId, date, author, src, altText, content, likes }) => (
        <div key={postId} className="post-container">
          <div className="author-and-date">
            <span>{date}</span>
            <span>|</span>
            <span className="author">{author}</span>
          </div>
          <img src={src} alt={altText} />
          <Likes likes={likes} />
          <div>{content}</div>
          <button onClick={() => toggleCommentVisibility(postId)}>
            {visibleComments[postId] ? 'Hide Comments' : 'View Comments'}
          </button>
          {visibleComments[postId] && <Comments postId={postId} />}
        </div>
      ))}
    </section>
  );
}

export default Feed;
