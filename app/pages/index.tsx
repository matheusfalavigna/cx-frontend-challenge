import React from "react";
import { searchProducts } from "@/services/products";
import { Header } from "@/components/Header/Header";
import { Dashboard } from "@/components/Dashboard/Dashboard";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "@/hook/store";
import {
  setProducts,
  setSearchText,
  setSortOption,
} from "@/hook/productsSlice";

import { Product } from "@/types/types";

interface RowStateWithProducts extends Product {
  products: {
    sortOption: string;
  };
}

function HomePage() {
  const dispatch = useDispatch();
  const { sortOption } = useSelector(
    (state: RowStateWithProducts) => state.products
  );

  async function heandleSearch(searchText: string) {
    dispatch(setSearchText(searchText));
    dispatch(setProducts(await searchProducts(searchText, sortOption)));
  }

  function handleSortChange(newSortOption: string) {
    dispatch(setSortOption(newSortOption));
  }

  return (
    <>
      <Header onSearch={heandleSearch} />
      <Dashboard onSortChange={handleSortChange} />
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
