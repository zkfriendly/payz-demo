import React, { useState, useEffect } from 'react';
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
  2: {
    title: 'State Management in React',
    content: `State management is a crucial aspect of building complex React applications. As your app grows, managing state across components can become challenging. This article explores different state management techniques in React applications.

    Local Component State:
    For simple components, React's built-in useState hook is often sufficient. It allows you to add state to functional components easily. However, as your app grows, you might need to lift state up or use more advanced techniques.

    Context API:
    React's Context API provides a way to pass data through the component tree without having to pass props down manually at every level. It's great for sharing data that can be considered "global" for a tree of React components, such as current authenticated user, theme, or preferred language.

    Redux:
    Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments, and are easy to test. Redux centralizes your application's state and logic, and it can be particularly useful for large-scale applications.

    MobX:
    MobX is a simple, scalable state management solution. It makes state management simple again by addressing the root issue: it makes it impossible to produce an inconsistent state. The strategy to achieve that is simple: Make sure that everything that can be derived from the application state, will be derived. Automatically.

    Recoil:
    Recoil is an experimental state management library for React apps. It provides several capabilities that are difficult to achieve with React alone, while being compatible with the newest features of React.

    Choosing the right state management solution depends on the size and complexity of your application. For smaller apps, React's built-in state management might be sufficient. For larger, more complex applications, solutions like Redux or MobX might be more appropriate.

    Remember, the goal of state management is to make your application more predictable and easier to understand. Choose the solution that best fits your needs and helps you achieve these goals.`,
  },
  3: {
    title: 'React Hooks Explained',
    content: `React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They allow you to "hook into" React state and lifecycle features from function components. Let's explore some of the most commonly used hooks:

    useState:
    This is the most basic hook. It lets you add React state to function components. useState returns a pair: the current state value and a function that lets you update it.

    useEffect:
    useEffect adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

    useContext:
    useContext accepts a context object and returns the current context value for that context. It's useful for consuming context in functional components without introducing nesting.

    useReducer:
    useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

    useCallback:
    useCallback returns a memoized version of the callback that only changes if one of the dependencies has changed. This is useful for optimizing child components that rely on reference equality to prevent unnecessary renders.

    useMemo:
    useMemo returns a memoized value. Use it when you have expensive computations that you don't want to re-run on every render unless certain dependencies change.

    useRef:
    useRef returns a mutable ref object whose .current property is initialized to the passed argument. It's useful for keeping any mutable value around similar to how you'd use instance fields in classes.

    Custom Hooks:
    You can also create your own Hooks to reuse stateful behavior between different components. A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks.

    Hooks solve many problems that developers faced with class components, such as reusing stateful logic between components, dealing with complex components that become hard to understand, and confusing classes. They provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle.

    By mastering React Hooks, you can write more concise and easier-to-understand React components, leading to more maintainable and efficient React applications.`,
  },
  4: {
    title: 'Building Responsive UIs with React',
    content: `Creating responsive user interfaces is crucial in today's web development landscape, where users access websites from a variety of devices with different screen sizes. React, combined with CSS, provides powerful tools for building responsive UIs. Here's how you can create responsive designs using React:

    Flexbox and CSS Grid:
    Flexbox and CSS Grid are powerful CSS layout models that work great with React. They allow you to create flexible, responsive layouts with ease. You can use styled-components or CSS modules to write your styles directly in your React components.

    Media Queries:
    Media queries allow you to apply different styles based on the device's characteristics, primarily its width. You can use media queries within your CSS-in-JS solutions or in separate stylesheets.

    Responsive Images:
    Use the 'srcset' attribute on img elements to provide different image sources for different screen sizes. You can also use the 'picture' element for more complex responsive image scenarios.

    Responsive Typography:
    Use relative units like 'em' or 'rem' for font sizes, and consider using CSS clamp() for responsive font sizing that scales smoothly between minimum and maximum values.

    Component-Based Responsiveness:
    React's component-based architecture allows you to create different versions of a component for different screen sizes. You can then render the appropriate version based on the current viewport size.

    CSS-in-JS Libraries:
    Libraries like styled-components allow you to write CSS directly in your JavaScript files. This makes it easy to create dynamic, responsive styles that can change based on props or state.

    React-Responsive:
    This library provides a set of React components that make it easy to implement responsive design. It allows you to render components only when certain media queries are met.

    React Hooks for Responsiveness:
    You can create custom hooks to manage responsive behavior. For example, a useWindowSize hook can provide the current window dimensions, allowing you to adjust your UI accordingly.

    Server-Side Rendering Considerations:
    If you're using server-side rendering, be aware that you won't have access to window sizes on the server. Plan your responsive strategy accordingly, perhaps using an initial mobile-first render on the server.

    Performance Optimization:
    Be mindful of performance when building responsive UIs. Avoid unnecessary re-renders and optimize images and other assets for different screen sizes.

    By combining these techniques, you can create React applications that look great and function well on any device. Remember, the key to good responsive design is not just adapting to different screen sizes, but creating a consistent and intuitive user experience across all devices.`,
  },
  5: {
    title: 'Testing React Applications',
    content: `Testing is a crucial part of developing robust and maintainable React applications. A good testing strategy can catch bugs early, serve as documentation, and make it easier to refactor your code with confidence. Here's an overview of testing React applications:

    Types of Tests:
    1. Unit Tests: Test individual components or functions in isolation.
    2. Integration Tests: Test how multiple components or functions work together.
    3. End-to-End Tests: Test the entire application as a user would interact with it.

    Testing Libraries:
    1. Jest: A popular JavaScript testing framework that works great with React.
    2. React Testing Library: Provides light utility functions on top of react-dom and react-dom/test-utils, encouraging better testing practices.
    3. Enzyme: A JavaScript Testing utility for React that makes it easier to test your React Components' output.

    Unit Testing Components:
    Use Jest and React Testing Library or Enzyme to render components in isolation and test their output and behavior. Test that components render correctly with different props and that they respond correctly to user interactions.

    Testing Hooks:
    Custom hooks can be tested by creating a test component that uses the hook and then testing that component. The @testing-library/react-hooks library also provides utilities specifically for testing hooks.

    Mocking:
    Use Jest's mocking capabilities to isolate the code being tested. You can mock modules, functions, and even entire components to focus on testing specific parts of your application.

    Snapshot Testing:
    Jest's snapshot testing feature allows you to capture the rendered output of a component and compare it to a stored snapshot. This can be useful for detecting unintended changes in your UI.

    Integration Testing:
    Test how multiple components work together. This often involves rendering a parent component and testing how its child components interact.

    End-to-End Testing:
    Use tools like Cypress or Selenium to automate browser interactions and test your application as a user would use it.

    Continuous Integration:
    Set up your tests to run automatically when code is pushed to your repository. This helps catch issues early and ensures that tests are run consistently.

    Test Coverage:
    Use tools like Istanbul (built into Jest) to measure your test coverage. While 100% coverage isn't always necessary or practical, it can help identify areas of your code that aren't being tested.

    Best Practices:
    1. Write tests as you write your components, not after.
    2. Focus on testing behavior, not implementation details.
    3. Use meaningful test descriptions that serve as documentation.
    4. Keep your tests simple and focused.
    5. Don't test third-party libraries or React itself.

    Remember, the goal of testing is not just to increase test coverage, but to increase confidence in your code. Write tests that give you confidence that your application is working as expected and that will catch regressions as you continue to develop your application.`,
  },
};

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  color: #e0e0e0;
`;

const StyledTitle = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.2;
  text-align: center;
  border-bottom: 2px solid #666666;
  padding-bottom: 1rem;
`;

const StyledContent = styled.div`
  color: #e0e0e0;
  line-height: 1.8;
  font-size: 1.1rem;
  font-family: 'Arial', sans-serif;
  width: 100%;

  p {
    margin-bottom: 1.5rem;
  }

  h2 {
    color: #ffffff;
    font-size: 1.8rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    border-left: 4px solid #666666;
    padding-left: 1rem;
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: #ffffff;
    font-weight: 600;
  }
`;

const StyledNotification = styled.div`
  background-color: #333333;
  color: #ffffff;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  margin-top: 2rem;
  font-weight: 500;
  text-align: center;
`;

const StyledReadMoreButton = styled.button`
  background-color: #4fc3f7;
  color: #121212;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.1rem;
  margin-top: 2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #03a9f4;
  }
`;

const PopupNotification = styled.div<{ show: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #4fc3f7;
  color: #121212;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${props => props.show ? 1 : 0};
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(-20px)'};
  z-index: 1000;
`;

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showFullContent, setShowFullContent] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const post = posts[parseInt(id as string) as keyof typeof posts];

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Hide notification after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  if (!post) {
    return <StyledContainer>Post not found</StyledContainer>;
  }

  const handleReadMore = () => {
    setShowFullContent(true);
    setShowNotification(true);
  };

  const contentPreview = post.content.split(' ').slice(0, 50).join(' ') + '...';

  return (
    <StyledContainer>
      <StyledTitle>{post.title}</StyledTitle>
      <StyledContent>
        {showFullContent ? (
          <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
        ) : (
          <>
            <div dangerouslySetInnerHTML={{ __html: formatContent(contentPreview) }} />
            <StyledReadMoreButton onClick={handleReadMore}>
              Read More
            </StyledReadMoreButton>
          </>
        )}
      </StyledContent>
      <PopupNotification show={showNotification}>
        Email Wallet: You've been charged 5 cents for reading this article.
      </PopupNotification>
    </StyledContainer>
  );
};

// Helper function to format the content
const formatContent = (content: string) => {
  return content
    .replace(/\n\s*\n/g, '</p><p>') // Convert double newlines to paragraphs
    .replace(/^(.+)$/gm, '<p>$1</p>') // Wrap single lines in paragraphs
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') // Convert **text** to <strong>
    .replace(/\n\s*(\d+\.|\*)\s/g, '<li>') // Convert numbered lists and bullet points to list items
    .replace(/<li>(.+)(?=\n<li>|\n\n|$)/g, '<li>$1</li>') // Close list items
    .replace(/<li>/g, '<ul><li>') // Open unordered list before first item
    .replace(/<\/li>\n(?!<li>)/g, '</li></ul>') // Close unordered list after last item
    .replace(/\n\s*(.+?):/g, '<h2>$1</h2>'); // Convert lines ending with colon to h2
};

export default PostPage;