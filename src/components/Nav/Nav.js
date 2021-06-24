import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { gsap } from "gsap"
import './Nav.css';
import github_mark from '../../assets/GitHub-Mark-32px.png'
import linkedin from '../../assets/linkedin-logo.png'

const Nav = () => {
  const [burgerActive, setBurgerActive] = useState(false)
  const [tl] = useState(gsap.timeline({paused: true}))

  useEffect(() => {
  // tl.to('.top', .5, {y:'-9px', rotationZ: '90', x: '30px'}, 'open')
  // .to('.top', .1, { y: '9px'})
  // .to('.bottom', .5, {y: '9px', rotationZ: '-90', x: '-30px'}, 'open')
  // .to('.bottom', .1, { y: '-9px'})
  // .to('.mid', .2, {opacity: 0})
  // .to('.top', .3, {rotationZ: '45'})
  // .to('.bottom', .3, {x: '30px', rotationZ: '135'})
  tl.to('.nav-open', .2, {opacity: 1, pointerEvents: 'auto'})
  }, [tl])

  useEffect(() => {
    tl.reversed() ? tl.play() : tl.reverse()
  }, [burgerActive, tl])

  return (
    <nav className="header-nav">

      <div className='burger-container' onClick={() => setBurgerActive(!burgerActive)}>
          <span className='patty top'></span>
          <span className='patty mid'></span>
          <span className='patty bottom'></span>
      </div>
        <div className='nav-open'>
          <ul className="nav-links">
              <Link to='/about' className='link'><li>About</li></Link>
              <Link to='/projects' className='link'><li>Projects</li></Link>
              <Link to='/contact' className='link'><li>Contact</li></Link>
          </ul>
          
          <div className='nav-socials'>
            <a href='https://github.com/Patfindley' target='_blank' rel="noreferrer"><img className='socials github' src={github_mark} alt='github' /></a>
            <a href='https://www.linkedin.com/in/patfindley/' target='_blank' rel="noreferrer"><img className='socials linkedin' src={linkedin} alt='linkedin' /></a>
          </div>
          </div>
        </nav>
  )
}

export default Nav;