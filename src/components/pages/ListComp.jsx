import React from 'react';

function ListComp() {
  return (
    <div>
      <h3>post</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} / {post.name} / {post.content}/{' '}
            {dayjs(post.created_at).format('YYYY-MM-DD')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListComp;
