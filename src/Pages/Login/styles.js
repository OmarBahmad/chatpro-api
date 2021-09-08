import styled from "styled-components";

export const ContainerUp = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(36, 46, 77);
  background: linear-gradient(
    132deg,
    rgba(23,30,54,1) 0%,
    rgba(137, 126, 121, 1) 100%
  );
  color: #7e8ba3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerLogin = styled.div`
  width: 70vh;
  margin: auto;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background: rgba(0, 0, 0, 0.35);
  flex-direction: column;
  border-radius: 15px;
`;
export const Login = styled.h2`
color: #bbbbbb;
  font-size: 2.75rem;
  font-weight: 100;
  margin: 0 0 1rem;
  text-transform: uppercase;
`;
export const Input = styled.input`
  border: 0;
  padding: 1.5vh 8vh;
  width: 50vh;
  margin: 3vh auto;
  border-radius: 999px;
  border: 1px solid #070e2480;
  background: transparent;
  color: #fff;
  text-align: center;
  &::placeholder {
    color: #bbbbbb;
    text-align: center;
  }
  :focus {
    outline: 0;
  }
`;

export const Button = styled.button`
  box-shadow: 0 0 250px #000;
  border-radius: 999px;
  border: 1px solid #242c37;
  text-align: center;
  padding: 2vh 23vh;
  margin: 3vh auto;
  color: #fff;
  background: rgb(53, 195, 193);
  background: linear-gradient(
    132deg,
    rgba(53, 195, 193, 1) 0%,
    rgba(0, 214, 183, 1) 100%
  );
  cursor: pointer;
  transition: 0.5s;
  :hover {
    opacity: 0.7;
  }
`;
