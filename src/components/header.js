// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-primary text-white text-center py-4">
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about" className="text-white mx-2">About Me</a>
        <a href="#projects" className="text-white mx-2">Projects</a>
        <a href="#skills" className="text-white mx-2">Skills</a>
        <a href="#contact" className="text-white mx-2">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
