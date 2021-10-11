import React from 'react';
import { Link } from 'react-router-dom';
import Aside from '../Aside/Aside.js';
import './ProjectInfo.css'

const ProjectInfo = ({ selectedProject, homeButton }) => {
  return (
    <div className='project-info-view-wrap'>
                    <div className='project-info'>
      <h2>{selectedProject.description}</h2>
      <p className='project-body'>{selectedProject.body}</p>
      <Link to='/Projects' className='link'>
      <button className='back-button bouncy' >Back to Main</button>
      </Link>
      </div>
                    <Aside selectedProject={selectedProject}/>
                    </div>
  )
}

export default ProjectInfo;
