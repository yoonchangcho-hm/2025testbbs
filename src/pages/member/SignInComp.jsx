import React from 'react';
import { Link } from 'react-router-dom';

function SignInComp() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-xl shadow-sm p-6 aspect-[4/5] flex flex-col justify-between">
        {/* 헤더 */}
        <div className="text-center mb-3">
          <h2 className="text-xl font-bold text-gray-800">로그인</h2>
          <p className="text-xs text-gray-500">
            계정에 로그인하여 서비스를 이용하세요.
          </p>
        </div>

        {/* 로그인 폼 */}
        <form className="space-y-3">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
              이메일
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-700 mb-1"
            >
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-sm font-semibold py-2 rounded hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            로그인
          </button>
        </form>

        {/* 구글 로그인 버튼 */}
        <div className="mt-3">
          <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition">
            <svg className="w-4 h-4" viewBox="0 0 48 48">
              {/* Google SVG paths */}
              <path
                fill="#FFC107"
                d="M43.611 20.083H42V20H24v8h11.303C33.915 31.658 29.323 35 24 35c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.869 5.139 29.748 3 24 3 12.954 3 4 11.954 4 23s8.954 20 20 20 20-8.954 20-20c0-1.341-.138-2.651-.389-3.917z"
              />
              <path
                fill="#FF3D00"
                d="M6.306 14.691l6.571 4.818C14.297 15.097 18.789 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.869 5.139 29.748 3 24 3 16.318 3 9.656 7.337 6.306 14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24 43c5.251 0 10.053-2.007 13.682-5.289l-6.312-5.338C29.358 33.798 26.846 35 24 35c-5.298 0-9.874-3.317-11.289-7.946l-6.55 5.046C9.472 39.556 16.178 43 24 43z"
              />
              <path
                fill="#1976D2"
                d="M43.611 20.083H42V20H24v8h11.303a11.996 11.996 0 01-4.089 5.662l.003-.002 6.312 5.338C36.94 39.229 44 35 44 23c0-1.341-.138-2.651-.389-3.917z"
              />
            </svg>
            <span>Google로 계속하기</span>
          </button>
        </div>

        {/* 회원가입 링크 */}
        <div className="mt-3 text-xs text-center text-gray-500">
          계정이 없으신가요?{' '}
          <Link
            to="/member/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInComp;
