import React from 'react';
import Header from './Components/Header';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Certificates from './Components/Certificates';
import Footer from './Components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Arial, sans-serif';
  color: #333;
  line-height: 1.6;
  background-color: #f4f4f9;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Education />
      <Projects />
      <Skills />
      <Certificates />
      <Footer />
    </AppContainer>
  );
}

export default App;