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
`;

const StyledContent = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const StyledIntro = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledIntroTitle = styled.h2`
  color: #4fc3f7;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const StyledIntroParagraph = styled.p`
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const StyledHighlight = styled.span`
  font-weight: bold;
  color: #4fc3f7;
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

const StyledPostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledPostItem = styled.li`
  margin-bottom: 1.5rem;
`;

const StyledPostTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const StyledPostExcerpt = styled.p`
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.5;
`;

const StyledReadMore = styled.a`
  color: #4fc3f7;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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
      <NavBar email={userEmail} />
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