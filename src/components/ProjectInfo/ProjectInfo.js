import React from 'react';

const ProjectInfo = ({ selectedProject, homeButton }) => {
  return (
    <div>
      <h2>{selectedProject.name}</h2>
      <p>{selectedProject.body}</p>
      <button onClick={homeButton}>Back to Main</button>
    </div>
  )
}

export default ProjectInfo;
