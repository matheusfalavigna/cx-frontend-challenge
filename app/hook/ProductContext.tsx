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

interface ProductContextProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

interface ProductProviderProps {
  children: React.ReactNode;
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const value = useMemo(() => ({ products, setProducts }), [products]);

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
