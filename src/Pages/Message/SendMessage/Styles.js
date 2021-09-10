import styled from "styled-components";

export const Container = styled.div`
color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  padding-left: 0.5rem;
  background: #15151C;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  width: 40%;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Column2 = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
