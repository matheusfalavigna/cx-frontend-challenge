import React, { useEffect } from "react";
import { Container, Content } from "./Dashboard.style";
import { Sort } from "../Sort/Sort";
import { ProductList } from "../ProductList/ProductList";
import { useProductContext } from "@/hook/ProductContext";
import { searchProducts } from "@/services/products";
import { PriceFilter } from "../PriceFilter/PriceFilter";

interface DashboardProps {
  onSortChange: (newSortOption: string) => void;
}

export function Dashboard({ onSortChange }: DashboardProps) {
  const {
    searchText,
    sortOption,
    selectedPriceFilter,
    setProducts,
    setSelectedPriceFilter,
  } = useProductContext();

  const sortOptions = [
    {
      id: "relevance",
      name: "Mais relevantes",
    },
    {
      id: "price_desc",
      name: "Maior preço",
    },
    {
      id: "price_asc",
      name: "Menor preço",
    },
  ];

  useEffect(() => {
    async function fetchProducts() {
      try {
        const filteredProducts = await searchProducts(
          searchText,
          sortOption,
          selectedPriceFilter
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProducts();
  }, [searchText, sortOption, selectedPriceFilter]);

  const handlePriceFilterChange = (priceFilter: string) => {
    setSelectedPriceFilter(priceFilter);
  };

  return (
    <Container>
      <Sort sortOptions={sortOptions} onSortChange={onSortChange} />
      <Content>
        <PriceFilter onPriceFilterChange={handlePriceFilterChange} />
        <ProductList />
      </Content>
    </Container>
  );
}
