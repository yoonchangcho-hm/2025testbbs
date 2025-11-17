import React from 'react';

function SignUpComp() {
  return (
    <div className="bg-white w-[70%] sm:w-[480px] border rounded-2xl border-gray-200 shadow-xl p-8">
      <h2 className="text-2xl font-bold mb-4">회원가입</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm mb-2">이메일</label>
          <input
            type="email"
            className="border w-full rounded-lg border-gray-300 py-2 px-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-2">비밀번호</label>
          <input
            type="password"
            className="border w-full rounded-lg border-gray-300 py-2 px-2"
          />
        </div>
        <button className="w-full rounded-lg bg-green-500 text-white font-bold py-2 hover:bg-green-600 transition">
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignUpComp;
