import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-left: 50px;
  background: #1d1d26;
`;
export const ContainerHeader = styled.div`
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  width: 100%;
  margin: 1rem 1.5rem 0.5rem 1.5rem;
  padding-top: 1.5rem;
`;

export const ContainerForm = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputNumber = styled.input`
  background: #15151c;
  font-family: "Poppins", sans-serif;
  width: 85%;
  height: 2.25rem;
  border-radius: 5px;
  padding: 1.5rem 1rem;
  margin: 1rem 1.5rem;
  border: 1px solid black;
  outline: none;
  font-size: 18px;
  color: #fff;
  ::placeholder {
    color: #5e5e5e;
  }
`;

export const InputMessage = styled.input`
  background: #15151c;
  font-family: "Poppins", sans-serif;
  width: 85%;
  height: 2.25rem;
  padding: 1.5rem 1rem;
  margin: 1rem 1.5rem;
  border-radius: 5px;
  border: 1px solid black;
  outline: none;
  font-size: 18px;
  margin-top: 10px;
  color: #fff;
  ::placeholder {
    color: #5e5e5e;
  }
`;

export const ButtonSend = styled.button`
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: rgb(255, 255, 255);
  outline: none;
  border-radius: 0.4rem;
  width: 85%;
  padding: 0.8rem 1rem;
  margin: 1rem 1.5rem 1.5rem 1.5rem;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  background: #179788;
  border: 1px solid rgb(4, 170, 109);
  margin-top: 10px;

  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
