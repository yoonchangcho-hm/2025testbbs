import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// 환경변수에서 Supabase 연결 정보 가져오기
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function ListComp() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // 예: "posts"라는 테이블에서 모든 데이터 가져오기
      const { data, error } = await supabase.from('posts').select('*');
      if (error) {
        console.error('데이터 불러오기 실패:', error);
      } else {
        setPosts(data);
      }
    };
    fetchPosts();
  }, []);

  if (!posts.length) {
    return <p>게시글이 없습니다.</p>;
  }

  return (
    <div>
      <h3>글리스트</h3>
      <ul>
        {posts.map((item, i) => (
          <li key={item.id || i}>
            {i + 1}. {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListComp;
