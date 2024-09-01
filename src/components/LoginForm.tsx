import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  // Add styling
`;

const StyledInput = styled.input`
  // Add styling
`;

const StyledButton = styled.button`
  // Add styling
`;

interface LoginFormProps {
  onLogin: (email: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('example@example.com');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email);
  };

  return (
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
  );
};

export default LoginForm;