import React, { useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/SearchBar.js';
import Projects from '../Projects/Projects.js';
import ProjectInfo from '../ProjectInfo/ProjectInfo.js';
import Contact from '../Contact/Contact.js'
import AboutMe from '../AboutMe/AboutMe.js'
import { projectsData } from '../../assets/data';
import resume from '../../assets/Pat_Findley_Resume.png';

const App = () => {
  const [projects] = useState(projectsData)
  const [filteredProjects, setFilteredProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState('')
  const [windowWidth] = useState(window.innerWidth)
 
  const handleClick = (event) => {
    setSelectedProject(projects.find(project => project.id === Number(event.target.closest('article').id)));

  }

  const filterProjects = (searchInput) => {
    const search = searchInput.toLowerCase()
    let filter = projects.filter(project => {
      return project.name.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.tags.find(tag => {
        return tag.toLowerCase().includes(search)
      })

    })
    setFilteredProjects(filter)

  }

    return (
			<div className="site-container">
				<Switch>
					<Route exact path="/" render={() => <Landing />} />
					<Route
						exact
						path="/about"
						render={() => (
							<div>
								<Nav windowWidth={windowWidth} />
								<section className="main-content">
									<AboutMe />
								</section>
							</div>
						)}
					/>
					<Route
						exact
						path="/projects"
						render={() => (
							<div>
								<Nav windowWidth={windowWidth} />
								<section className="main-content">
									<div className="neck">
										<h2 className="current-view">Projects</h2>
										<SearchBar filterProjects={filterProjects} />
									</div>
									<Projects
										projects={projects}
										filteredProjects={filteredProjects}
										handleClick={handleClick}
									/>
								</section>
							</div>
						)}
					/>
					<Route
						exact
						path="/contact"
						render={() => (
							<section className="main-content">
								<Nav windowWidth={windowWidth} />
								<Contact windowWidth={windowWidth} />
							</section>
						)}
					/>
					<Route
						exact
						path="/resume"
						render={() => (
							<section className="main-content">
								<Nav windowWidth={windowWidth} />
								<div className="resume-wrap">
									<img className="resume" src={resume} alt="resume" />
								</div>
							</section>
						)}
					/>
					<Route
						exact
						path="/:id"
						render={() =>
							selectedProject ? (
                <div>
								<section className="main-content">
									<Nav windowWidth={windowWidth} />
									<div className="neck">
										<h2 className="current-view">{selectedProject.name}</h2>
									</div>
									{/* <img
										className="selected-project-image"
										src={selectedProject.thumbnail}
										alt={selectedProject.description}
									/> */}
									<ProjectInfo selectedProject={selectedProject} />
								</section>
							</div>) : null
						}
					/>
					<Redirect to="/Projects" />
				</Switch>
			</div>
		);
}

export default App;
