import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvailableFilters } from "@/services/products";
import { Container, Content } from "./PriceFilter.style";
import Image from "next/image";
import RightArrow from "@/public/rightArrow.svg";
import { setMaxPrice, setMinPrice, setPriceFilters } from "@/hook/filtersSlice";
import { Filters } from "@/types/types";

interface RowStateWithFilters extends Filters {
  filters: {
    searchText: string;
    priceFilters: Filters[];
    minPrice: string;
    maxPrice: string;
  };
}

interface PriceFilterProps {
  onPriceFilterChange: (priceFilter: string) => void;
}

export function PriceFilter({ onPriceFilterChange }: PriceFilterProps) {
  const dispatch = useDispatch();
  const { priceFilters, minPrice, maxPrice } = useSelector(
    (state: RowStateWithFilters) => state.filters
  );
  const { searchText, products } = useSelector((state: any) => state.products);

  useEffect(() => {
    async function fetchAvailableFilters() {
      try {
        const availableFilters: Filters[] = await getAvailableFilters(
          searchText
        );

        dispatch(setPriceFilters(availableFilters));
      } catch (error) {
        console.error("Error fetching available filters:", error);
      }
    }
    fetchAvailableFilters();
  }, [searchText, dispatch]);

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMinPrice(event.target.value));
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxPrice(event.target.value));
  };

  const applyCustomPriceFilter = () => {
    const customFilter = `${minPrice || "*"}-${maxPrice || "*"}`;
    onPriceFilterChange(customFilter);
  };

  return (
    <>
      {products.length > 0 && (
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
