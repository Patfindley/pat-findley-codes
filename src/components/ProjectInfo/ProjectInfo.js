import React from 'react';
import { Link } from 'react-router-dom';

const ProjectInfo = ({ selectedProject, homeButton }) => {
  return (
    <div>
      <h2>{selectedProject.name}</h2>
      <p>{selectedProject.body}</p>
      <Link to='/' className='link'>
      <button onClick={homeButton}>Back to Main</button>
      </Link>
    </div>
  )
}

export default ProjectInfo;
