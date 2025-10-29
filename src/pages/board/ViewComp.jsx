import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// Supabase 연결 설정
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function ViewComp() {
  const { num } = useParams(); // URL 파라미터 (글 번호)
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      // posts 테이블에서 id가 num인 데이터 가져오기
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', num)
        .single();

      if (error) {
        console.error('데이터 불러오기 실패:', error);
      } else {
        setPost(data);
      }
    };
    fetchPost();
  }, [num]);

  return (
    <div>
      <h3>글보기 / {num}</h3>
      {post ? (
        <div>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <small>작성자 ID: {post.userId}</small>
        </div>
      ) : (
        <p>게시글을 불러오는 중입니다...</p>
      )}
    </div>
  );
}

export default ViewComp;
