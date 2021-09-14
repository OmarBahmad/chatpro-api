import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  margin-top: 20px;
  margin-bottom: 30px;
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #1d1d26;
  color: #e2e2e2;
  padding: 20px 30px;
  border-radius: 5px;
`;

export const ContainerHeaderCard = styled.div`
  width: 100%;
  h3 {
    font-size: 18px;
    font-weight: 500;
  }
  margin-bottom: 15px;
`;


export const ContainerForm = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const InputContact = styled.input`
  width: 100%;
  height: 5rem;
  border-radius: 5px;
  background-color: #15151c;
  padding: 0.5rem 1rem;
  border: 1px solid #15151c;
  outline: none;
  font-size: 18px;
  margin-bottom: 20px;
  color: white;
`;

export const InputContactNumber = styled.input`
  width: 100%;
  height: 5rem;
  border-radius: 5px;
  background-color: #15151c;
  padding: 0.5rem 1rem;
  border: 1px solid #15151c;
  outline: none;
  font-size: 18px;
  margin-bottom: 20px;
  color: white;
`;
export const InputNumber = styled.input`
  width: 100%;
  height: 5rem;
  border-radius: 5px;
  background-color: #15151c;
  padding: 0.5rem 1rem;
  border: 1px solid #15151c;
  outline: none;
  font-size: 18px;
  margin-bottom: 20px;
  color: white;
`;
export const ButtonSend = styled.button`
  width: 100%;
  height: 5rem;
  font-size: 16px;
  border-radius: 5px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  outline: none;
  border-radius: 0.4rem;
  padding: 0.8rem 2.5rem;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  background: #179788;
  border: 1px solid rgb(4, 170, 109);
  margin-bottom: 15px;

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
