import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ListComp from './ListComp';
import WriteComp from './WriteComp';
import ViewComp from './ViewComp';
import ModifyComp from './ModifyComp';
import supabase from '../../utils/supabase';

function BoardComp() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const { data } = await supabase.from('posts').select('*');
        console.log(data);
        setPosts(data.slice(0, 10));
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <div className="container">
      {/* 상단 배너 */}
      <div
        style={{ width: '100%', height: '200px' }}
        className="d-flex justify-content-center align-items-center bg-info rounded mb-3"
      >
        Board
      </div>
      <div>{loading ? <p>로딩중입니다.</p> : <p>로딩완료</p>}</div>

      {/* 네비게이션 */}
      <nav className="d-flex justify-content-center gap-3">
        <Link to="/board/list" className="nav-link ">
          글리스트
        </Link>
        <Link to="/board/write" className="nav-link ">
          글작성
        </Link>
      </nav>

      {/* 라우팅 영역 */}
      <Routes>
        <Route index element={<ListComp posts={posts} />}></Route>
        <Route path="list" element={<ListComp posts={posts} />}></Route>
        <Route path="write" element={<WriteComp />}></Route>
        <Route path="view/:id" element={<ViewComp />}></Route>
        <Route path="modify/:id" element={<ModifyComp />}></Route>
      </Routes>
    </div>
  );
}

export default BoardComp;
