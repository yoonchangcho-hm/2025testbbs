import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import supabase from '../../utils/supabase';
import { useBoard } from '../../context/BoardContext';

function ModifyComp() {
  const { id } = useParams(); // URL에서 게시글 ID 추출
  const { getPosts } = useBoard(); //context api
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    name: '',
    content: '',
  });

  // 기존 게시글 불러오기
  useEffect(() => {
    const viewData = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', Number(id))
        .single();
      console.log(data);

      if (data) {
        setFormData({
          title: data.title || '',
          name: data.name || '',
          content: data.content || '',
        });
      }
    };
    viewData();
  }, []);

  // 입력값 변경 핸들러
  const eventHandler = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        //...prev,[e.target.title]:e.target.value
        ...prev,
        [name]: value,
      };
    });
  };

  // 수정 버튼 클릭 시
  const clickHandler = (e) => {
    e.preventDefault();

    // validata();

    const createWrite = async () => {
      const { data, error } = await supabase
        .from('posts')
        .update({
          title: formData.title,
          name: formData.name,
          content: formData.content,
        })
        .eq('id', Number(id))
        .select();

      if (!error) {
        alert('글수정성공');
        navigate(`/board/view/${id}`);
        getPosts(); // context api
      }
    };

    createWrite();
  };

  return (
    <div>
      <h3>글 수정</h3>
      <div>
        <form onSubmit={clickHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              제목
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={eventHandler}
              required
            />
          </div>
          <div>{formData.title}</div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={eventHandler}
              required
            />
          </div>
          <div>{formData.title}</div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              내용
            </label>
            <textarea
              id="content"
              name="content"
              className="form-control"
              rows="5"
              value={formData.content}
              onChange={eventHandler}
              required
            />
          </div>
          <div>{formData.title}</div>
          <div className="d-flex justify-content-end ">
            <div className="d-flex gap-2">
              <Link to={`/board/view/${id}`} className="btn btn-danger">
                취소
              </Link>
              <button className="btn btn-primary">글수정</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModifyComp;
