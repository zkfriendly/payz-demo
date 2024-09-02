import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledPostList, StyledPostItem, StyledPostTitle, StyledPostExcerpt, StyledReadMore } from './HomePage';

const BlogList: React.FC = () => {
  const navigate = useNavigate();
  const posts = [
    { id: 1, title: 'Introduction to React', excerpt: 'Learn the basics of React and start building your first component...', link: '/post/1' },
    { id: 2, title: 'State Management in React', excerpt: 'Explore different state management techniques in React applications...', link: '/post/2' },
    { id: 3, title: 'React Hooks Explained', excerpt: 'Dive deep into React Hooks and how they can simplify your code...', link: '/post/3' },
    { id: 4, title: 'Building Responsive UIs with React', excerpt: 'Learn how to create responsive user interfaces using React and CSS...', link: '/post/4' },
    { id: 5, title: 'Testing React Applications', excerpt: 'Discover best practices for testing your React components and applications...', link: '/post/5' },
  ];

  const handleReadMore = (link: string) => {
    navigate(link);
  };

  return (
    <StyledPostList>
      {posts.map(post => (
        <StyledPostItem key={post.id}>
          <StyledPostTitle>{post.title}</StyledPostTitle>
          <StyledPostExcerpt>{post.excerpt}</StyledPostExcerpt>
          <StyledReadMore onClick={() => handleReadMore(post.link)}>Read More</StyledReadMore>
        </StyledPostItem>
      ))}
    </StyledPostList>
  );
};

export default BlogList;