import React, { useEffect, useState } from 'react';
import '../index.css';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8888/api/skills')
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error('Error fetching skills:', error));
  }, []);

  return (
    <section className="skills">
      <h2>Skills</h2>
      <span></span>
      <div className="skill-logo">
        {skills.map((skill) => (
          <div className="card" key={skill._id}>
            <img src={skill.image} alt={`${skill.name}-logo`} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
