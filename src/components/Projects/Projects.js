import React, { useEffect } from 'react';
import DelayLink from '../DelayLink/DelayLink.js'
import Aside from '../Aside/Aside.js';
import { shortAboutMe } from '../../assets/data';
import { gsap } from 'gsap';
import "./Projects.css"
import wave2 from '../../assets/wave2-color.svg'

export const Projects = ({ projects, filteredProjects, handleClick }) => {

  useEffect(() => {
    gsap.to('.project-post', 1, {css: {visibility: 'visible'}})
    gsap.from('.project-post', .8, {y: 450, opacity: 0, stagger: 0.2})
  }, [])

  useEffect(() => {
    gsap.to('.projects-wave', 30, {css: {right: '275px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
    gsap.to('.projects-wave', 1.75, {css: {top: '221px'}, ease: 'bounce', yoyo: 'true', repeat: '-1'})
  }, [])

  const selectProject = (event) => {
    gsap.to('.project-post', 1, {y: 450, opacity: 0, stagger: 0})
    handleClick(event)
  }

  const renderProjects = (projects) => {
		return projects.sort((a, b) => b.id - a.id)
			.map((project) => {
				return (
					<DelayLink delay={800} to={`/project${project.id}`} key={project.id}>
						<article
							className="project-post"
							key={project.id}
							onClick={(event) => selectProject(event)}
							id={project.id}>
							<nav className="image-top">
								<img
									className="project-image main-image"
									src={project.thumbnail}
									alt={project.name}
								/>
								<img
									className="project-image gif-hover"
									src={project.gif}
									alt={project.name}
								/>
								<div className="project-description-wrap">
									<span className="time-stamp">{project.date}</span>
									<p className="descript">{project.name}</p>
								</div>
							</nav>
						</article>
					</DelayLink>
				);
			});
	};

  return (
		<div className="projects-view-wrap">
      <img className="projects-wave" src={wave2} alt="wave" />
			<div className="project-grid">
				{projects.filtered
					? renderProjects(filteredProjects)
					: renderProjects(projects)}
			</div>
			<Aside selectedProject={shortAboutMe} />
		</div>
	);
  
}
 export default Projects;
