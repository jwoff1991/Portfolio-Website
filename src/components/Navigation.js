import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'

function Navigation() {
  return (
    <div className="navbar">
      <div className="toggleButton">
        <button></button>
      </div>
      <div className="links">

          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
        
      </div>
    </div>
  );
}

export default Navigation;
