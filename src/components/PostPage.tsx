import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PaymentModal from './PaymentModal';

const posts = {
  1: {
    title: 'Introduction to React',
    content: `React is a popular JavaScript library for building user interfaces. It was developed by Facebook and has gained widespread adoption in the web development community.

    React allows developers to create reusable UI components and efficiently update and render them when the underlying data changes. This is achieved through its virtual DOM (Document Object Model) implementation, which optimizes the rendering process.

    One of the key features of React is its component-based architecture. Components are the building blocks of React applications, allowing developers to break down complex UIs into smaller, manageable pieces. This modular approach promotes code reusability and makes it easier to maintain and scale applications.

    React also introduces JSX, a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. This makes it more intuitive to describe the structure of your UI components.

    State management is another crucial aspect of React. Components can have their own state, which represents the data that can change over time. React provides hooks like useState for functional components and this.state for class components to manage and update state efficiently.

    To get started with React, you'll need to set up a development environment. This typically involves using tools like Create React App, which sets up a new React project with all the necessary configurations and dependencies.

    As you dive deeper into React, you'll encounter concepts like props, lifecycle methods, and hooks. These features allow you to create dynamic and interactive user interfaces with ease.

    React's ecosystem is vast, with numerous libraries and tools available to enhance your development experience. Popular additions include React Router for handling navigation, Redux for state management, and styled-components for CSS-in-JS styling.

    Learning React opens up many opportunities in the world of web development. Its popularity and robust community support make it a valuable skill for any front-end developer to acquire.`,
  },
  // Add more posts here
};

const StyledContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #121212;
  color: #e0e0e0;
`;

const StyledTitle = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-align: center;
`;

const StyledContent = styled.div`
  color: #e0e0e0;
  line-height: 1.8;
  font-size: 1.2rem;
  font-family: Georgia, serif;

  p {
    margin-bottom: 1.5rem;
  }
`;

const StyledButton = styled.button`
  background-color: #4fc3f7;
  color: #121212;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #03a9f4;
  }
`;

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showFullContent, setShowFullContent] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const post = posts[id as keyof typeof posts];

  if (!post) {
    return <StyledContainer>Post not found</StyledContainer>;
  }

  const handleReadMore = () => {
    setShowPaymentModal(true);
  };

  const handlePaymentConfirm = () => {
    setShowPaymentModal(false);
    setShowFullContent(true);
  };

  return (
    <StyledContainer>
      <StyledTitle>{post.title}</StyledTitle>
      <StyledContent>
        {showFullContent ? (
          <p>{post.content}</p>
        ) : (
          <>
            <p>{post.content.slice(0, 500)}...</p>
            <StyledButton onClick={handleReadMore}>
              Read More
            </StyledButton>
          </>
        )}
      </StyledContent>
      {showPaymentModal && (
        <PaymentModal onConfirm={handlePaymentConfirm} onCancel={() => setShowPaymentModal(false)} />
      )}
    </StyledContainer>
  );
};

export default PostPage;