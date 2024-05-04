import { configureStore } from "@reduxjs/toolkit";


import createmanu from "./data";

const store = configureStore({
  reducer: {
    manu: createmanu.reducer,
  },
});
export default store;