import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { styled } from 'styled-components';

// Define menu items for antd Menu
const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid ${(props) => props.theme.colors.orange500};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.orange500};
  margin: 0;
`;

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    align-items: center;
  }
`;

const MobileMenuButton = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: block;
  background-color: ${(props) => props.theme.colors.black};
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const SvgIcon = styled.svg`
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.colors.white};
`;

// Define menu items for antd Menu
const menuItems = [
  { key: "home", label: <NavLink to="/">Home</NavLink> },
  { key: "races", label: <NavLink to="/races">Races</NavLink> },
  { key: "live-scores", label: <NavLink to="/live-scores">Live Scores</NavLink> },
  { key: "results", label: <NavLink to="/results">Results</NavLink> },
  { key: "register", label: <NavLink to="/register">Register</NavLink> },
  { key: "admin", label: <NavLink to="/admin">Admin</NavLink> },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Nav>
      <Container>
        <FlexContainer>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Logo>RaceDay</Logo>
          </div>
          <DesktopMenu>
            <Menu
              mode="horizontal"
              items={menuItems}
              style={{ lineHeight: '64px', border: 'none', background: 'transparent' }}
              theme="dark"
            />
          </DesktopMenu>
          <MobileMenuButton>
            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <SvgIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </SvgIcon>
            </MenuButton>
          </MobileMenuButton>
        </FlexContainer>
      </Container>
      {isMenuOpen && (
        <MobileMenu>
          <Menu
            mode="vertical"
            items={menuItems}
            style={{ border: 'none', background: 'transparent' }}
            theme="dark"
            onClick={() => setIsMenuOpen(false)}
          />
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Header;