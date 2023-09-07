import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 278px;
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.2rem;
    color: var(--text);
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  ul {
    list-style: none;

    li {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      cursor: pointer;

      a {
        font-weight: 400;
        color: var(--text);
        text-decoration: none;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 6rem;
    height: 1.5rem;
    padding: 0.5rem 0.5rem;
    border: 1px solid var(--text-adress);
    border-radius: 0.25rem;
    color: var(--text-adress);
    font-size: 1rem;
    font-weight: 400;
    background: var(--background-card);

    &::placeholder {
      color: var(--text);
    }
  }

  button {
    width: 2rem;
    height: 2rem;
    border: none;
    background: var(--background);
    cursor: pointer;

    img {
      &:hover {
        filter: brightness(0.8);

        transition: filter 0.2s;
      }
    }
  }
`;
