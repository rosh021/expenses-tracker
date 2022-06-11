import { configureStore } from "@reduxjs/toolkit";
import regLoginReducer from "../src/pages/register-login/regLoginSlicer.js";
import dashboardSlice from "../src/pages/dashboard/dashboardSlicer";
const store = configureStore({
  reducer: {
    regLogin: regLoginReducer,
    dashboard: dashboardSlice,
  },
});

export default store;
