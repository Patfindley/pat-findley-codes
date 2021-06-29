import React, { useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/SearchBar.js';
import Projects from '../Projects/Projects.js';
import ProjectInfo from '../ProjectInfo/ProjectInfo.js';
import Aside from '../Aside/Aside.js';
import Contact from '../Contact/Contact.js'
import AboutMe from '../AboutMe/AboutMe.js'
import { projectsData, shortAboutMe } from '../../assets/data';

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
      <div className='site-container'>
          <Switch>
            <Route exact path = '/'
              render={()=> (
                <Landing />
              )}
            />
            <Route exact path = '/about'
              render={()=> (
                <div >
                <Nav />
                <section className='main-content'>
                <div className="neck">
                    <h2 className='current-view'>Hi, I'm Pat Findley</h2>
                </div>
                <AboutMe />
                </section>
                </div>
              )}
            />
            <Route exact path ='/projects'
              render={() => (
                <div>
                <Nav />
                <section className='main-content'>
                  <div className="neck">
                    <h2 className='current-view'>Projects</h2> 
                    <SearchBar
                      filterProjects={filterProjects}
                      />
                  </div>
                  <div className='projects-view-wrap'>
                  <div className='project-grid'>
                    <Projects
                      projects={projects}
                      filteredProjects={filteredProjects}
                      handleClick={handleClick}
                      />
                  </div>
                  <Aside selectedProject={shortAboutMe}/>
                  </div>
              </section>
              </div>
              )}/>
              <Route exact path='/contact'
              render={()=> (
                <div className='contact-wrap'>
                <Nav />
                <Contact windowWidth={windowWidth} />
                </div>
              )}/>
            <Route exact path='/:id'
              render={() => (
                selectedProject ?
                <div>
                  <Nav />
                  <section className='main-content'>
                  <div className="neck">
                    <h2 className="current-view">{selectedProject.name}</h2> 
                  </div>
                  <div className='projects-view-wrap'>
                    <div className='project-info'>
                  <ProjectInfo
                    selectedProject={selectedProject}
                    /> 
                    </div>
                    <Aside selectedProject={selectedProject}/>
                    </div>
                    </section>
                    </div>: null
              )}/>
              <Redirect to='/Projects'/>
          </Switch>
          </div>
    )
}

export default App;


//add resume path

//portfolio
//fabout
//contact

