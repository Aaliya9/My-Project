// src/components/Skills.js
import React from 'react';

function Skills() {
  const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js'];

  return (
    <section id="skills" className="container my-5">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;