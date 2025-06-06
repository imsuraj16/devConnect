import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userslice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
