import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaListAlt } from 'react-icons/fa';

const StyledNavBar = styled.nav`
  width: 100%;
  background-color: #1e1e1e;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledLogo = styled(Link)`
  color: #4fc3f7;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
`;

const StyledMenuItem = styled(Link)`
  color: #e0e0e0;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 2rem;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: #4fc3f7;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const StyledEmail = styled.div`
  color: #e0e0e0;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 2rem;
`;

interface NavBarProps {
  email?: string;
}

const NavBar: React.FC<NavBarProps> = ({ email }) => {
  const location = useLocation();

  return (
    <StyledNavBar>
      <StyledLogo to="/">Micropayments Email Wallet</StyledLogo>
      <StyledMenu>
        {location.pathname === '/post' && (
          <StyledMenuItem to="/posts">
            <FaListAlt />
            Posts List
          </StyledMenuItem>
        )}
        {email && <StyledEmail>Connected: {email}</StyledEmail>}
      </StyledMenu>
    </StyledNavBar>
  );
};

export default NavBar;