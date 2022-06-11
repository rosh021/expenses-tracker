import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  response: {},
  transaction: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },

    setResponse: (state, { payload }) => {
      state.response = payload;
      state.isLoading = false;
    },

    setTransaction: (state, { payload }) => {
      state.transaction = payload;
    },
  },
});

const { reducer, actions } = dashboardSlice;

export const { setIsLoading, setResponse, setTransaction } = actions;

export default reducer;
