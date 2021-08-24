import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectInfo.css'

const ProjectInfo = ({ selectedProject, homeButton }) => {
  return (
    <div>
      <h2>{selectedProject.description}</h2>
      <p className='project-body'>{selectedProject.body}</p>
      <Link to='/Projects' className='link'>
      <button className='back-button bouncy' >Back to Main</button>
      </Link>
    </div>
  )
}

export default ProjectInfo;
