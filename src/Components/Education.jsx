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
  margin-bottom: 15px;
  font-size: 1rem;
  color: #555;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`;

function Education() {
  return (
    <Section>
      <Heading>Education</Heading>
      <List>
        <ListItem>
          <strong>Bachelor of Technology (CSE)</strong> - Sathyabama University (10/2020 - 08/2024) | GPA: 7.14
        </ListItem>
        <ListItem>
          <strong>Higher Secondary Education</strong> - Sasi Jr College (06/2018 - 06/2020) | GPA: 9.17
        </ListItem>
        <ListItem>
          <strong>Secondary Education</strong> - Sasi E.M High School (06/2015 - 06/2018) | GPA: 9.8
        </ListItem>
      </List>
    </Section>
  );
}

export default Education;
