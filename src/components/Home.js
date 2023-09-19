import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from 'react-router-dom'
import Typist from "react-typist";
import "../styles/Home.css";

function Home() {
  let wordsArray = [
    "facinating",
    "unique",
    "groundbreaking",
    "creative",
    "together",
  ];



  return (
    <div className="home">
      <div className="about">
        <h2>Hello, my name is John </h2>

        <div className="prompt">
          <p>
            <Typist className="MyTypist" curser={0}>
              <span>Lets create something facinating</span>
              <Typist.Backspace count={10} delay={1200} />
              <span>unique</span>
              <Typist.Backspace count={6} delay={1200} />
              <span>groundbreaking</span>
              <Typist.Backspace count={14} delay={1200} />
              <span>creative</span>
              <Typist.Backspace count={8} delay={1200} />
              <span>together!</span>
            </Typist>
          </p>
          <Link
            to="https://github.com/jwoff1991"
            name="Check out my code!"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <GitHubIcon />
          </Link>
          <Link
            to="https://www.linkedin.com/in/jonathanbwofford/"
            name="Connect with me on LinkedIn!"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </Link>
          <Link
            to="https://www.instagram.com/jwoff91/"
            name="Add me on Instagram!"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </Link>

          {/* need to figure out what to do with click on email */}
          {/* <Link ><EmailIcon /></Link> */}
        </div>
        <div className="homepage-email">Email: jonathanbrodie91@gmail.com</div>
      </div>
      <div className="about-me-and-skills">
        <div className="about-me">
          This will be the section I place my about me in
        </div>
        <div className="skills">
          <div className="skills-heading">Skills</div>
          <div className="list-for-frontend">
            <div className="title">Frontend</div>
            <div className="languages">ReactJS/Redux, HTML, CSS</div>
          </div>
          <div className="list-for-backend">
            <div className="title">Backend</div>
            <div className="languages">
              Flask, Postgres, EspressJS, SQL, Docker, SQAlchemy, AWS
            </div>
          </div>
          <div className="title">Languages</div>
          <div className="languages">Javascript, Python</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
