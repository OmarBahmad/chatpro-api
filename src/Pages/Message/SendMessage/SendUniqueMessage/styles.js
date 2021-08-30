import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const ContainerHeader = styled.div`
  width: 100%;
`;

export const InputNumber = styled.input`
  width: 18%;
  height: 1.75rem;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  outline: none;
  font-size: 18px;
`;

export const InputMessage = styled.input`
  width: 30%;
  height: 1.75rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-left: 1rem;
  border: 1px solid black;
  outline: none;    
  font-size: 18px;
`;

export const ButtonSend = styled.button`
  font-weight: 500;
  color: rgb(255, 255, 255);
  outline: none;
  border-radius: 0.4rem;
  padding: 0.8rem 2.5rem;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  background: rgb(4, 170, 109);
  border: 1px solid rgb(4, 170, 109);
  margin-left: 1rem;

  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
