import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;

  button {
    width: 100%;
    height: 5.5rem;
    font-size: 14px;
    border-radius: 5px;
    font-weight: 500;
    color: 000;
    outline: none;
    border-radius: 0.4rem;
    padding: 0.8rem 2.5rem;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    background: #fff;
    border: 1px solid #fff;
    margin-bottom: 15px;
    :hover {
      background-color: #898794;
      border: #898794;
      color: #fff;
    }
    @media (max-width: 414px) {
      font-size: 11px;
      height: 6.5rem;
    }
  }
`;