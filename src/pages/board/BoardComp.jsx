import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import ListComp from './ListComp';
import WriteComp from './WriteComp';
import ViewComp from './ViewComp';
import ModifyComp from './ModifyComp';

import { BoardProvider } from '../../context/BoardContext';

function BoardComp() {
  // const [posts, setPosts] = useState([]);

  // const getPosts = async () => {
  //   const { data, error } = await supabase
  //     .from('posts')
  //     .select()
  //     .order('id', { ascending: false });
  //   console.log(data);
  //   setPosts(data);
  // };

  // useEffect(() => {
  //   // async function getPosts() {
  //   //   const { data: posts } = await supabase.from('posts').select();

  //   //   console.log(posts);
  //   //   setPosts(posts);
  //   // }

  //   getPosts();
  // }, []);
  return (
    //  자료를 BoardContext로 옮기고  <BoardProvider></BoardProvider> 감쌈
    <BoardProvider>
      <div className="container">
        <div
          style={{ width: '100%', height: '200px' }}
          className="d-flex justify-content-center align-items-center bg-info rounded mb-3"
        >
          Board
        </div>

        <div className="d-flex justify-content-center gap-3">
          <Link to="/board/list" className="nav-link">
            글리스트
          </Link>
          <Link to="/board/write" className="nav-link">
            글작성
          </Link>
        </div>
        <Routes>
          {/* 글 게시판 */}
          <Route index element={<ListComp />} />
          <Route path="list" element={<ListComp />} />
          <Route path="write" element={<WriteComp />} />
          <Route path="view/:id" element={<ViewComp />} />
          <Route path="modify/:id" element={<ModifyComp />} />

          {/* props로 내렸던 자료들 삭제 */}
          {/* <Route index element={<ListComp posts={posts} />}></Route>
          <Route path="list" element={<ListComp posts={posts} />}></Route>
          <Route
            path="write"
            element={<WriteComp getPosts={getPosts} />}
          ></Route>
          <Route
            path="view/:id"
            element={<ViewComp getPosts={getPosts} />}
          ></Route> */}
          {/*- <Route path="view" element={<ViewComp />}></Route>-/}-
          {/* <Route
            path="modify/:id"
            element={<ModifyComp getPosts={getPosts} />}
          ></Route> */}
        </Routes>
      </div>
    </BoardProvider>
  );
}

export default BoardComp;
