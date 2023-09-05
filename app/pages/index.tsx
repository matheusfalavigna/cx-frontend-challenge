import React, { useState } from "react";
import { ProductProvider, useProductContext } from "../hook/ProductContext";
import { searchProducts } from "@/services/products";
import { Header } from "@/components/Header/Header";
import { Dashboard } from "@/components/Dashboard/Dashboard";

function HomePage() {
  const { setProducts, setSelectedSort } = useProductContext();
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("relevance");

  async function heandleSearch(searchText: string) {
    setSearchText(searchText);
    setProducts(await searchProducts(searchText, sortOption));
  }

  function handleSortChange(newSortOption: string) {
    setSortOption(newSortOption);
    setSelectedSort(newSortOption);
  }

  return (
    <>
      <Header onSearch={heandleSearch} />
      <Dashboard
        searchText={searchText}
        sortOption={sortOption}
        onSortChange={handleSortChange}
      />
    </>
  );
}

function App() {
  return (
    <ProductProvider>
      <HomePage />
    </ProductProvider>
  );
}

export default App;
