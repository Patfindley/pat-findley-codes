import React from 'react';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import './App.css';
import Aside from '../Aside/Aside.js';
import Projects from '../Projects/Projects.js';
import ProjectInfo from '../ProjectInfo/ProjectInfo.js'
import projectsData from '../../projectsData'
import SearchBar from '../SearchBar/SearchBar.js'


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
    const project = this.state.projects.find(project => project.id === Number(event.target.id));
    this.setState({
      showingDetails: !this.state.showingDetails,
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
      <div className='body'>
        <nav className="header-nav">
          <ul className="nav-links">
              <Link to='/' className='link'><li>Home</li></Link>
              <li>Projects</li>
              <li>Contact</li>
          </ul>
        </nav>
        <div className="neck">
          <h2 className="current-view">Portfolio</h2>
          <div className="search-wrapper">
            <SearchBar
              handleChange={this.handleChange}
              filterProjects={this.filterProjects}
              renderFiltered={this.renderFiltered}
              />
          </div>
        </div>
        <section className='main-content'>
          <div className='project-grid'>
          <Switch>
            <Route exact path ='/'
              render={() => (
                <Projects
                projects={this.state.projects}
                filteredProjects={this.state.filteredProjects}
                handleClick={this.handleClick}
                />
              )}/>
            <Route exact path='/:id'
              render={() => (
                this.state.selectedProject ?
                  <ProjectInfo
                    homeButton={this.homeButton}
                    selectedProject={this.state.selectedProject}
                    /> : null
              )}/>
              <Redirect to='/'/>
          </Switch>
          </div>
          <Aside />
        </section>
      </div>
    )
  }

}

export default App;


// {this.state.showingDetails &&
// <ProjectInfo
// homeButton={this.homeButton}
// selectedProject={this.state.selectedProject}
// />
// }
// {!this.state.showingDetails &&
// <Projects
// projects={this.state.projects}
// filteredProjects={this.state.filteredProjects}
// handleClick={this.handleClick}
// />
// }
