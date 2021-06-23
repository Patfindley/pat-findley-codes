import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectInfo.css'

const ProjectInfo = ({ selectedProject, homeButton }) => {
  return (
    <div>
      <h2>{selectedProject.name}</h2>
      <p className='project-body'>{selectedProject.body}</p>
      <Link to='/Projects' className='link'>
      <button onClick={homeButton}>Back to Main</button>
      </Link>
    </div>
  )
}

export default ProjectInfo;
