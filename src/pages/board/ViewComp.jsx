import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../../utils/supabase';

function ViewComp() {
  const { id } = useParams(); // URL 파라미터 (글 번호)
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('id', Number(id))
          .single();

        if (error) throw error;
        setPost(data);
      } catch (err) {
        console.error('데이터 불러오기 실패:', err.message);
        setErrorMsg('글 불러오기 실패.');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div>
      <h3>글보기 / {id}</h3>
      {loading && <p>로딩 중...</p>}
      {errorMsg && <p>{errorMsg}</p>}
      {post && (
        <div>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <small>작성자 ID: {post.userId}</small>
        </div>
      )}
    </div>
  );
}

export default ViewComp;
