import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;
export const ContainerHeader = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

export const ContainerForm = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputNumber = styled.input`
  width: 80%;
  height: 2.25rem;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  outline: none;
  font-size: 18px;
`;

export const InputMessage = styled.input`
  width: 80%;
  height: 2.25rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid black;
  outline: none;
  font-size: 18px;
  margin-top: 10px;
`;

export const ButtonSend = styled.button`
  font-weight: 500;
  color: rgb(255, 255, 255);
  outline: none;
  border-radius: 0.4rem;
  width: 50%;
  height: 2.5rem;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  background: rgb(4, 170, 109);
  border: 1px solid rgb(4, 170, 109);
  margin-top: 10px;

  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
