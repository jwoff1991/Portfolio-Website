import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";
import { Link } from 'react-router-dom'

function Footer() {

  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://github.com/jwoff1991" target="_blank" rel="noreferrer"> <GitHubIcon /></Link>
        <Link to="https://www.linkedin.com/in/jonathanbwofford/" target="_blank" rel="noreferrer"><LinkedInIcon /></Link>
        <Link to="https://www.instagram.com/jwoff91/" target="_blank" rel="noreferrer"><InstagramIcon /></Link>
         {/* need to figure out what to do with click on email */}
        <Link ><EmailIcon /></Link>
      </div>
      <p> &copy; 2023 Jonathan Wofford</p>
    </div>
  );
}

export default Footer;
