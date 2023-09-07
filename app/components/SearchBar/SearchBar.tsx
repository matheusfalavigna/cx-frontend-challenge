import React, { FormEvent, useState } from "react";
import SearchIcon from "@/public/serchIcon.svg";
import Image from "next/image";
import { Container } from "@/components/SearchBar/SearchBar.style";

interface SearchBarProps {
  onSearch(searchText: string): void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(searchText);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar produtos, marcas e muito mais..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">
        <Image src={SearchIcon} alt="Icone de pesquisa" />
      </button>
    </Container>
  );
}
