import { NavLink, useLocation } from "react-router-dom";
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
      </div>
    </div>
  );
}

export default Navigation;
