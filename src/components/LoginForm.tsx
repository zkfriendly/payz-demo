import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #4fc3f7;
  border-radius: 4px;
  background-color: #1e1e1e;
  color: #e0e0e0;
`;

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

const StyledNotification = styled.div`
  background-color: #4fc3f7;
  color: #121212;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  text-align: center;
  font-weight: 500;
`;

interface LoginFormProps {
  onLogin: (email: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('example@example.com');
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowNotification(true);
    setTimeout(() => {
      onLogin(email);
      setShowNotification(false);
    }, 2000);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <StyledButton type="submit">Connect</StyledButton>
      </StyledForm>
      {showNotification && (
        <StyledNotification>
          Generating session key...
        </StyledNotification>
      )}
    </>
  );
};

export default LoginForm;