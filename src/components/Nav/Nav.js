import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { gsap } from "gsap"
import styled from 'styled-components';
import { ReactComponent as github_icon } from '../../assets/github.svg';
import { ReactComponent as linkedin_icon } from '../../assets/linkedin.svg';

const HeaderNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 76px;
  background-color: ${({ theme }) => theme.colors.body};
  transition: all 0.5s linear;
  z-index: 4;
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
  transition: background-color 800ms;
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
  transition: all 0.5s linear;
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
  background-color: ${({ theme }) => theme.colors.body};
  opacity: 0.9;
  transition: all 0.5s linear;
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
    border-bottom: 2px solid ${({ theme }) => theme.colors.waveOne};
    transition: all 0.5s;
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
  transition: all 800ms;
  &:hover {
    color: ${({ theme }) => theme.colors.waveThree};
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

const Github = styled(github_icon)`
  width: 1.8em;
  fill: ${({ theme }) => theme.colors.text};
  transition: all 800ms;
  &:hover {
    fill: ${({ theme }) => theme.colors.waveOne};
    transition: all 500ms;
  }
  `

const Linkedin = styled(linkedin_icon)`
  width: 1.8em;
  fill: ${({ theme }) => theme.colors.text};
  transition: all 800ms;
  &:hover {
    fill: ${({ theme }) => theme.colors.waveOne};
    transition: fill 500ms;
  }
  `

const Nav = ({ windowWidth }) => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [tl] = useState(gsap.timeline({paused: true}));

  useEffect(() => {
    if (windowWidth <= 768 ) {
    tl.to('.top', .2, {rotationZ: '90'})
    .to('.mid', .2, {rotationZ: '50', y: '9px', x: '-8px', width: '30px'})
    .to('.bottom', .2, {rotationZ: '-50', x: '17px', width: '30px'})
    .to('.header-nav', .7, {height: '98vh'})
    .to('.nav-open', 0, {display: 'flex', pointerEvents: 'auto',})
    }
  }, [tl, windowWidth])

  const handleNav = () => {
    if (burgerActive) {
      console.log(burgerActive, 'burgerActive');
      tl.reverse();
      enableScroll();
      setBurgerActive(false);
    } else {
      console.log(burgerActive, 'burgerActive');
      tl.play();
      disableScroll();
      setBurgerActive(true);
    }
  }

  const disableScroll = () => {
    console.log('scroll disabled')
    document.body.style.overflow = "hidden";
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = () => { 
      window.scrollTo(scrollLeft, scrollTop); 
      }; 
  }

  const enableScroll = () => {
    console.log('scroll enabled')
    document.body.style.overflow = "auto";
    window.onscroll = () => {}
  }

  const mobileNav = () => {
    return (<HeaderNav className="header-nav">
    <BurgerContainer onClick={() => handleNav()}>
      <Patty className="patty top"></Patty>
      <Patty className="patty mid"></Patty>
      <Patty className="patty bottom"></Patty>
    </BurgerContainer>
    <NavOpen className="nav-open">
      <NavBarLinks className="nav-links">
        <NLink
          to="/about"
          activeClassName="nav-selected"
          onClick={() => handleNav()}>
          <ListItem>ABOUT</ListItem>
        </NLink>
        <NLink
          to="/projects"
          activeClassName="nav-selected"
          onClick={() => handleNav()}>
          <ListItem>PROJECTS</ListItem>
        </NLink>
        <NLink
          to="/contact"
          activeClassName="nav-selected"
          onClick={() => handleNav()}>
          <ListItem>CONTACT</ListItem>
        </NLink>
      </NavBarLinks>
      <Socials>
        <a
          href="https://github.com/Patfindley"
          target="_blank"
          rel="noreferrer">
          <Github alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/patfindley/"
          target="_blank"
          rel="noreferrer">
          <Linkedin alt="linkedin" />
        </a>
      </Socials>
    </NavOpen>
  </HeaderNav>)

  }

  const deskTopNav = () => {
    return (
      <HeaderNav className="header-nav">
			<NavOpen className="nav-open">
				<NavBarLinks className="nav-links">
					<NLink
						to="/about"
						activeClassName="nav-selected">
						<ListItem>ABOUT</ListItem>
					</NLink>
					<NLink
						to="/projects"
						activeClassName="nav-selected">
						<ListItem>PROJECTS</ListItem>
					</NLink>
					<NLink
						to="/contact"
						activeClassName="nav-selected">
						<ListItem>CONTACT</ListItem>
					</NLink>
				</NavBarLinks>
				<Socials>
					<a
						href="https://github.com/Patfindley"
						target="_blank"
						rel="noreferrer">
						<Github alt="github" />
					</a>
					<a
						href="https://www.linkedin.com/in/patfindley/"
						target="_blank"
						rel="noreferrer">
						<Linkedin alt="linkedin" />
					</a>
				</Socials>
			</NavOpen>
		</HeaderNav>
    )
  }
  
  return (
		windowWidth <= 768 ? mobileNav() : deskTopNav()
	);
}

export default Nav;