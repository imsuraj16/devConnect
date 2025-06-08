import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUserId: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setCurrentUserId: (state, action) => {
      state.currentUserId = action.payload;
    },
  },
});

export const { setUsers, setCurrentUserId } = userSlice.actions;
export default userSlice.reducer;
