import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 30px;
  display: flex;
  flex-direction: row;

  @media (max-width: 1280px) {
    width: 65%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
    flex-direction: column;
  }
`;

export const ImportMessage = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const ButtonFile = styled.button`
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

  @media (max-width: 1280px) {
    height: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0;
  }

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const CardQuant = styled.div`
  margin-top: 1rem;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ContainerCardAll = styled.div`
  width: 50%;
  height: 60%;

  @media (max-width: 1280px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 85%;
  background-color: #1d1d26;
  color: #e2e2e2;
  padding: 20px 30px;
  border-radius: 5px;
  margin-right: 20px;

  @media (max-width: 1280px) {
    margin-right: 0px;
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerHeaderCard = styled.div`
  width: 100%;
  margin-bottom: 15px;

  h3 {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const ContainerResp = styled.div`
  display: flex;
  flex-direction: column;
  color: #e2e2e2;
  width: 35%;
  margin-left: 25px;

  @media (max-width: 1280px) {
    width: 50%;
    margin-left: 5px;

    button {
      height: 10rem;
    }
  }
  @media (max-width: 768px) {
    margin-top: 15px;
    width: 100%;
    button {
      height: 7rem;
    }
  }
`;
