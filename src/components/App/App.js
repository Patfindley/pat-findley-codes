import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../theme/GlobalStyles';
import WebFont from 'webfontloader';
import { useTheme } from '../../theme/useTheme'
import './App.css';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav'
import Projects from '../Projects/Projects.js';
import ProjectInfo from '../ProjectInfo/ProjectInfo.js';
import Contact from '../Contact/Contact.js'
import AboutMe from '../AboutMe/AboutMe.js'
import { projectsData } from '../../assets/data';
import resume from '../../assets/Pat_Findley_Resume.png';

const SiteContainer = styled.div`
margin-inline: auto;
height: 100vh;
font-weight: 200;
`

const App = () => {
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [projects] = useState(projectsData);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [windowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });
 
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

  const setThemeMode = () => {
    console.log(theme)
    theme.name === 'light' ? setSelectedTheme() : console.log('stay light!');
  }

    return (
			<>
				{themeLoaded && (
					<ThemeProvider theme={selectedTheme}>
						<GlobalStyles />
						<SiteContainer style={{ fontFamily: selectedTheme.font }}>
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
											<Nav 
                        windowWidth={windowWidth} />
											<Projects
												projects={projects}
												filterProjects={filterProjects}
												filteredProjects={filteredProjects}
												handleClick={handleClick}
											/>
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
											<div className="project-info-view">
												<Nav windowWidth={windowWidth} />
												<ProjectInfo selectedProject={selectedProject} />
											</div>
										) : null
									}
								/>
								<Redirect to="/Projects" />
							</Switch>
						</SiteContainer>
					</ThemeProvider>
				)}
			</>
		);
}

export default App;
