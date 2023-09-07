import { Filters } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  priceFilters: Filters[];
  minPrice: string;
  maxPrice: string;
  selectedPriceFilter: string;
} = {
  priceFilters: [],
  minPrice: "",
  maxPrice: "",
  selectedPriceFilter: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPriceFilters: (state, action) => {
      state.priceFilters = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setSelectedPriceFilter: (state, action) => {
      state.selectedPriceFilter = action.payload;
    },
  },
});

export const {
  setPriceFilters,
  setMinPrice,
  setMaxPrice,
  setSelectedPriceFilter,
} = filtersSlice.actions;
export default filtersSlice.reducer;
