import logoImg from "@/public/logo.svg";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import Image from "next/image";
import { Container, Content } from "@/components/Header/Header.style";

interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

export function Header({ onSearch }: SearchBarProps) {
  return (
    <Container>
      <Content>
        <Image src={logoImg} alt="Icone Mercado Livre" />
        <SearchBar onSearch={onSearch} />
      </Content>
    </Container>
  );
}
