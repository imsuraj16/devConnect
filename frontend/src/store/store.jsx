import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import projectSlice from "./reducers/projectSlice"


export const store = configureStore({
  reducer: {
    user: userSlice,
    project : projectSlice
  },
});
