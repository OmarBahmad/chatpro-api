import styled from 'styled-components';

export const ContainerUp = styled.div`
  width: 100%;
  height: 100vh;
  background: #15151c;
  display: flex;
  justify-content: center;
`;

export const ContainerLogin = styled.div`
  width: 100%;
  margin: auto;
  padding: 0px 15px;
  display: flex;
  height: 100%;
  background: #1d1d26;
  flex-direction: column;
  h2 {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 100;
    margin: 1rem 0.5rem 0.5rem 0.5rem;
    font-family: 'Poppins', sans-serif;
  }
`;
export const ContainerPadding = styled.div`
  min-width: 20%;
  max-width: 50%;
  display: flex;
  margin: auto;
`;
export const Input = styled.input`
  font-family: 'Poppins', sans-serif;
  border: 0;
  padding: 1rem 1rem;
  margin: 0.5rem 0.5rem;
  width: 95%;
  background: #15151c;
  color: #fff;
  &::placeholder {
    color: #5e5e5e;
    text-align: left;
  }
  :focus {
    outline: 0;
  }
`;

export const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 0 250px #000;
  width: 95%;
  padding: 1rem 1rem;
  margin: 0.5rem 0.5rem 1.5rem 0.5rem;
  text-align: center;
  color: #fff;
  background: #179788;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    opacity: 0.7;
  }
`;
