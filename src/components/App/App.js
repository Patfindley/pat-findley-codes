import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../theme/GlobalStyles';
import WebFont from 'webfontloader';
import { useTheme } from '../../theme/useTheme'
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav'
import Projects from '../Projects/Projects.js';
import ProjectInfo from '../ProjectInfo/ProjectInfo.js';
import Contact from '../Contact/Contact.js'
import AboutMe from '../AboutMe/AboutMe.js'
import { projectsData } from '../../assets/data';
import resume from '../../assets/Pat-Findley-Resume.pdf';

const SiteContainer = styled.div`
margin-inline: auto;
height: 100vh;
font-weight: 200;
`

const MainContent = styled.section`
  display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-evenly;
  overflow-x: hidden;
`

const ResumeWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 100%
`

const NoProjectWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NoProject = styled.h2`
  text-align: center;
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

  useEffect(() => {
    setSelectedProject(JSON.parse(window.localStorage.getItem('selectedProject')));
  }, [])

  useEffect(() => {
    window.localStorage.setItem('selectedProject', JSON.stringify(selectedProject))
  }, [selectedProject])
 
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
			<>
				{themeLoaded && (
					<ThemeProvider theme={selectedTheme}>
						<GlobalStyles />
						<SiteContainer style={{ fontFamily: selectedTheme.font }}>
							<ThemeSelector setter={setSelectedTheme} theme={theme} />
							<Switch>
								<Route exact path="/" render={() => <Landing />} />
								<Route
									exact
									path="/about"
									render={() => (
										<div>
											<Nav windowWidth={windowWidth} />
											<MainContent>
												<AboutMe />
											</MainContent>
										</div>
									)}
								/>
								<Route
									exact
									path="/projects"
									render={() => (
										<div>
											<Nav windowWidth={windowWidth} />
											<Projects
												theme={theme}
												projects={projects}
												filterProjects={filterProjects}
												filteredProjects={filteredProjects}
												handleClick={handleClick}
												windowWidth={windowWidth}
											/>
										</div>
									)}
								/>
								<Route
									exact
									path="/contact"
									render={() => (
										<div>
											<Nav windowWidth={windowWidth} />
											<Contact windowWidth={windowWidth} />
										</div>
									)}
								/>
								<Route
									exact
									path="/resume"
									render={() => (
										<MainContent>
											<Nav windowWidth={windowWidth} />
											<ResumeWrap>
												<iframe
													src={resume}
													title="Pat Findley Resume"
													frameBorder="0"
													scrolling="auto"
													height="100%"
													width="100%"></iframe>
											</ResumeWrap>
										</MainContent>
									)}
								/>
								<Route
									exact
									path="/:id"
									render={() =>
										selectedProject ? (
											<div>
												<Nav windowWidth={windowWidth} />
												<ProjectInfo selectedProject={selectedProject} />
											</div>
										) : (
											<NoProjectWrap>
												<Nav windowWidth={windowWidth} />
												<NoProject>
													I don't think that project's been started yet!
													<Link
														style={{
															textDecoration: "none",
															color: `${theme.colors.text}`,
														}}
														href="/contact">
														{" "}
														Reach out
													</Link>{" "}
													if there's something you'd like to work on!
												</NoProject>
												<Link to="/Projects">
													<button className="button">Back to Projects</button>
												</Link>
											</NoProjectWrap>
										)
									}
								/>
							</Switch>
						</SiteContainer>
					</ThemeProvider>
				)}
			</>
		);
}

export default App;
