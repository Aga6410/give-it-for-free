import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          <h2>{post.title}</h2>
          <h3>{post.description}</h3>
          <p>{post.items}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
