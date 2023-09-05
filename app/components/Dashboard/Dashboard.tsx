import React, { useEffect } from "react";
import { Container } from "./Dashboard.style";
import { Card } from "../Card/Card";
import { useProductContext } from "@/hook/ProductContext";
import { Sort } from "../Sort/Sort";
import { searchProducts } from "@/services/products";

interface DashboardProps {
  searchText: string;
  sortOption: string;
  onSortChange: (newSortOption: string) => void;
}

interface ProductListProps {
  searchText: string;
  sortOption: string;
}

const ProductList = ({ searchText, sortOption }: ProductListProps) => {
  const { products, setProducts } = useProductContext();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const sortedProducts = await searchProducts(searchText, sortOption);
        setProducts(sortedProducts);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProducts();
  }, [searchText, sortOption]);

  return (
    <ul>
      {products.map((product, productIndex) => (
        <div className="container">
          <Card key={product.id} product={product} />
          {productIndex !== products.length - 1 && (
            <div className="divider"></div>
          )}
        </div>
      ))}
    </ul>
  );
};

export function Dashboard({
  searchText,
  sortOption,
  onSortChange,
}: DashboardProps) {
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

  return (
    <Container>
      <Sort
        sortOptions={sortOptions}
        selectedSort={sortOption}
        onSortChange={onSortChange}
      />
      <ProductList searchText={searchText} sortOption={sortOption} />
    </Container>
  );
}
