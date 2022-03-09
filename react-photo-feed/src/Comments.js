import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Comments.css';

export default function Comments({ postId }) {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const getComments = async () => {
			try {
				if (postId) {
					const { data } = await axios.get(
						`http://localhost:8080/comments?commentId=${postId}`
					);
					setComments(data[0].imgComments);
				}
			} catch (ex) {
				console.error(ex);
			}
		};

		getComments();
	}, [postId]);

	if (!postId) return null;

	return (
		<div className='comments-container'>
			{comments.map(({ id, name, comment }) => (
				<div key={id} className='single-comment'>
					<span className='name'>{name}:</span>
					<span className='comment'>{comment}</span>
				</div>
			))}
		</div>
	);
}
