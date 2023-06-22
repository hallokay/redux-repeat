import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { PostsList, AddPosts, PostDetail, EditPost } from "./features/index";
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsList />} />

          <Route path="post">
            <Route index element={<AddPosts />} />
            <Route path=":postId" element={<PostDetail />} />
            <Route path="edit/:postId" element={<EditPost />} />
          </Route>
          {/* <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route> */}

          {/* 에러일때 기본 페이지로 보내줌 */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
