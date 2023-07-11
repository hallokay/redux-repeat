import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 라우터
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 리덕스
import { store } from "./store/store";
import { Provider } from "react-redux";


import { fetchUsers } from './features/users/userSlice';
import { fetchPosts } from './features/posts/postsSlice';

//앱이 시작될 때 사용자 데이터를 미리 가져와서 redux스토어에 저장하는 역할을 한다.
//앱이 초기화 될때 필요한 데이터를 로드하고 이후 앱에서 이 데이터를 사용.
store.dispatch(fetchUsers());

// 여기서 불러와주면 list에서 따로 useEffect해서 fetch할 필요가 없음!!
store.dispatch(fetchPosts());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 리덕스 저장소 */}
    <Provider store={store}>
      {/* 라우터 */}
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
