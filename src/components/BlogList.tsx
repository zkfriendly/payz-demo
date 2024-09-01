import React from 'react';
import { StyledPostList, StyledPostItem, StyledPostTitle, StyledPostExcerpt, StyledReadMore } from './HomePage';

const posts = [
  { id: 1, title: 'Introduction to React', excerpt: 'Learn the basics of React and start building your first component...' },
  { id: 2, title: 'State Management in React', excerpt: 'Explore different state management techniques in React applications...' },
  { id: 3, title: 'React Hooks Explained', excerpt: 'Dive deep into React Hooks and how they can simplify your code...' },
  { id: 4, title: 'Building Responsive UIs with React', excerpt: 'Learn how to create responsive user interfaces using React and CSS...' },
  { id: 5, title: 'Testing React Applications', excerpt: 'Discover best practices for testing your React components and applications...' },
];

const BlogList: React.FC = () => (
  <StyledPostList>
    {posts.map((post) => (
      <StyledPostItem key={post.id}>
        <StyledPostTitle>{post.title}</StyledPostTitle>
        <StyledPostExcerpt>{post.excerpt}</StyledPostExcerpt>
        <StyledReadMore to={`/post/${post.id}`}>
          Read More
        </StyledReadMore>
      </StyledPostItem>
    ))}
  </StyledPostList>
);

export default BlogList;