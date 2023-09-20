import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Tooltip } from "@mui/material";
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello, I'm John Wofford </h2>

        <div className="prompt">
          <p>

              <span>Lets build something</span>{' '}

            <Typewriter
            words={['facinating', 'unique', 'inspiring', 'creative', 'together!']}
            loop={1}
            // cursor='false'
            // cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
          </p>
          <Link
            to="https://github.com/jwoff1991"
            name="Check out my code!"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Tooltip title="My Github">
              <GitHubIcon />
            </Tooltip>
          </Link>

          <Link
            to="https://www.linkedin.com/in/jonathanbwofford/"
            name="Connect with me on LinkedIn!"
            target="_blank"
            rel="noreferrer"
          >
            <Tooltip title="My LinkedIn">
              <LinkedInIcon />
            </Tooltip>
          </Link>
          <Link
            to="https://www.instagram.com/jwoff91/"
            name="Add me on Instagram!"
            target="_blank"
            rel="noreferrer"
          >
            <Tooltip title="My Instagram ">
              <InstagramIcon />
            </Tooltip>
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
