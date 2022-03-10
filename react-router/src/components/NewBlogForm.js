import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

// protect form from being row flexed by Route-level Layout container
const FormLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Form = styled.form`
  & {
    display: flex;
    flex-direction: column;
    min-width: 375px;
    max-width: 500px;

    button {
      margin-top: 1em;
      padding: 0.5em;
      background-color: black;
      color: white;
      border-radius: 5px;
    }

    input[type='submit'] {
      height: 2.5em;
      padding: 0.5em;
      border-radius: 5px;
    }
  }
`;

const FormField = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 16px;
    margin-top: 1rem;

    :last-child {
      margin-top: 2rem;
    }

    label {
      margin-bottom: 0.5em;
      font-size: 12px;
    }

    textarea {
      resize: vertical;
      width: 100%;
      overflow: scroll;
      border: 1px solid lightgrey;
      padding: 0.5rem;
    }

    input {
      border: 1px solid lightgrey;
      width: 100%;
      border-radius: 4px;
      padding: 0.3rem 0.5rem;
    }

    + input[type='submit'] {
      margin-top: 3rem;
    }
  }
`;

export default function NewBlogForm() {
  const history = useHistory();

  const [form, setForm] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    form.date = new Date().toISOString();

    try {
      await fetch(`http://localhost:4000/blog`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      history.push('/blog');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormLayout>
      <h2>New Blog</h2>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>Content</label>
          <textarea
            style={{ borderRadius: '5px' }}
            name="content"
            value={form.content}
            onChange={handleChange}
          />
        </FormField>
        <input type="submit" value={'Publish'} />
        <button
          type="button"
          onClick={() => {
            history.push('/blog');
          }}
        >
          Cancel
        </button>
      </Form>
    </FormLayout>
  );
}
