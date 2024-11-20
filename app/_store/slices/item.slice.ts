import { createSlice } from "@reduxjs/toolkit";

const itemSlicer = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    setItems(state, { payload }) {
      state.items = payload;
    },
    unsetItems(state) {
      state.items = [];
    },
  },
});

export const { setItems, unsetItems } = itemSlicer.actions;

export default itemSlicer.reducer;
