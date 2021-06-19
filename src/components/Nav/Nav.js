import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
    <nav className="header-nav">
          <ul className="nav-links">
              <Link to='/about' className='link'><li>About</li></Link>
              <Link to='/projects' className='link'><li>Projects</li></Link>
              <Link to='/contact' className='link'><li>Contact</li></Link>
          </ul>
        </nav>
  )
}

export default Nav;