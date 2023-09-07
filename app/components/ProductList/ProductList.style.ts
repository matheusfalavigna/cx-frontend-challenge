import styled from "styled-components";

export const Container = styled.div`
  ul {
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    background: white;

    .container {
      padding: 1rem;
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    margin: 0 auto;
    background: var(--gray);
  }
`;
