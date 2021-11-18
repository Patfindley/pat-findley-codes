import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { LinkStyle } from '../../theme/GlobalStyles';
import styled from 'styled-components'
import DelayLink from '../DelayLink/DelayLink.js'
import SearchBar from '../SearchBar/SearchBar.js';
import { ReactComponent as Wave } from '../../assets/wave.svg';

const MainContent = styled.section`
  display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-evenly;
  overflow-x: hidden;
`

const WaveBackground = styled(Wave)`
  position: relative;
  height: 100px;
  top: 192px;
  left: 150px;
  transform: rotate(180deg) scale(6.5);
  overflow: hidden;
  z-index: 1;
  fill: ${({ theme }) => theme.colors.waveTwo};
`

const Head = styled.div`
  display: flex;
	justify-content: space-around;
	width: 100%;
  height: 50px;
	margin-top: 75px;
  z-index: 2;
`

const View = styled.h2`
  font-size: 2em;
	width: 70%;
	text-align: center;
  margin: 0;
  transition: all 0.5s linear;
`

const Wrap = styled.div`
  display: flex;
	justify-content: space-around;
  overflow: hidden;
  background: linear-gradient(to bottom, transparent 4%, ${({ theme }) => theme.colors.waveTwo} 0%);
  transition: all 0.5s linear;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 414px) {
    width: 100%;
  }
`

const Grid = styled.div`
  display: grid;
	justify-items: center;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-column-gap: 10px;
  background-color: ${({ theme }) => theme.colors.body};
	width: 70%;
  min-width: 924px;
	height: 100%;
	border-radius: 10px;
  margin: 20px 0 16px 16px;
	-webkit-box-shadow: ${({ theme }) => theme.colors.WebkitBoxShadow}; 
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  transition: all 0.5s linear;
  z-index: 2;
  @media only screen and (max-width: 1024px) {
      min-width: 988px;
    }
  @media only screen and (max-width: 768px) {
      min-width: 729px;
    }
  @media only screen and (max-width: 540px) {
      min-width: 512px;
    }
  @media only screen and (max-width: 425px) {
      display: flex;
      flex-direction: column;
      width: 90%;
      min-width: 0px;
    }
  @media only screen and (max-width: 414px) {
      align-items: center;
      width: 87%;
    }
  @media only screen and (max-width: 320px) {
      width: 90%;
    }
  `

const Post = styled.article`
  border-radius: 9px;
	margin-top: 25px;
  @media only screen and (max-width: 375px) {
    margin-top: 15px;
  }
`

const ImageTop = styled.nav`
  position: relative;
  &:hover .main-image {
    transition: opacity 0.5s;
    opacity: 0;
  }
  &:hover .gif {
    transition: opacity 0.2s;
    opacity: 1;
  }
  &:hover .description {
    cursor: pointer;
	  color: ${({ theme }) => theme.colors.waveOne};
	  transition: color 300ms;
  }
`

const MainImage = styled.img`
  position: relative;
  width: 448px;
  height: 259px;
  object-fit: fill;
  border-radius: 9px;
  box-shadow: 5px 6px 13px 2px rgba(0, 0, 0, 0.2);
  filter: grayscale(57%);
  @media only screen and (max-width: 768px) {
    width: 313px;
		height: 181px;
  }
  @media only screen and (max-width: 540px) {
    width: 216px;
    height: 125px;
  }
  @media only screen and (max-width: 425px) {
    width: 313px;
    height: 181px;
  }
  @media only screen and (max-width: 375px) {
    width: 276px;
    height: 158px;
  }
  @media only screen and (max-width: 320px) {
    width: 248px;
    height: 144px;
  }
  @media only screen and (max-width: 280px) {
    width: 216px;
    height: 125px;
  }
`

const Gif = styled.img`
  width: 448px;
  height: 259px;
  object-fit: fill;
  border-radius: 9px;
  box-shadow: 5px 6px 13px 2px rgba(0, 0, 0, 0.2);
  position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	object-fit: fill;
	opacity: 0;
	transition: opacity 0.2s;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 313px;
    height: 181px;
  }
  @media only screen and (max-width: 540px) {
    width: 216px;
    height: 125px;
  }
  @media only screen and (max-width: 425px) {
    width: 313px;
    height: 181px;
  }
  @media only screen and (max-width: 375px) {
    width: 276px;
    height: 158px;
  }
  @media only screen and (max-width: 320px) {
    width: 248px;
    height: 144px;
  }
  @media only screen and (max-width: 280px) {
    width: 216px;
    height: 125px;
  }
`

const DescriptionWrap = styled.div`
  border-radius: 3px;
	bottom: 265px;
	width: 100%;
	height: 20%;
	position: relative;
  border-radius: 9px;
  color: ${({ theme }) => theme.colors.text};
	background-image: linear-gradient(0deg, transparent 45%, ${({ theme }) => theme.colors.body} 100%);
	transition: all 0.5s linear;
  @media only screen and (max-width: 768px) {
    width: 100%;
    bottom: 186px;
  }
  @media only screen and (max-width: 540px) {
    width: 100%;
    bottom: 130px;
  }
  @media only screen and (max-width: 425px) {
    width: 96%;
    bottom: 186px;
  }
  @media only screen and (max-width: 375px) {
    width: 100%;
    bottom: 163px;
  }
  @media only screen and (max-width: 320px) {
    bottom: 149px;
  }
  @media only screen and (max-width: 280px) {
    width: 100%;
    bottom: 130px;
  }
`

const TimeStamp = styled.span`
  font-family: "Bungee Outline", cursive;
	font-size: 1.4em;
	font-weight: 600;
	position: relative;
	bottom: 0px;
	left: 357px;
  transition: all 0.5s linear;
  @media only screen and (max-width: 1024px) {
    top: 7px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1em;
    left: 247px;
    top: 6px;
  }
  @media only screen and (max-width: 540px) {
    text-shadow: 0px 1px 8px #e8e8ed;
    left: 150px;
    top: 105px;
  }
  @media only screen and (max-width: 425px) {
    left: 247px;
  }
  @media only screen and (max-width: 414px) {
    top: 162px;
  }
  @media only screen and (max-width: 375px) {
    text-shadow: 0px 1px 8px #e8e8ed;
    left: 208px;
    top: 140px;
  }
  @media only screen and (max-width: 320px) {
    left: 181px;
    top: 126px;
  }
  @media only screen and (max-width: 280px) {
    font-size: 1em;
    left: 148px;
    top: 108px;
  }
`

const Description = styled.p`
  font-size: 1.7em;
	font-weight: 600;
	font-family: "Bungee Outline", cursive;
	position: relative;
	bottom: 58px;
	left: 6px;
  transition: all 0.5s linear;
  @media only screen and (max-width: 1024px) {
    bottom: 49px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.2em;
    bottom: 35px;
    left: 2px;
  }
  @media only screen and (max-width: 540px) {
    font-size: 1em;
    bottom: 35px;
    left: 2px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 1.2em;
    bottom: 42px;
    left: 2px;
  }
  @media only screen and (max-width: 414px) {
    bottom: 36px;
  }
  @media only screen and (max-width: 375px) {
    font-size: 17px;
    bottom: 36px;
    left: 5px;
  }
  @media only screen and (max-width: 280px) {
    font-size: 17px;
    bottom: 36px;
    left: 0px;
  }
`

const AsideWrap = styled.section`
  text-align: left;
	font-size: 1.3em;
	line-height: 1.4;
	padding: 20px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.body};
	width: 20%;
  height: 100%;
  margin: 20px 16px 16px 0;
	-webkit-box-shadow: ${({ theme }) => theme.colors.WebkitBoxShadow}; 
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  transition: all 0.5s linear;
  z-index: 2;
  &.link, :visited, :link {
    text-decoration: none;
  }
`

export const Projects = ({ projects, filterProjects, filteredProjects, handleClick }) => {
  useEffect(() => {
    gsap.to('.project-post', 1, {css: {visibility: 'visible'}})
    gsap.from('.project-post', .8, {y: 450, opacity: 0, stagger: 0.2})
  }, [])

  useEffect(() => {
    gsap.to('.projects-wave', 40, {css: {left: '575px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
    gsap.to('.projects-wave', 1.75, {css: {top: '194px'}, ease: 'bounce', yoyo: 'true', repeat: '-1'})
  }, [])

  const selectProject = (event) => {
    gsap.to('.project-post', 1, {y: 450, opacity: 0, stagger: 0})
    handleClick(event)
  }

  const renderProjects = (projects) => {
		return projects.sort((a, b) => b.id - a.id)
			.map((project) => {
				return (
					<DelayLink delay={800} to={`/project${project.id}`} key={project.id}>
						<Post
              className='project-post'
							key={project.id}
							onClick={(event) => selectProject(event)}
							id={project.id}>
							<ImageTop>
								<MainImage
                  className='main-image'
									src={project.thumbnail}
									alt={project.name}
								/>
								<Gif
                className='gif'
									src={project.gif}
									alt={project.name}
								/>
								<DescriptionWrap className='description'>
									<TimeStamp>{project.date}</TimeStamp>
									<Description>{project.name}</Description>
								</DescriptionWrap>
							</ImageTop>
						</Post>
					</DelayLink>
				);
			});
	};

  return (
		<MainContent>
			<WaveBackground className='projects-wave' alt="wave" />
			<Head>
				<View>Projects</View>
				<SearchBar filterProjects={filterProjects} />
			</Head>
			<Wrap>
				<Grid>
					{filteredProjects.length
						? renderProjects(filteredProjects)
						: renderProjects(projects)}
				</Grid>
        <AsideWrap>
          <p >
            Hey! <br/> I'm <LinkStyle style={{animationDelay:'0.07s'}} href='/about'>Pat Findley</LinkStyle>. <br/> I'm a father, husband, musician, and software developer.
            I make stuff, and like to consider myself a "creator of non-tangible things".<br/> This website is one of those things; a never complete, playground to log my progress and try new things <br/> <br/>Click around the projects to see what I've been building, breaking, and re-building, and when your finished <LinkStyle style={{animationDelay: '0.21s'}} href='/contact'>reach out</LinkStyle> and say hi!
          </p>
        </AsideWrap>
			</Wrap>
		</MainContent>
	);
}
export default Projects;
