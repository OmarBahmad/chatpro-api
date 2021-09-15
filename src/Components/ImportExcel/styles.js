import styled from "styled-components";

export const InputFile = styled.input`
  display: none;
`;

export const LabelFile = styled.label`
  font-weight: 500;
  color: rgb(255, 255, 255);
  outline: none;
  border-radius: 0.4rem;
  font-size: 16px;
  padding: 1rem 0 1rem 6rem;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  background: #27251f;
  border: 1px solid #27251f;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 1rem;
  }
`;
