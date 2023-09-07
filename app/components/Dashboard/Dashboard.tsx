import React, { useEffect } from "react";
import { Container, Content } from "./Dashboard.style";
import { Sort } from "../Sort/Sort";
import { ProductList } from "../ProductList/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { searchProducts } from "@/services/products";
import { PriceFilter } from "../PriceFilter/PriceFilter";
import { setProducts } from "@/hook/productsSlice";
import { setSelectedPriceFilter } from "@/hook/filtersSlice";

interface DashboardProps {
  onSortChange: (newSortOption: string) => void;
}

export function Dashboard({ onSortChange }: DashboardProps) {
  const dispatch = useDispatch();
  const { searchText, sortOption } = useSelector(
    (state: any) => state.products
  );
  const { selectedPriceFilter } = useSelector((state: any) => state.filters);

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
        dispatch(setProducts(filteredProducts));
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProducts();
  }, [searchText, sortOption, selectedPriceFilter, dispatch]);

  const handlePriceFilterChange = (priceFilter: string) => {
    dispatch(setSelectedPriceFilter(priceFilter));
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
