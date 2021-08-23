import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;

  button {
    font-weight: 500;
    color: black;
    outline: none;
    border-radius: 0.4rem;
    padding: 0.8rem 1.5rem;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    background: white;
    border: 1px solid #27251f;
    :hover {
      color: rgb(255, 255, 255);
      background: #27251f;
    }
  }
`;
