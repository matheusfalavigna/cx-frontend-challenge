import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 1rem;

  li {
    width: 100%;
    list-style: none;
    max-width: 53.125rem;
    background: var(--background-card);

    display: flex;
    justify-content: space-between;

    div {
      width: 100%;
      padding: 1rem 0 0 1rem;
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 1rem;
      color: var(--text);

      h2 {
        font-size: 1.5rem;
        font-weight: 700;
      }

      strong {
        font-size: 1.3rem;
        font-weight: 400;
      }

      span {
        color: var(--text-installments);
      }

      .priceAndShipping {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
      }
    }

    .img {
      width: 17%;
      border-radius: 0.5rem;
    }

    .address {
      max-width: 20rem;
      flex-direction: row-reverse;
      margin: 1.2rem 6rem 0 0;
      color: var(--text-adress);

      p {
        font-size: 0.8rem;
      }
    }
  }
`;
