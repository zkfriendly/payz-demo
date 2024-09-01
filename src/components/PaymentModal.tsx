import React from 'react';
import styled from 'styled-components';

interface PaymentModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #1e1e1e;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
`;

const ModalTitle = styled.h2`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ModalText = styled.p`
  color: #e0e0e0;
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
`;

const CancelButton = styled(Button)`
  background-color: #424242;
  color: #ffffff;

  &:hover {
    background-color: #616161;
  }
`;

const ConfirmButton = styled(Button)`
  background-color: #4fc3f7;
  color: #121212;

  &:hover {
    background-color: #03a9f4;
  }
`;

const PaymentModal: React.FC<PaymentModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>Unlock Full Content</ModalTitle>
        <ModalText>
          To read the full post, you'll be charged $0.05. Do you want to proceed?
        </ModalText>
        <ButtonContainer>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <ConfirmButton onClick={onConfirm}>Confirm Payment</ConfirmButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PaymentModal;