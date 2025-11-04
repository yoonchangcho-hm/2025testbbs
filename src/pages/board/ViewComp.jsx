import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import supabase from '../../utils/supabase';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

function ViewComp() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [view, setView] = useState({});

  useEffect(() => {
    const viewData = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', Number(id))
        .single();

      console.log(data);
      setView(data);
    };
    viewData();
  }, [id]);

  const handleDelete = async () => {
    const confirm = window.confirm('정말 삭제하시겠습니까?');
    if (!confirm) return;

    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', Number(id));

    if (!error) {
      alert('삭제 완료!');
      navigate('/board/list');
    } else {
      alert('삭제 실패!');
    }
  };

  return (
    <div>
      <h3>글보기</h3>
      <hr />
      <div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <h4>{view.title}</h4>
          <div>
            {view.name} /{' '}
            {dayjs(view.created_at).format('YY.MM.DD (ddd) HH:mm')}
          </div>
        </div>
        <hr />
        <p style={{ minHeight: '200px' }}>{view.content}</p>
      </div>
      <div className="d-flex justify-content-end">
        <div className="d-flex gap-2">
          <Link to="/board/list" className="btn btn-primary">
            리스트
          </Link>
          <Link to={`/board/modify/${id}`} className="btn btn-info">
            수정
          </Link>
          <button className="btn btn-danger" onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewComp;
