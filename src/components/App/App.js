import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav'
import SearchBar from '../SearchBar/SearchBar.js';
import Projects from '../Projects/Projects.js';
import ProjectInfo from '../ProjectInfo/ProjectInfo.js';
import Aside from '../Aside/Aside.js';
import Contact from '../Contact/Contact.js'
import projectsData from '../../projectsData';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: projectsData,
      filteredProjects: [],
      selectedProject: null,
    }
  }

  handleClick = (event) => {
    const project = this.state.projects.find(project => project.id === Number(event.target.closest('article').id));
    this.setState({
      selectedProject: project
    })
  }

  filterProjects = (searchInput) => {
    const search = searchInput.toLowerCase()
    let filter = this.state.projects.filter(project => {
      return project.name.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.tags.find(tag => {
        return tag.toLowerCase().includes(search)
      })
    })
    this.setState({filteredProjects: filter})
  }

  render() {
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
                <Aside />
                </div>
              )}
            />
            <Route exact path ='/projects'
              render={() => (
                <div>
                <Nav />
                <section className='main-content'>
                  <div className="neck">
                    <h2 className="current-view">Projects</h2> 
                    <SearchBar
                      handleChange={this.handleChange}
                      filterProjects={this.filterProjects}
                      renderFiltered={this.renderFiltered}
                      />
                  </div>
                  {/* <div className="search-wrapper"> */}
                  {/* </div> */}
                  <div className='projects-view-wrap'>
                  <div className='project-grid'>
                    <Projects
                      projects={this.state.projects}
                      filteredProjects={this.state.filteredProjects}
                      handleClick={this.handleClick}
                      />
                  </div>
                  <Aside />
                  </div>
              </section>
              </div>
              )}/>
              <Route exact path='/contact'
              render={()=> (
                <div className='contact-wrap'>
                <Nav />
                <Contact />
                </div>
              )}/>
            <Route exact path='/:id'
              render={() => (
                this.state.selectedProject ?
                <div>
                  <Nav />
                  <section className='main-content'>
                  <div className="neck">
                    <h2 className="current-view">{this.state.selectedProject.name}</h2> 
                  </div>
                  <div className='projects-view-wrap'>
                    <div className='project-info'>
                  <ProjectInfo
                    homeButton={this.homeButton}
                    selectedProject={this.state.selectedProject}
                    /> 
                    </div>
                    <Aside />
                    </div>
                    </section>
                    </div>: null
              )}/>
              <Redirect to='/Projects'/>
          </Switch>
          </div>
    )
  }

}

export default App;

