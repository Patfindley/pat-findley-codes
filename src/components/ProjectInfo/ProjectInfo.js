import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import styled, { keyframes } from 'styled-components'
import Aside from '../Aside/Aside.js';
import { ReactComponent as Wave } from '../../assets/wave.svg';

const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  overflow-x: hidden;
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  margin: 75px 0 0 0;
`

const CurrentView = styled.h2`
  font-size: 2em;
	width: 70%;
	text-align: center;
  margin: 0;
`

const ProjectImage = styled.img`
  align-self: center;
  width: 448px;
	height: 259px;
  border-radius: 5px;
  margin: 35px 0 0 0;
  @media only screen and (max-width: 1020px) {
    width: 276px;
    height: 158px;
  }
`

const WaveBackground = styled(Wave)`
  position: relative;
  height: 100px;
  right: 55px;
  top: 0px;
  transform: rotate(180deg) scale(6.5);
  z-index: 1;
  fill: ${({ theme }) => theme.colors.waveOne};
`

const Wrap = styled.div`
  display: flex;
	justify-content: space-around;
  height: 100%;
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.body} 4%, ${({ theme }) => theme.colors.waveOne} 0%);
  @media only screen and (max-width: 1020px) {
    height: 100px;
  }
  @media only screen and (max-width: 1020px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: normal;
  }
`

const Info = styled.div`
  width: 70%;
  padding: 20px;
	border-radius: 10px;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.body};
	box-shadow: 8px 10px 27px -1px rgba(0, 0, 0, 0.12);
  z-index: 2;
`

const ProjectBody = styled.p`
  font-size: 1.25em;
  line-height: 1.5;
`

const bouncy = keyframes`
  0%{right: 0em}
  40%{right: 0em}
  43%{right: -0.9em}
  46%{right: 0em}
  48%{right: -0.4em}
  50%{right: 0em}
  100%{right: 0em;}
`

const BackButton = styled.button`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid ${({ theme }) => theme.colors.waveTwo};
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto',sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.waveTwo};
  background-color: transparent;
  text-align: center;
  animation: ${bouncy} 4.5s infinite linear;
  position: relative;
  transition: all 600ms;
  &:hover {
    color: #f9f9f9;
  background-color: ${({ theme }) => theme.colors.waveOne};
  }
`

const ProjectInfo = ({ selectedProject, homeButton }) => {

  useEffect(() => {
    gsap.to('.project-info-wave', 30, {css: {left: '200px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
    gsap.to('.project-info-wave', 1.75, {css: {top: '2px'}, ease: 'bounce', yoyo: 'true', repeat: '-1'})
  }, [])

  return (
		<MainContent>
			<Head>
				<CurrentView>{selectedProject.name}</CurrentView>
				<ProjectImage
					src={selectedProject.thumbnail}
					alt={selectedProject.description}
				/>
			</Head>
      <WaveBackground className="project-info-wave" alt="wave" />
			<Wrap>
				<Info>
					<h2>{selectedProject.description}</h2>
					<ProjectBody>{selectedProject.body}</ProjectBody>
					<Link to="/Projects">
						<BackButton>Back to Projects</BackButton>
					</Link>
				</Info>
				<Aside selectedProject={selectedProject} />
			</Wrap>
		</MainContent>
	);
}

export default ProjectInfo;
