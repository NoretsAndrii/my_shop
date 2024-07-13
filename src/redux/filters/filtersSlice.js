import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    selectType: "",
  },
  reducers: {
    addSelectType(state, action) {
      state.selectType = action.payload;
    },
    addSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;

export const { addSelectType, addSearch } = filtersSlice.actions;

export const selectSelectType = (state) => state.filters.selectType;
export const selectSearch = (state) => state.filters.search;
