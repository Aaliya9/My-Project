// src/components/Projects.js
import React from 'react';

function Projects() {
  const projects = [
    { title: 'Project 1', description: 'Description of project 1', link: '#' },
    { title: 'Project 2', description: 'Description of project 2', link: '#' },
  ];

  return (
    <section id="projects" className="container my-5">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
