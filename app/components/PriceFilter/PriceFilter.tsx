import React, { useEffect, useState } from "react";
import { getAvailableFilters } from "@/services/products";
import { Container, Content } from "./PriceFilter.style";
import Image from "next/image";
import RightArrow from "@/public/rightArrow.svg";
import { useProductContext } from "@/hook/ProductContext";

interface Filters {
  id: string;
  name: string;
  results: number;
}

interface PriceFilterProps {
  onPriceFilterChange: (priceFilter: string) => void;
}

export function PriceFilter({ onPriceFilterChange }: PriceFilterProps) {
  const {
    searchText,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    priceFilters,
    setPriceFilters,
  } = useProductContext();

  useEffect(() => {
    async function fetchAvailableFilters() {
      try {
        const availableFilters: Filters[] = await getAvailableFilters(
          searchText
        );

        setPriceFilters(availableFilters);
      } catch (error) {
        console.error("Error fetching available filters:", error);
      }
    }

    fetchAvailableFilters();
  }, [searchText, setPriceFilters]);

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(event.target.value);
  };

  const applyCustomPriceFilter = () => {
    const customFilter = `${minPrice}-${maxPrice}`;
    onPriceFilterChange(customFilter);
  };

  return (
    <>
      {priceFilters.length > 0 && (
        <Container>
          <span>Preço</span>
          <ul>
            {priceFilters.map((filter) => (
              <li key={filter.id}>
                <a href="#" onClick={() => onPriceFilterChange(filter.id)}>
                  {filter.name.replace("Hasta", "Até").replace("Más", "Mais")} (
                  {filter.results})
                </a>
              </li>
            ))}
          </ul>
          <Content>
            <input
              type="text"
              placeholder="Mínimo"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <span>-</span>
            <input
              type="text"
              placeholder="Máximo"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
            <button onClick={applyCustomPriceFilter}>
              <Image src={RightArrow} alt="Seta" width={20} height={20} />
            </button>
          </Content>
        </Container>
      )}
    </>
  );
}
