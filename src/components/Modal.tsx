import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  text-align: left;
  color: #333;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 95%;
  }
`;

const ModalTitle = styled.h2`
  color: #1a5f7a;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const ModalText = styled.p`
  color: #34495e;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const ModalInfo = styled(ModalText)`
  background: #e8f4fd;
  padding: 0.75rem;
  border-radius: 6px;
  border-left: 4px solid #3498db;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const ModalEmail = styled.div`
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1.5rem 0;
  padding: 0.75rem;
  background: #f1f8e9;
  border-radius: 6px;
  border: 1px solid #7cb342;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem;
    margin: 1rem 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const ModalButton = styled.button`
  background-color: #2ecc71;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.1s;
  width: auto;

  &:hover {
    background-color: #27ae60;
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.7rem 1rem;
  }
`;

const ModalCancelButton = styled(ModalButton)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;

interface ModalProps {
  onClose: () => void;
  onConnect: (email: string) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, onConnect }) => {
  const sampleEmail = 'sample@example.com';

  const handleConnect = () => {
    onConnect(sampleEmail);
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>Email Wallet</ModalTitle>
        <ModalInfo>Website: example.com</ModalInfo>
        <ModalText>
          Connecting to this site will generate a session key for you that will be used behind the scenes to pay for articles.
        </ModalText>
        <ModalEmail>
          <span style={{ color: '#7cb342' }}>Connected With:</span> {sampleEmail}
        </ModalEmail>
        <ModalButton onClick={handleConnect}>Connect</ModalButton>
        <ModalCancelButton onClick={onClose}>Cancel</ModalCancelButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;