import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 라우터
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 리덕스
import { store } from "./store/store";
import { Provider } from "react-redux";

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
