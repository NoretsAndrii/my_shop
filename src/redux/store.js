import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsSlise";
import { cartReducer } from "./cart/cartSlice";
import { filtersReducer } from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    filters: filtersReducer,
  },
});
