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

const Project = styled.div`
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #444;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

function Projects() {
  return (
    <Section>
      <Heading>Projects</Heading>
      <Project>
        <ProjectTitle>MultiModal Medical Image Fusion</ProjectTitle>
        <ProjectDescription>Enhanced medical diagnosis by fusing MRI and CT images. Tools: Python, Fusion Algorithm.</ProjectDescription>
      </Project>
      <Project>
        <ProjectTitle>Infrastructure as Code - CloudFormation</ProjectTitle>
        <ProjectDescription>Researched and implemented IaC for modern infrastructure management. Tools: AWS.</ProjectDescription>
      </Project>
      <Project>
        <ProjectTitle>Online Gas Booking Management System</ProjectTitle>
        <ProjectDescription>Developed a Django-based system to streamline customer interactions with gas agencies. Tools: Django, Python.</ProjectDescription>
      </Project>
    </Section>
  );
}

export default Projects;
