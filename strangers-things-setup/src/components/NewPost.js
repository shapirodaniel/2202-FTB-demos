import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../custom-hooks';

export default function NewPost() {
  const history = useHistory();
  const { token } = useAuth();

  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // fetch to get a response whether our POST action was successful
      const response = await fetch(
        `http://strangers-things.herokuapp.com/api/2202-FTB-PT-WEB-FT/posts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ post: form }),
        }
      );
      // resolve data
      const { success, data, error } = await response.json();

      // we leverage the history api to shunt our user elsewhere after successful POST action
      if (success) {
        history.push('/posts');
      } else {
        throw new Error('error creating post');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return <div>hi im new post</div>;
}
