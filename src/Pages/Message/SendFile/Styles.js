import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding-left: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  width: 35%;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Column2 = styled.div`
  display: flex;
  justify-content: center;
  width: 65%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
