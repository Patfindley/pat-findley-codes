import { Link } from "react-router-dom";
import './Nav.css';
import github_mark from '../../assets/GitHub-Mark-32px.png'
import linkedin from '../../assets/linkedin-logo.png'

const Nav = () => {
  return (
    <nav className="header-nav">
          <ul className="nav-links">
              <Link to='/about' className='link'><li>About</li></Link>
              <Link to='/projects' className='link'><li>Projects</li></Link>
              <Link to='/contact' className='link'><li>Contact</li></Link>
          </ul>
          <div className='nav-socials'>
            <a href='https://github.com/Patfindley' target='_blank' rel="noreferrer"><img className='socials github' src={github_mark} alt='github' /></a>
            <a href='https://www.linkedin.com/in/patfindley/' target='_blank' rel="noreferrer"><img className='socials linkedin' src={linkedin} alt='linkedin' /></a>
          </div>
        </nav>
  )
}

export default Nav;