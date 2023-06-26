import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  platforms: [
    'All', 'PS5', 'PS4', 'Xbox Series X|S', 'PC', 'Nintendo Switch'
  ]
};

const platformSlice = createSlice({
  name: "platforms",
  initialState,
  reducers: {
    addPlatform(state, action) {
      state.platforms.push(action.payload)
    }
  },
});

export const {
  addPlatform
} = platformSlice.actions;
export default platformSlice.reducer;
