import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Feed.css';
import Comments from './Comments';
import Likes from './Likes';

function Feed() {
	const [posts, setPosts] = useState([]);
	const [visibleComments, setVisibleComments] = useState({});

	useEffect(() => {
		const getPosts = async () => {
			try {
				const { data: posts } = await axios.get('http://localhost:8080/posts');

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
				<div key={postId} className='post-container'>
					<div className='author-and-date'>
						<span>{date}</span>
						<span>|</span>
						<span className='author'>{author}</span>
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
