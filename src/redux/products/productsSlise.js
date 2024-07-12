import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsOps";

const handlePending = () => {
  //   state.loading = true;
};

const handleRejected = () => {
  //   state.loading = false;
  //   state.error = action.payload;
};

const productsSlise = createSlice({
  name: "products",
  initialState: { items: [] },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // state.loading = false;
        // state.error = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, handleRejected);
  },
});

export const productsReducer = productsSlise.reducer;

export const selectProducts = (state) => state.products.items;
