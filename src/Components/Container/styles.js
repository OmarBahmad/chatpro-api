import styled from "styled-components";

export const Wrapper = styled.div`
    width: calc(100% - 300px);
    margin-left: auto;
    padding: 0 5rem;

    @media (max-width: 600px) {
      padding: 0 2rem;
    }

    @media (max-width: 900px) {
      width: calc(100% - 7rem);
    }
`;

//    medium: "600px",
//big: "900px",
//huge: "1200px",