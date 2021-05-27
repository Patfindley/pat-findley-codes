import React from 'react';
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
      showingDetails: false,
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

  homeButton = () => {
    this.setState({showingDetails: false})
  }

  render() {
    return (
      <div className='body'>
        <nav className="header-nav">
          <ul className="nav-links">
              <li>Home</li>
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
            {this.state.showingDetails &&
            <ProjectInfo
            homeButton={this.homeButton}
            selectedProject={this.state.selectedProject}
            />
          }
          {!this.state.showingDetails &&
            <Projects
            projects={this.state.projects}
            filteredProjects={this.state.filteredProjects}
            handleClick={this.handleClick}
            />
          }
          </div>
          <Aside />
        </section>
      </div>
    )
  }

}

export default App;
