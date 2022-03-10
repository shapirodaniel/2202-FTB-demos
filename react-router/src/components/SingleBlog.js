import React from 'react';
import { useParams } from 'react-router-dom';

export default function SingleBlog() {
  const { blogId } = useParams();

  return <div>blog entry with id={blogId}</div>;
}
