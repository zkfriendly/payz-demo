import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const StyledButton = styled.button`
  background-color: #4fc3f7;
  color: #121212;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #03a9f4;
  }
`;

interface LoginFormProps {
  onLogin: (email: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [showModal, setShowModal] = useState(false);

  const handleConnectWallet = (userEmail: string) => {
    onLogin(userEmail);
  };

  return (
    <>
      <StyledButton onClick={() => setShowModal(true)}>Connect Wallet</StyledButton>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onConnect={handleConnectWallet}
        />
      )}
    </>
  );
};

export default LoginForm;