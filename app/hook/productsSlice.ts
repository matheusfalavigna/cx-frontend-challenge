import { Product } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  products: Product[];
  searchText: string;
  sortOption: string;
} = {
  products: [],
  searchText: "",
  sortOption: "relevance",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
  },
});

export const { setProducts, setSearchText, setSortOption } =
  productsSlice.actions;
export default productsSlice.reducer;
