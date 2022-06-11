import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  response: {},
  isLoading: false,
};

const regLoginSlice = createSlice({
  name: "regLogin",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },

    setResponse: (state, action) => {
      state.response = action.payloads;
      state.isLoading = true;
    },
  },
});

const { reducer, actions } = regLoginSlice;
export const { setIsLoading, setResponse } = actions;

export default reducer;
