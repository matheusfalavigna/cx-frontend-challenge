import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }

  @media (max-width: 320px) {
    padding: 0.5rem 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`;
