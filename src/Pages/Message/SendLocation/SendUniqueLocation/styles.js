import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
export const ContainerHeader = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 350px;
  height: 1.75rem;
  padding: 0.5rem 1rem;
  margin: 0.2rem 0 0.2rem 0;
  border-radius: 10px;
  border: 1px solid black;
  outline: none;
  font-size: 14px;
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
  margin: 1rem 5rem;

  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
