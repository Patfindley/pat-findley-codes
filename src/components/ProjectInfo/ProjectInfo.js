import React from 'react';
import { Link } from 'react-router-dom';
import Aside from '../Aside/Aside.js';
import './ProjectInfo.css'

const ProjectInfo = ({ selectedProject, homeButton }) => {
  return (
		<section className="main-content">
			<div className="project-info-head">
				<h2 className="current-view">{selectedProject.name}</h2>
				<img
					className="selected-project-image"
					src={selectedProject.thumbnail}
					alt={selectedProject.description}
				/>
			</div>
			<div className="project-info-wrap">
				<div className="project-info">
					<h2>{selectedProject.description}</h2>
					<p className="project-body">{selectedProject.body}</p>
					<Link to="/Projects" className="link">
						<button className="back-button bouncy">Back to Main</button>
					</Link>
				</div>
				<Aside selectedProject={selectedProject} />
			</div>
		</section>
	);
}

export default ProjectInfo;
