import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { gsap } from "gsap"
import './Nav.css';
import github_mark from '../../assets/GitHub-Mark-32px.png'
import linkedin from '../../assets/linkedin-logo.png'

const Nav = ({ windowWidth }) => {
  const [burgerActive, setBurgerActive] = useState(false)
  const [tl] = useState(gsap.timeline({paused: true}))

  useEffect(() => {
    if (windowWidth <= 768 ) {
    tl.to('.top', .2, {rotationZ: '90', backgroundColor: '#df562a'})
    .to('.mid', .2, {rotationZ: '50', y: '9px', x: '-8px', width: '30px', backgroundColor: '#df562a'})
    .to('.bottom', .2, {rotationZ: '-50', x: '17px', width: '30px', backgroundColor: '#df562a'})
    .to('.header-nav', .7, {height: '98vh'})
    .to('.nav-open', 0, {opacity: 1, pointerEvents: 'auto'})
    }
  }, [tl, windowWidth])

  useEffect(() => {
    tl.reversed() ? tl.play() : tl.reverse()
  }, [burgerActive, tl])
  
  return (
		<nav className="header-nav">
			<div
				className="burger-container"
				onClick={() => setBurgerActive(!burgerActive)}>
				<span className="patty top"></span>
				<span className="patty mid"></span>
				<span className="patty bottom"></span>
			</div>
			<div className="nav-open">
				<ul className="nav-links">
					<NavLink
						to="/about"
						activeClassName="nav-selected"
						onClick={() => tl.reverse()}>
						<li>ABOUT</li>
					</NavLink>
					<NavLink
						to="/projects"
						activeClassName="nav-selected"
						onClick={() => tl.reverse()}>
						<li>PROJECTS</li>
					</NavLink>
					<NavLink
						to="/contact"
						activeClassName="nav-selected"
						onClick={() => tl.reverse()}>
						<li>CONTACT</li>
					</NavLink>
				</ul>
				<div className="nav-socials">
					<a
						href="https://github.com/Patfindley"
						target="_blank"
						rel="noreferrer">
						<img className="socials github" src={github_mark} alt="github" />
					</a>
					<a
						href="https://www.linkedin.com/in/patfindley/"
						target="_blank"
						rel="noreferrer">
						<img className="socials linkedin" src={linkedin} alt="linkedin" />
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Nav;