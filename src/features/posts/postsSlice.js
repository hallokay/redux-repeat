import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: "abd", content: "aslkfjl;kf;laksamf;dlkf" },
  { id: 2, title: "slice....", content: "aslkfjl;kf;laksamf;dlkf" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reduce(state, action) {
        // state.post =  
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          }

        }


      }
    }
  },

});


export const selectAllPosts = state => state.posts;

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
