import { createSlice } from "@reduxjs/toolkit";

const cartSlise = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addProduct(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.items.push({ ...action.payload, ...{ amount: 1 } });
      } else {
        state.items[index].amount += 1;
      }
    },
    changeAmountProduct(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (action.payload.type === "plus") {
        state.items[index].amount += 1;
      } else {
        if (state.items[index].amount > 1) {
          state.items[index].amount -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
    deleteProduct(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
    clerarCart(state) {
      state.items = [];
    },
  },
});

export const cartReducer = cartSlise.reducer;

export const { addProduct, changeAmountProduct, deleteProduct, clerarCart } =
  cartSlise.actions;

export const selectCart = (state) => state.cart.items;
