import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;

  label {
    font-size: 1rem;
    color: var(--text);
    font-weight: 700;
  }

  select {
    border: none;
    background: var(--background);
    color: var(--text);
    font-size: 1rem;
    margin-left: 0.2rem;
    cursor: pointer;
    outline: none;

    &:hover {
      color: var(--blue);
    }

    option {
      background: var(--background-card);
      color: var(--text);
      font-size: 1rem;
      outline: none;
      cursor: pointer;

      &:checked {
        color: var(--blue);
      }
    }
  }

  @media (max-width: 320px) {
    position: relative;
    top: 9rem;
  }
`;
