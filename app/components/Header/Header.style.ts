import styled from "styled-components";

export const Container = styled.header`
  background: var(--yellow);
`;

export const Content = styled.div`
  max-width: 75rem;
  max-height: 4rem;
  margin: 0 auto;

  padding: 1rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 100%;
    max-width: 3rem;
    border-radius: 50%;
  }
`;
