import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";

function Home() {
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
    <div className="home">
      <div className="about">

          <h2>Hello, my name is John </h2>

        <div className="prompt">
          <p>
            A Fullstack Software Developer with a passion for learning and
            creating.
          </p>
          <GitHubIcon onClick={gitHubRedirect} />
          <LinkedInIcon onClick={linkedInRedirect} />
          <InstagramIcon onClick={instagramRedirect} />
          {/* need to figure out what to do with click on email */}
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Frontend-end</h2>
            <span>ReactJS, Redux, HTML, CSS, MaterialUI</span>
            <h2>Backend-end</h2>
            <span>EspressJS, SQL, Postman, PostgreSQL</span>
            <h2>Languages</h2>
            <span>Javascript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
