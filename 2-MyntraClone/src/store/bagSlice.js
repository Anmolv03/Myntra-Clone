import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: ["002"],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeitem: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
  },
});
export const bagActions = bagSlice.actions;
export default bagSlice;
