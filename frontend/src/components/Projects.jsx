import React, { useEffect, useState } from 'react';
import '../index.css';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8888/api/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <span></span>
      <ul>
        {projects.map((project, index) => (
          <li key={project._id} className={`project-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Technologies: {project.technologies.join(', ')}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;