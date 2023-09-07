import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import filtersReducer from "./filtersSlice";

const rootReducer = {
  products: productsReducer,
  filters: filtersReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
