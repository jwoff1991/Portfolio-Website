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
            <span>Lets build something</span>{" "}
            <Typewriter
              words={[
                "facinating",
                "unique",
                "inspiring",
                "creative",
                "together!",
              ]}
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
        </div>
        {/* <div className="homepage-email">Email: jonathanbrodie91@gmail.com</div> */}
      </div>
      <div className="about-me-and-skills">
        <div className="about-me">
          Who am I?
          <p>
            I am a former tech recruiter turned software engineer. After earning
            my Marketing degree from Cal State Fullerton, I found myself in the
            world of recruiting. Quickly gaining traction in this career, I
            found myself attract to the tech sector and decided to put my focus
            there. There is where I found my secret passion for coding, and had
            always why I didnt do this carrer myself.
          </p>
          <p>
            Fast-forward to the beginning of 2023. Tech-layoffs were in full
            force, the market was slowing, and my whole department found
            themselves in a similar to so many others in the industry. This was
            the fire I needed and I instantly enrolled in a course to start my
            career as a Software Engineer.
          </p>
          <p>
            Over the course of this program I feel as I have grown personally
            and professionally.
          </p>
        </div>
        <div className="skills">
          <div className="skills-heading">Skills</div>
          <div className="list-for-frontend">
            <div className="skills-title">Frontend</div>
            <div className="languages">ReactJS/Redux, HTML, CSS</div>
          </div>
          <div className="list-for-backend">
            <div className="skills-title">Backend</div>
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
