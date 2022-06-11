import { configureStore } from "@reduxjs/toolkit";
import regLoginReducer from "../src/pages/register-login/regLoginSlicer.js";

const store = configureStore({
  reducer: {
    regLogin: regLoginReducer,
  },
});

export default store;
