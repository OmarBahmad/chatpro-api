import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  background: #15171c;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 0.8s;
  z-index: 10000;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;
