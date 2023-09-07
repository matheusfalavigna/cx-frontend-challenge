import React from "react";
import { Container } from "./Card.style";
import Image from "next/image";
import FreeShipping from "@/public/freeShipping.svg";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    price: {
      amount: number;
    };
    installments: {
      quantity: number;
      amount: number;
    };
    address: {
      city_name: string;
    };
    picture: string;
    free_shipping: boolean;
  };
}

export function Card({ product }: ProductCardProps) {
  return (
    <Container>
      <li key={product.id}>
        <img src={product.picture} alt={product.title} className="img" />
        <div>
          <h2 className="priceAndShipping">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price.amount)}
            {product.free_shipping && (
              <Image
                src={FreeShipping}
                alt="Icone de frete grátis"
                width={18}
                height={18}
              />
            )}
          </h2>
          <strong>{product.title}</strong>
          <span>
            Em {product.installments.quantity} parcelas de{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.installments.amount)}
          </span>
        </div>
        <div className="address">
          <p>{product.address.city_name}</p>
        </div>
      </li>
    </Container>
  );
}
