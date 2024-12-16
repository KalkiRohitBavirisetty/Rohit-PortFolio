import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 30px 20px;
  background: white;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 1rem;
  color: #555;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`;

function Skills() {
  return (
    <Section>
      <Heading>Technical Skills</Heading>
      <List>
        <ListItem>C</ListItem>
        <ListItem>Python</ListItem>
        <ListItem>Django</ListItem>
        <ListItem>AWS</ListItem>
        <ListItem>SQL</ListItem>
        <ListItem>Git</ListItem>
      </List>
    </Section>
  );
}

export default Skills;