import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "abd", content: "aslkfjl;kf;laksamf;dlkf" },
  { id: 2, title: "slice....", content: "aslkfjl;kf;laksamf;dlkf" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});


export const selectAllPosts = state => state.posts;
export default postsSlice.reducer;
