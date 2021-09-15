import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: #1d1d26;
    border-right: 1px solid #1d1d26;

    padding: 2.5rem;

    position: fixed;
    left: 0;
    top: 0;

    width: 90px;
    height: 100%;

    svg.logo > * {
      fill: black;
    }

    svg.logo {
      height: 50px;
      width: 150px;
    }
  `}


`;

export const ItensWrapper = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    margin-bottom: 3rem;

    a {
      color: white;
      text-decoration: none;

      &.active {
        color: #179788 !important;
      }
    }
  `}
`;

export const Item = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin: 2.5rem 0;

    font-size: ${theme.font.sizes.smallx2};

    svg {
      margin-left: 0.5rem;
    }
  `}
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
