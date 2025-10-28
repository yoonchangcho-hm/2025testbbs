import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComp from './components/pages/homeComp';
import ListComp from './components/pages/listComp';
import ErrorComp from './components/pages/ErrorComp';
import MenuComp from './components/layout/MenuComp';
import ViewComp from './components/pages/ViewComp';

function App() {
  return (
    <BrowserRouter>
      <MenuComp>
        <div className="contianer">
          <Routes>
            <Route path="/" element={<HomeComp />} />
            <Route path="/" element={<ListComp />} />
            <Route path="/" element={<ViewComp />} />
            <Route path="/*" element={<ErrorComp />} />
          </Routes>
        </div>
      </MenuComp>
    </BrowserRouter>
  );
}

export default App;
