import React, { useEffect } from 'react';
import DelayLink from '../DelayLink/DelayLink.js'
import { gsap } from 'gsap';
import "./Projects.css"

export const Projects = ({ projects, filteredProjects, handleClick }) => {

  useEffect(() => {
    gsap.to('.project-post', 1, {css: {visibility: 'visible'}})
    gsap.from('.project-post', .8, {x: -300, opacity: 0, stagger: 0.1})
  }, [])

  const selectProject = (event) => {
    gsap.to('.project-post', .8, {x: -300, opacity: 0, stagger: 0.1})
    handleClick(event)
  }

  if (filteredProjects.length) {
    return filteredProjects.sort((a, b) => b.id - a.id).map(project => {
      return (
        <DelayLink delay={1000}
        to={`/project${project.id}`}
        key={project.id}>
        <article className="project-post" key={project.id} onClick={handleClick} id={project.id}>
            <nav className="image-top" >
              <img className="project-image main-image" src={project.thumbnail} alt={project.name} />
              <img className="project-image gif-hover" src={project.gif} alt={project.name } />
              <div className="project-description-wrap" >
                <span className="time-stamp" >{project.date}</span>
              </div>
                <p className="descript" >{project.name}</p>
              </nav>
        </article>
        </DelayLink>
      )
    })
  } else {
    return projects.sort((a, b) => b.id - a.id).map(project => {
      return (
        <DelayLink delay={700}
        to={`/project${project.id}`}
        key={project.id}>
        <article className="project-post"  key={project.id} onClick={(event)=> selectProject(event)} id={project.id}>
          <nav className="image-top" >
            <img className="project-image main-image" src={project.thumbnail} alt={project.name} />
            <img className="project-image gif-hover" src={project.gif} alt={project.name} />
            <div className="project-description-wrap" >
              <span className="time-stamp" >{project.date}</span>
              <p className="descript" >{project.name}</p>
            </div>
            </nav>
        </article>
        </DelayLink>
      )
    })
  }
}
 export default Projects;
