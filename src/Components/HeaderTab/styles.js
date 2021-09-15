import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
`;

export const ContainerItens = styled.div`
  width: 12%;
  height: 4rem;
  background-color: #15151c;
  text-align: center;
  border: 1px solid #9a9a9a;
  border-radius: 3px;
  cursor: pointer;

  a {
    text-decoration: none;
    font-size: 20px;
    color: white;
    text-decoration: none;
    padding: 15px;
    &.active {
      color: #179788 !important;
    }
  }

  :hover {
    background-color: white;
    span {
      color: #15151c;
    }
  }
  @media (max-width: 1280px) {
    width: 17%;
  }

  @media (max-width: 864px) {
    width: 20%;
    height: 3.5rem;

    a {
      padding: 0;
      font-size: 16px;
    }
  }

  @media (max-width: 568px) {
    height: 2.5rem;
    a {
      font-size: 10px;
    }
  }
`;
