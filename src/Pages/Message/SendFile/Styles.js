import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 2rem;
  margin-left: 11.25rem;
  color: #fff;

  h1{
    margin-bottom: 10px;
    font-size: 30px;
  }

`;

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerHeader = styled.div`
  width: 100%;
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }
`;

export const Column2 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;