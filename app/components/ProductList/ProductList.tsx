import React from "react";
import { useProductContext } from "@/hook/ProductContext";
import { Card } from "../Card/Card";
import { Container } from "./ProductList.style";

export function ProductList() {
  const { products } = useProductContext();

  return (
    <Container>
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
    </Container>
  );
}
