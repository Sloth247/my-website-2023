import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';

const HomeScreen = ({ skills, projects }) => {
  return (
    <>
      <About />
      <Skills skills={skills} />
      <Portfolio projects={projects} />
      <Contact />
    </>
  );
};

export default HomeScreen;
