import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { id: 0, name: "유지민" },
    { id: 1, name: "장원영" },
    { id: 2, name: "김채원" },
    { id: 3, name: "안유진" },

]

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = state => state.users;

export default userSlice.reducer;

