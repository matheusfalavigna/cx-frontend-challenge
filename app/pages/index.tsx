import React from "react";
import { ProductProvider, useProductContext } from "../hook/ProductContext";
import { searchProducts } from "@/services/products";
import { Header } from "@/components/Header/Header";
import { Dashboard } from "@/components/Dashboard/Dashboard";

function HomePage() {
  const { setProducts } = useProductContext();
  async function heandleSearch(searchText: string) {
    setProducts(await searchProducts(searchText));
  }

  return (
    <>
      <Header onSearch={heandleSearch} />
      <Dashboard />
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
