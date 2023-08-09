import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home.js";
import entireReducer from "./modules/entire";
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
  },
});

export default store;
