import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import BlogList from './BlogList';
import PaymentInfo from './PaymentInfo';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Introduction to React', excerpt: 'Learn the basics of React...' },
  { id: 2, title: 'Advanced JavaScript Techniques', excerpt: 'Explore advanced JS concepts...' },
  { id: 3, title: 'CSS Grid vs Flexbox', excerpt: 'Comparing layout techniques...' },
];

const StyledContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // Add this line
  background-color: #121212;
  color: #e0e0e0;
`;

const StyledTitle = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const StyledPostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledPostItem = styled.div`
  border-bottom: 1px solid #333333;
  padding-bottom: 2rem;
`;

const StyledPostTitle = styled.h2`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StyledPostExcerpt = styled.p`
  color: #b0b0b0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const StyledReadMore = styled(Link)`
  color: #4fc3f7;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const HomePage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLogin = (email: string) => {
    setIsProcessing(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <StyledContainer>
      <StyledTitle>My Tech Blog</StyledTitle>
      {!isLoggedIn ? (
        <>
          <LoginForm onLogin={handleLogin} />
          <PaymentInfo />
        </>
      ) : isProcessing ? (
        <ProcessingMessage />
      ) : (
        <BlogList />
      )}
    </StyledContainer>
  );
};

const ProcessingMessage: React.FC = () => (
  <div>
    <p>Login successful! Generating session key...</p>
    <p>Transaction fee is being charged...</p>
  </div>
);

export default HomePage;
export { StyledPostList, StyledPostItem, StyledPostTitle, StyledPostExcerpt, StyledReadMore };