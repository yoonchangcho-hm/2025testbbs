import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SignInComp from './SignInComp';
import SignUpComp from './SignUpComp';

function MemberComp() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="mb-6 flex gap-4">
        <Link to="signin" className="text-blue-600 hover:underline">
          로그인
        </Link>
        <Link to="signup" className="text-blue-600 hover:underline">
          회원가입
        </Link>
      </div>
      <Routes>
        <Route index element={<SignInComp />} />
        <Route path="signin" element={<SignInComp />} />
        <Route path="signup" element={<SignUpComp />} />
      </Routes>
    </div>
  );
}

export default MemberComp;
