import React from 'react';

import { useState, useEffect } from 'react';
import supabase from './utils/supabase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const { data: posts } = await supabase.from('posts').select();

      console.log(posts);
      setPosts(posts);
    }

    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id} / {post.title}/{post.name}/{post.content}
        </li>
      ))}
    </div>
  );
}
export default App;
