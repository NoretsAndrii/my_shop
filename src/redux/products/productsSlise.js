import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "./productsOps";
import { selectSearch, selectSelectType } from "../filters/filtersSlice";

const handlePending = (state) => {
  state.items = [];
  state.isError = false;
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const productsSlise = createSlice({
  name: "products",
  initialState: {
    items: [],
    productDetails: null,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, handleRejected)
      .addCase(fetchProductById.pending, handlePending)
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload;
      })
      .addCase(fetchProductById.rejected, handleRejected);
  },
  reducers: {
    clearProductDetails(state) {
      state.productDetails = null;
    },
  },
});

export const productsReducer = productsSlise.reducer;

export const { clearProductDetails } = productsSlise.actions;

export const selectProducts = (state) => state.products.items;
export const selectIsLoading = (state) => state.products.isLoading;
export const selectIsError = (state) => state.products.isError;
export const SelectProductDetails = (state) => state.products.productDetails;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSelectType, selectSearch],
  (products, type, search) => {
    const searchProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    switch (type) {
      case "nameA_Z": {
        return searchProducts.toSorted((a, b) =>
          a.title.localeCompare(b.title)
        );
      }
      case "nameZ_A": {
        return searchProducts.toSorted((a, b) =>
          b.title.localeCompare(a.title)
        );
      }
      case "priceUp": {
        return searchProducts.toSorted((a, b) => a.price - b.price);
      }
      case "priceDown": {
        return searchProducts.toSorted((a, b) => b.price - a.price);
      }
      default:
        return searchProducts;
    }
  }
);
