import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const heartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    toggleHeart: (state, action) => {
      const isInWishlist = state.value.some(
        (el) => el.id === action.payload.id
      );
      if (isInWishlist) {
        state.value = state.value.filter((el) => el.id !== action.payload.id);
      } else {
        state.value.push(action.payload);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});

export const { toggleHeart } = heartSlice.actions;
export default heartSlice.reducer;
