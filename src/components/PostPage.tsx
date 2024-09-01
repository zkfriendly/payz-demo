import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
  justify-content: flex-start; // Change this from center to flex-start
  align-items: center; // Add this line
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
  max-height: 60vh; // Change this to a percentage of the viewport height
  overflow-y: auto;
  width: 100%; // Add this to ensure full width within the container

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

interface NotificationProps {
  show: boolean;
}

const StyledNotification = styled.div<NotificationProps>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4fc3f7;
  color: #121212;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease;
  opacity: ${props => props.show ? 1 : 0};
  pointer-events: ${props => props.show ? 'auto' : 'none'};
`;

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showNotification, setShowNotification] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const post = posts[parseInt(id as string) as keyof typeof posts];

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 50) {
          setShowNotification(true);
        }
      }
    };

    const currentRef = contentRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  if (!post) {
    return <StyledContainer>Post not found</StyledContainer>;
  }

  return (
    <StyledContainer>
      <StyledTitle>{post.title}</StyledTitle>
      <StyledContent ref={contentRef}>
        <p>{post.content}</p>
      </StyledContent>
      <StyledNotification show={showNotification}>
        You've been charged 5 cents for reading this article.
      </StyledNotification>
    </StyledContainer>
  );
};

export default PostPage;