import styled from "styled-components";

export const Wrapper = styled.div`
    background: white;
    border-right: 1px solid black;

    padding: 1rem;

    position: fixed;
    left: 0;
    top: 0;

    width: 180px;
    height: 100%;

    svg.logo > * {
      fill: black;
    }

    svg.logo {
      height: 50px;
      width: 150px;
    }

    @media (max-width: 900px) {
      svg.logo {
        height: 20px;
        width: 50px;
      }

      padding: 1rem;
      width: 7rem;
    }
`;

export const ItensWrapper = styled.ul`
    list-style: none;
    margin-bottom: 3rem;

    a {
      color: gray;
      text-decoration: none;

      &.active {
        color: black !important;
      }
    }

    @media (max-width: 900px) {
      margin: 1.5rem 0;
    }
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    margin: 2.5rem 0;

    font-size: 14px;

    svg {
      margin-right: 1rem;
    }

    @media (max-width: 900px) {
      justify-content: center;

      svg {
        margin-right: 0rem;
      }

      span {
        display: none;
      }
    }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  svg.logo > * {
    fill: black;
  }

  svg.logo {
    height: 50px;
    width: 150px;
  }
`;

/*
    medium: "600px",
    big: "900px",
    huge: "1200px",
*/