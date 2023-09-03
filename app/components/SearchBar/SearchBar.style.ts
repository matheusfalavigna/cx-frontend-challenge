import styled from "styled-components";

export const Container = styled.form`
  margin: 0 auto;
  width: 100%;

  display: flex;

  input {
    width: 95%;
    height: 2rem;
    padding-inline-start: 1rem;

    border: none;
    border-radius: 0.1rem 0 0 0.1rem;
  }

  button {
    width: 5%;
    height: 2rem;
    border: none;
    border-radius: 0 0.1rem 0.1rem 0;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 1.2rem;
  }
`;
