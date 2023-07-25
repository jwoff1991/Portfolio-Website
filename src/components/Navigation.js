import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/experience">Experience</NavLink>
    </nav>
  );
}

export default Navigation;
