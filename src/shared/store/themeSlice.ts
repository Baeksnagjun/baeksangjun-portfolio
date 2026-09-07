
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    backgroundColor: "#b9ef07",
  },
  reducers: {
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
  },
});

export const { setBackgroundColor } = themeSlice.actions;
export default themeSlice.reducer;