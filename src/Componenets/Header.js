import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <Logo>
          PARVAS
          <Caption>Take Wt Uh Want</Caption>
        </Logo>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  position: fixed; 
  top: 0; 
  width: 100%;
  z-index: 999; 
`;

const Logo = styled.div`
  font-size: 4rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Caption = styled.small`
  font-size: 1rem;
`;

export default Header;
