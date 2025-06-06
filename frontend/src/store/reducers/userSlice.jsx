import { createSlice } from "@reduxjs/toolkit";

const initialState = {
//   user : null,
  users : []
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      state.users .push(action.payload);
    },

    getUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { loadUser,getUser } = userSlice.actions;

