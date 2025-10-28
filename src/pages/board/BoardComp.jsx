import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ListComp from './ListComp';
import WriteComp from './WriteComp';
import ViewComp from './ViewComp';
import ModifyComp from './ModifyComp';

function BoardComp() {
  return (
    <div className="container">
      <div
        style={{ width: '100%', height: '200px' }}
        className="d-flex justify-content align-items-center bg-info rounded mb-3"
      >
        Board
      </div>
      <div>
        <Link to="..board/list" className="nav-link">
          글리스트
        </Link>
      </div>
      <div>
        <Link to="..board/write" className="nav-link">
          글작성
        </Link>
      </div>
      <Routes>
        <Route index element={<ListComp />}></Route>
        <Route path="list" element={<ListComp />}></Route>
        <Route path="write" element={<WriteComp />}></Route>
        <Route path="view/:id" element={<ViewComp />}></Route>
        <Route path="modify/:id" element={<ModifyComp />}></Route>
      </Routes>
    </div>
  );
}

export default BoardComp;
