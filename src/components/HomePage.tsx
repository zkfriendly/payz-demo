import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import BlogList from './BlogList';
import NavBar from './NavBar';

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

const StyledContent = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const StyledTitle = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const StyledIntro = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const StyledIntroTitle = styled.h2`
  color: #4fc3f7;
  font-size: 1.8rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StyledIntroParagraph = styled.p`
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const StyledHighlight = styled.span`
  font-weight: bold;
  color: #4fc3f7;
`;

const StyledPostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const StyledPostItem = styled.li`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background-color: #1e1e1e;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const StyledPostTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const StyledPostExcerpt = styled.p`
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const StyledReadMore = styled.a`
  color: #4fc3f7;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid #4fc3f7;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background-color: #4fc3f7;
    color: #121212;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const HomePage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email: string) => {
    setIsProcessing(true);
    setUserEmail(email);
    // Simulate login process
    setIsLoggedIn(true);
    setIsProcessing(false);
  };

  return (
    <>
      <NavBar email={userEmail} showNotification={false} />
      <StyledContainer>
        <StyledContent>
          <StyledTitle>Micropayments Email Wallet</StyledTitle>
          {!isLoggedIn ? (
            <>
              <StyledIntro>
                <StyledIntroTitle>Welcome to Our Tech Blog!</StyledIntroTitle>
                <StyledIntroParagraph>
                  Dive into a world of cutting-edge technology insights and expert knowledge. Our blog offers in-depth articles on React, JavaScript, CSS, and more, curated just for you.
                </StyledIntroParagraph>
                <StyledIntroParagraph>
                  We use a <StyledHighlight>convenient pay-as-you-go model</StyledHighlight>, so you only pay for the articles you read. No subscriptions, no hidden fees! Simply connect with your email to get started.
                </StyledIntroParagraph>
                <StyledIntroParagraph>
                  <StyledHighlight>How it works:</StyledHighlight> Each article costs just 5 cents. You'll be charged automatically when you reach the end of an article. It's that simple!
                </StyledIntroParagraph>
              </StyledIntro>
              <LoginForm onLogin={handleLogin} />
            </>
          ) : isProcessing ? (
            <ProcessingMessage />
          ) : (
            <BlogList />
          )}
        </StyledContent>
      </StyledContainer>
    </>
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