import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from 'react-router-dom'
import "../styles/Home.css";

function Home() {

  return (
    <div className="home">
      <div className="about">

          <h2>Hello, my name is John </h2>

        <div className="prompt">
          <p>
            A Fullstack Software Developer with a passion for learning and
            creating.
          </p>
          <Link to="https://github.com/jwoff1991" name='Check out my code!' target="_blank" rel="noreferrer"> <GitHubIcon /></Link>
        <Link to="https://www.linkedin.com/in/jonathanbwofford/" name='Connect with me on LinkedIn!' target="_blank" rel="noreferrer"><LinkedInIcon /></Link>
        <Link to="https://www.instagram.com/jwoff91/" name='Add me on Instagram!' target="_blank" rel="noreferrer"><InstagramIcon /></Link>
          {/* need to figure out what to do with click on email */}
          <Link ><EmailIcon /></Link>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Frontend-end</h2>
            <span>ReactJS, Redux, HTML, CSS</span>
            <h2>Backend-end</h2>
            <span>EspressJS, SQL, Postman, Postgres, Docker, Flask, SQAlchemy, AWS</span>
            <h2>Languages</h2>
            <span>Javascript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
