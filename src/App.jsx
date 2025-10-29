import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeComp from './pages/home/HomeComp';
import AboutComp from './pages/about/AboutComp';
import BoardComp from './pages/board/BoardComp';

function App() {
  return (
    <BrowserRouter>
      {/* 상단 네비게이션 */}
      <div className="container d-flex justify-content-between">
        <h1>
          <Link to="/" className="nav-link">
            LOGO
          </Link>
        </h1>
        <ul className="d-flex gap-3 menu">
          <li className="d-flex align-items-center">
            <NavLink to="/" className="nav-link">
              home
            </NavLink>
          </li>
          <li className="d-flex align-items-center">
            <NavLink to="/about" className="nav-link">
              about
            </NavLink>
          </li>
          <li className="d-flex align-items-center">
            <NavLink to="/board" className="nav-link">
              board
            </NavLink>
          </li>
        </ul>
      </div>

      {/* 라우트 영역 */}
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/about/*" element={<AboutComp />} />
        <Route path="/board/*" element={<BoardComp />} />
      </Routes>

      {/* 푸터 */}
      <div className="container">footer</div>
    </BrowserRouter>
  );
}

export default App;
