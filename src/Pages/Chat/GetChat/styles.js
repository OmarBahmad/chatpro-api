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

export const ButtonCreate = styled.button`
  width: 50vh;
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
    width: 97%;
    font-size: 14px;
  }
`;

export const ContainerExcel = styled.div`
  width: 51vh;
  margin-top: 1rem;
  @media (max-width: 568px) {
    width: 100%;
    font-size: 14px;
  }
`;
