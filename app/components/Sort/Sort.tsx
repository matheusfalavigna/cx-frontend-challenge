import React from "react";
import { Container } from "./Sort.style";
import { useProductContext } from "@/hook/ProductContext";

interface SortProps {
  sortOptions: { id: string; name: string }[];
  onSortChange: (newSortOption: string) => void;
}

export function Sort({ sortOptions, onSortChange }: SortProps) {
  const { sortOption: selectedSort } = useProductContext();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortOption = event.target.value;
    onSortChange(newSortOption);
  };

  return (
    <Container>
      <label>Ordenar por </label>
      <select id="sortSelect" value={selectedSort} onChange={handleSortChange}>
        {sortOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </Container>
  );
}
