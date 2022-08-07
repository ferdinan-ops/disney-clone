import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import useReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    user: useReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
