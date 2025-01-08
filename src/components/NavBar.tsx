import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  width: 100%;
  background-color: #1e1e1e;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const StyledLogo = styled(Link)`
  color: #4fc3f7;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StyledMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-height: ${props => props.isOpen ? '300px' : '0'};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
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

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    margin-left: 0;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const StyledEmail = styled.div`
  color: #e0e0e0;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0.5rem 0;
    width: 100%;
    text-align: center;
  }
`;

const NotificationMessage = styled.div<{ show: boolean }>`
  color: #4fc3f7;
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 2rem;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0.5rem 0;
    text-align: center;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #4fc3f7;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NotificationPopup = styled.div<{ show: boolean }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(46, 125, 50, 0.95);
  color: #E8F5E9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
  z-index: 1000;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  border: 1px solid #81C784;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

interface NavBarProps {
  showNotification: boolean;
  email: string;
}

const NavBar: React.FC<NavBarProps> = ({ showNotification }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StyledNavBar>
      <StyledLogo to="/">Micropayments Email Wallet</StyledLogo>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'}
      </MenuButton>
      <StyledMenu isOpen={isMenuOpen}>
        {location.pathname === '/post' && (
          <StyledMenuItem to="/posts">
            Posts List
          </StyledMenuItem>
        )}
        <NotificationMessage show={showNotification && window.innerWidth > 768}>
          Email Wallet: You've been charged 5 cents for reading this article.
        </NotificationMessage>
        <StyledEmail>Connected: sample@example.com</StyledEmail>
      </StyledMenu>

      <NotificationPopup show={showNotification}>
        Email Wallet: You've been charged 5 cents for reading this article.
      </NotificationPopup>
    </StyledNavBar>
  );
};

export default NavBar;