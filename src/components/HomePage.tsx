import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import BlogList from './BlogList';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Introduction to React', excerpt: 'Learn the basics of React...' },
  { id: 2, title: 'Advanced JavaScript Techniques', excerpt: 'Explore advanced JS concepts...' },
  { id: 3, title: 'CSS Grid vs Flexbox', excerpt: 'Comparing layout techniques...' },
];

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
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email: string) => {
    setIsProcessing(true);
    setUserEmail(email);
    // Simulate login process
    setIsLoggedIn(true);
    setIsProcessing(false);
    };

  return (
    <StyledContainer>
      <StyledContent>
        <StyledTitle>My Tech Blog</StyledTitle>
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
          <>
            <StyledNotification>Connected with: {userEmail}</StyledNotification>
            <BlogList />
          </>
        )}
      </StyledContent>
    </StyledContainer>
  );
};

const ProcessingMessage: React.FC = () => (
  <StyledNotification>
    <p>Login successful! Generating session key...</p>
    <p>Transaction fee is being charged...</p>
  </StyledNotification>
);

export default HomePage;
export { StyledPostList, StyledPostItem, StyledPostTitle, StyledPostExcerpt, StyledReadMore };