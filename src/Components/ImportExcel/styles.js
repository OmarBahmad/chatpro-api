import styled from 'styled-components';

export const InputFile = styled.input`
  display: none;
`;

export const LabelFile = styled.label`
  font-weight: 500;
  color: rgb(255, 255, 255);
  outline: none;
  border-radius: 0.4rem;
  font-size: 16px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  background: #27251f;
  border: 1px solid #27251f;
  height: 4.5rem;
  text-align: center;
  padding-top: 1rem;

  @media (max-width: 984px) {
    font-size: 14px;
    height: 5.5rem;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding-top: 1.5rem;
  }
  @media (max-width: 468px) {
    font-size: 12px;
  }
`;
