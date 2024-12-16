import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #282c34;
  color: white;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1b1e23;
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>© 2024 Kalki Rohit Bavirisetty</FooterText>
    </FooterContainer>
  );
}

export default Footer;