import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AllBlogLayout = styled.section`
  display: grid;
  grid-gap: 0.5rem;
  max-width: 900px;

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const NewBlogBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  background-color: green;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 22px;
  border: transparent;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const BlogContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
  border: 1px solid black;
  padding: 1rem;
  min-height: 300px;
  max-height: 300px;
`;

const ReadBtn = styled(Link)`
  width: 80px;
  padding: 0.3rem 0.5rem;
  background-color: black;
  border: transparent;
  color: white;
  font-size: 22px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
`;

const formatTitle = (title) => {
  return title.slice(0, 50) + (title.length > 50 ? '...' : '');
};

const formatContent = (content) => {
  return content.slice(0, 100) + (content.length > 150 ? '...' : '');
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`http://localhost:4000/blog`);
        const blogs = await response.json();

        // sorting blogs by date
        blogs.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

        setBlogs(blogs);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <NewBlogBtn to="/blog/new">+ add a new blog entry</NewBlogBtn>
      <AllBlogLayout>
        {blogs.map(({ id, title, date, content }) => (
          <BlogContainer key={id}>
            <span>{formatDate(date)}</span>
            <h3>{formatTitle(title)}</h3>
            <p>{formatContent(content)}</p>
            <ReadBtn to={`/blog/${id}`}>read</ReadBtn>
          </BlogContainer>
        ))}
      </AllBlogLayout>
    </>
  );
}
