import React from "react";
import { Container } from "./Dashboard.style";
import { Card } from "../Card/Card";
import { useProductContext } from "@/hook/ProductContext";

const ProductList = () => {
  const { products } = useProductContext();

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

export function Dashboard() {
  return (
    <Container>
      <ProductList />
    </Container>
  );
}
