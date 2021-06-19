import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
  return (
    <nav className="header-nav">
          <ul className="nav-links">
              <Link to='/About' className='link'><li>About</li></Link>
              <Link to='/Projects' className='link'><li>Projects</li></Link>
              <li>Contact</li>
          </ul>
        </nav>
  )
}

export default Nav;