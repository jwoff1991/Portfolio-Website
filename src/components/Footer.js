import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../styles/footer.css";

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
      </div>
      <p> &copy; 2023 Jonathan Wofford</p>
    </div>
  );
}

export default Footer;
