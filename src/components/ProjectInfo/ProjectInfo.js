import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Aside from '../Aside/Aside.js';
import wave1 from '../../assets/wave1-color.svg'
import './ProjectInfo.css'

const ProjectInfo = ({ selectedProject, homeButton }) => {
  useEffect(() => {
    gsap.to('.project-info-wave', 30, {css: {left: '255px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
    gsap.to('.project-info-wave', 1.75, {css: {top: '2px'}, ease: 'bounce', yoyo: 'true', repeat: '-1'})
  }, [])

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
      <img className="project-info-wave" src={wave1} alt="wave" />
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
