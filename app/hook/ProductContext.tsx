import React, { createContext, useContext, useMemo, useState } from "react";

export interface Product {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  installments: {
    quantity: number;
    amount: number;
  };
  address: {
    state_name: string;
    city_name: string;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface Filters {
  id: string;
  name: string;
  results: number;
}

interface ProductContextProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  selectedPriceFilter: string;
  setSelectedPriceFilter: React.Dispatch<React.SetStateAction<string>>;
  priceFilters: Filters[];
  setPriceFilters: React.Dispatch<React.SetStateAction<Filters[]>>;
  minPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
}

interface ProductProviderProps {
  children: React.ReactNode;
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("relevance");
  const [priceFilters, setPriceFilters] = useState<Filters[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [selectedPriceFilter, setSelectedPriceFilter] = useState<string>("");

  const value = useMemo(
    () => ({
      products,
      setProducts,
      sortOption,
      setSortOption,
      searchText,
      setSearchText,
      selectedPriceFilter,
      setSelectedPriceFilter,
      priceFilters,
      setPriceFilters,
      minPrice,
      setMinPrice,
      maxPrice,
      setMaxPrice,
    }),
    [
      products,
      searchText,
      sortOption,
      selectedPriceFilter,
      priceFilters,
      minPrice,
      maxPrice,
    ]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProductContext deve ser usado dentro de um ProductProvider"
    );
  }
  return context;
};
