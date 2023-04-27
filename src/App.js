import { Navigate, Route, Routes } from "react-router-dom";

import { PostsList } from "./features/index";
// import PostsList from "./features/posts/PostsList";
function App() {
  return (
    <>
      <PostsList />
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        {/* <Route index element={<PostList />} /> */}

        {/* <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route> */}
        {/* <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route> */}

        {/* 에러일때 기본 페이지로 보내줌 */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
