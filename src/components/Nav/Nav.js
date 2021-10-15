import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { gsap } from "gsap"
import styled from 'styled-components';
import github_mark from '../../assets/GitHub-Mark-32px.png'
import linkedin from '../../assets/linkedin-logo.png'

const HeaderNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 76px;
  z-index: 5;
`
const BurgerContainer = styled.div`
  @media only screen and (max-width: 768px) {
  position: absolute;
  top: 10px;
  }
`

const Patty = styled.span`
  visibility: hidden;
  display: block;
  position: relative;
  top: 23px;
  height: 4px;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  margin: 5px 20px;
  transition: background-color box-shadow .5s;
  @media only screen and (max-width: 768px) {
    visibility: visible;
    z-index: 3;
  }
`

const NavOpen = styled.div`
  width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
  @media only screen and (max-width: 768px) {
    pointer-events: none;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 86px;
    z-index: 3;
  }
`

const NavBarLinks = styled.ul`
  margin: 0;
  padding: 0;
  width: 70%;
  display: flex;
  list-style-type: none;
  align-content: stretch;
  align-items: baseline;
  justify-content: space-evenly;
  font-size: 1.5em;
  font-weight: 400;
  z-index: 2;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;
  }
`

const NLink = styled(NavLink)`
  &.nav-selected {
    border-bottom: 2px solid #df562a;
  }
  &:visited {
    color: ${({ theme }) => theme.colors.text};
	  text-decoration: none;
  }
  &:link {
    color: ${({ theme }) => theme.colors.text};
	  text-decoration: none;
  }
`

const ListItem = styled.li`
  font-weight: 600;
  transition: color 800ms;
  &:hover {
    color: #df562a;
    transition: color 350ms;
  }
`

const Socials = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  z-index: 2;
  @media only screen and (max-width: 768px) {
    width: 42%;
    justify-content: space-around;
  }
`

const SocialIcon = styled.img`
  width: 1.8em;
  filter: invert(95%) sepia(9%) saturate(0%) hue-rotate(182deg) brightness(92%)
    contrast(85%);
  transition: filter 800ms;
  &:hover {
    filter: invert(58%) sepia(71%) saturate(5625%) hue-rotate(347deg)
      brightness(93%) contrast(87%);
    transition: filter 500ms;
  }
`


const Nav = ({ windowWidth }) => {
  const [burgerActive, setBurgerActive] = useState(false)
  const [tl] = useState(gsap.timeline({paused: true}))

  useEffect(() => {
    if (windowWidth <= 768 ) {
    tl.to('.top', .2, {rotationZ: '90', backgroundColor: '#df562a'})
    .to('.mid', .2, {rotationZ: '50', y: '9px', x: '-8px', width: '30px', backgroundColor: '#df562a'})
    .to('.bottom', .2, {rotationZ: '-50', x: '17px', width: '30px', backgroundColor: '#df562a'})
    .to('.header-nav', .7, {height: '98vh'})
    .to('.nav-open', 0, {display: 'flex', pointerEvents: 'auto'})
    }
  }, [tl, windowWidth])

  useEffect(() => {
    tl.reversed() ? tl.play() : tl.reverse()
  }, [burgerActive, tl])

  useEffect(() => {
    handleScroll()
  }, [burgerActive])

  const handleScroll = () => {
    !burgerActive ? enableScroll() : disableScroll();
  }

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = () => { 
      window.scrollTo(scrollLeft, scrollTop); 
      }; 
  }

  const enableScroll = () => {
    document.body.style.overflow = "auto";
    window.onscroll = () => {}
  }
  
  return (
		<HeaderNav className='header-nav'>
			<BurgerContainer
				onClick={() => setBurgerActive(!burgerActive)}>
				<Patty className="patty top"></Patty>
				<Patty className="patty mid"></Patty>
				<Patty className="patty bottom"></Patty>
			</BurgerContainer>
			<NavOpen className='nav-open'>
				<NavBarLinks className="nav-links">
					<NLink
						to="/about"
						activeClassName="nav-selected"
						onClick={() => tl.reverse()}>
						<ListItem>ABOUT</ListItem>
					</NLink>
					<NLink
						to="/projects"
						activeClassName="nav-selected"
						onClick={() => tl.reverse()}>
						<ListItem>PROJECTS</ListItem>
					</NLink>
					<NLink
						to="/contact"
						activeClassName="nav-selected"
						onClick={() => tl.reverse()}>
						<ListItem>CONTACT</ListItem>
					</NLink>
				</NavBarLinks>
				<Socials>
					<a
						href="https://github.com/Patfindley"
						target="_blank"
						rel="noreferrer">
						<SocialIcon src={github_mark} alt="github" />
					</a>
					<a
						href="https://www.linkedin.com/in/patfindley/"
						target="_blank"
						rel="noreferrer">
						<SocialIcon src={linkedin} alt="linkedin" />
					</a>
				</Socials>
			</NavOpen>
		</HeaderNav>
	);
}

export default Nav;