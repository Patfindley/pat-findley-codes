import React from 'react';
import "./Projects.css"

export const Projects = ({ projects, filteredProjects, handleClick }) => {
console.log(filteredProjects)
  if (filteredProjects.length) {
    return filteredProjects.sort((a, b) => b.id - a.id).map(project => {
      return (
        <article className="project-post" key={project.id} onClick={handleClick} id={project.id}>
            <nav className="image-top" id={project.id}>
              <img className="project-image" src={project.thumbnail} alt={project.name} id={project.id}/>
              <span className="time-stamp" id={project.id}>{project.date}</span>
              </nav>
          <div className="project-description-wrap" id={project.id}>
            <section className="project-bottom" id={project.id} >{project.description}
            </section>
          </div>
        </article>
      )
    })
  } else {
    return projects.sort((a, b) => b.id - a.id).map(project => {
      return (
        <article className="project-post" key={project.id} onClick={handleClick} id={project.id}>
          <nav className="image-top" id={project.id}>
              <img className="project-image" src={project.thumbnail} alt={project.name} id={project.id}/>
              <div className="project-description-wrap" id={project.id}>
                <span className="time-stamp" id={project.id}>{project.date}</span>
              </div>
              <span className="descript">{project.name}</span>
              </nav>
        </article>
      )
    })
  }
}
 export default Projects;
