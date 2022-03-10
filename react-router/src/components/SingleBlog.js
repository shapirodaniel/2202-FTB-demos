import React from 'react';
import { useParams } from 'react-router-dom';

export default function SingleBlog() {
  const { blogId } = useParams();

  // we'd probably use blogId to fetch associated content via AJAX, inside of a useEffect fn
  // and we'd probably store that incoming data on useState pieces of state

  return <div>blog entry with id={blogId}</div>;
}
