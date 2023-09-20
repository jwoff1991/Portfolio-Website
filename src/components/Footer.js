import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Tooltip, appBarClasses } from "@mui/material";
import "../styles/Footer.css";
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <div className="footer">
      <div className="socialMedia">
        <Link
          to="https://github.com/jwoff1991"
          name="Check out my code!"
          target="_blank"
          rel="noreferrer"
        >
          <Tooltip title="My Github" placement="top">
            <GitHubIcon />
          </Tooltip>
        </Link>
        <Link
          to="https://www.linkedin.com/in/jonathanbwofford/"
          name="Connect with me on LinkedIn!"
          target="_blank"
          rel="noreferrer"
        >
          <Tooltip title="My LinkedIn" placement="top">
            <LinkedInIcon />
          </Tooltip>
        </Link>
        <Link
          to="https://www.instagram.com/jwoff91/"
          name="Add me on Instagram!"
          target="_blank"
          rel="noreferrer"
        >
          <Tooltip title="My Instagram" placement="top">
            <InstagramIcon />
          </Tooltip>
        </Link>
      </div>
      <div className="homepage-email">Email: jonathanbrodie91@gmail.com</div>
      <p> &copy; 2023 John Wofford</p>
    </div>
  );
}

export default Footer;
