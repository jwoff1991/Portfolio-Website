import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";

function Footer() {
  const gitHubRedirect = () => {
    window.location.replace("https://github.com/jwoff1991");
  };
  const linkedInRedirect = () => {
    window.location.replace("https://www.linkedin.com/in/jonathanbwofford/");
  };

  const instagramRedirect = () => {
    window.location.replace("https://www.instagram.com/jwoff91/");
  };
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHubIcon onClick={gitHubRedirect}/>
        <LinkedInIcon onClick={linkedInRedirect}/>
        <InstagramIcon onClick={instagramRedirect}/>
         {/* need to figure out what to do with click on email */}
        <EmailIcon />
      </div>
      <p> &copy; 2023 Jonathan Wofford</p>
    </div>
  );
}

export default Footer;
