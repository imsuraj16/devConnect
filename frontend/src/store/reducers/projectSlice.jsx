import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    loadProject: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export default projectSlice.reducer;
export const { loadProject } = projectSlice.actions;
