import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ListComp from './ListComp';
import WriteComp from './WriteComp';
import ViewComp from './ViewComp';
import ModifyComp from './ModifyComp';

function BoardComp() {
  return (
    <div className="container">
      {/* 상단 배너 */}
      <div
        style={{ width: '100%', height: '200px' }}
        className="d-flex justify-content-center align-items-center bg-info rounded mb-3"
      >
        <h2 className="text-white">Board</h2>
      </div>

      {/* 네비게이션 */}
      <nav className="mb-3">
        <Link to="list" className="nav-link d-inline-block me-3">
          글리스트
        </Link>
        <Link to="write" className="nav-link d-inline-block">
          글작성
        </Link>
      </nav>

      {/* 라우팅 영역 */}
      <Routes>
        <Route index element={<ListComp />} />
        <Route path="list" element={<ListComp />} />
        <Route path="write" element={<WriteComp />} />
        <Route path="view/:id" element={<ViewComp />} />
        <Route path="modify/:id" element={<ModifyComp />} />
      </Routes>
    </div>
  );
}

export default BoardComp;
