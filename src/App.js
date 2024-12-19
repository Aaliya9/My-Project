// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; // Make sure you have this file created for styling
import Header from './components/header.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import Skills from './components/skills.js';
import Contact from './components/contact.js';


function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );

 
}

export default App;
