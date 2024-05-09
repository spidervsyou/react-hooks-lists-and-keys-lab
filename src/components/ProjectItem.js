import React from 'react';

const ProjectItem = ({ technologies }) => {
  return (
    <div>
      {technologies.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </div>
  );
};

export default ProjectItem;
