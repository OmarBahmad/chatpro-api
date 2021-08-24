import styled from "styled-components";

export const inputFile = styled.input`
    font-weight: 500;
    color: rgb(255, 255, 255);
    outline: none;
    border-radius: 0.4rem;
    padding: 0.8rem 2.5rem;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    background: rgb(4, 170, 109);
    border: 1px solid rgb(4, 170, 109);

  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;