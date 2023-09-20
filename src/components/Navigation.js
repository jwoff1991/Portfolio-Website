import { NavLink, Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css'
import ReorderIcon from "@mui/icons-material/Reorder";
import { useEffect, useState } from "react";

function Navigation() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation()

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className="navbar" id={expandNavbar ? "open" : "closed"}>
      <div className="toggleButton">
        <button onClick={(e) => setExpandNavbar((prev) => !prev)}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links ">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <Link to="https://drive.google.com/file/d/1JbxFCcK3AHcfl-A-0HYi1CzfKv9b6FYP/view?usp=drive_link" target='_blank' >Resume</Link>
      </div>
    </div>
  );
}

export default Navigation;
