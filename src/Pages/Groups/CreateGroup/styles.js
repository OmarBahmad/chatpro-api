import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
`;
export const ContainerHeader = styled.div`
  width: 100%;
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }
  margin-bottom: 15px;
`;

export const ContainerGroup = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 568px) {
    flex-direction: column;
  }
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vh;
  height: 100%;
  background-color: #1d1d26;
  color: #e2e2e2;
  padding: 20px 30px;
  border-radius: 5px;
  @media (max-width: 568px) {
    width: 100%;
  }
`;

export const ContainerHeaderCard = styled.div`
  width: 100%;
  h3 {
    font-size: 18px;
    font-weight: 500;
  }
  margin-bottom: 15px;
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
  @media (max-width: 568px) {
    width: 100%;
    font-size: 14px;
  }

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ButtonCreate = styled.button`
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
  margin-top: 15px;
  margin-bottom: 15px;
  @media (max-width: 568px) {
    width: 100%;
    font-size: 14px;
  }
  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ContainerCardNumber = styled.div`
  width: 65%;
  margin-left: 5rem;
  color: white;

  h3 {
    font-size: 18px;
    font-weight: 500;
  }
  @media (max-width: 568px) {
    width: 100%;
    margin-top: 2rem;
    margin-left: 0;
    color: white;
  }
`;

export const ContainerNumbers = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const UniqueNumbers = styled.span`
  font-size: 18px;
  margin-top: 10px;
  margin-right: 5px;

  @media (max-width: 568px) {
    font-size: 14px;
  }
`;
