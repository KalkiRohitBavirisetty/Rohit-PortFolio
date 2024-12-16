import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 40px 20px;
  background-color: #282c34;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

const Link = styled.a`
  color: #61dafb;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #21a1f1;
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>Kalki Rohit Bavirisetty</Title>
      <Subtitle>Computer Science Undergraduate</Subtitle>
      <Link href="mailto:rohit.bavirisetty@gmail.com">rohit.bavirisetty@gmail.com</Link>
      <Subtitle>Phone: 9347579997</Subtitle>
      <Link href="https://www.linkedin.com/in/kalki-rohit-68b557251" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
    </HeaderContainer>
  );
}

export default Header;
