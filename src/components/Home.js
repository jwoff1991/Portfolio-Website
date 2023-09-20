// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import { Tooltip } from "@mui/material";
// import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about-section-with-image">
        <div className="left-side-of-about">
          <div className="about-hello">Hello, I'm John Wofford </div>
          <div className="prompt">
            <div className="about-lets-build">
              <div className="letsbuild-text">Lets build something</div>
              <Typewriter
                words={[
                  " facinating",
                  " unique",
                  " inspiring",
                  " creative",
                  " TOGETHER!",
                ]}
                loop={1}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </div>
          </div>
        </div>
        <div className="right-side-of-about">
          <img src="images/johncode.png" alt="john yelling code" />
        </div>
      </div>
      <div className="about-me-and-skills">
        <div className="about-me">
          Who am I?
          <p>
            I am a former tech recruiter turned software engineer. After earning
            my Marketing degree from Cal State Fullerton, I found myself in the
            world of recruiting. Quickly gaining traction, I found myself
            attracted to the tech sector and decided to put my focus there.
            There is where I found my secret passion for coding, and had always
            asked why I didnt do this myself.
          </p>
          <p>
            Fast-forward to the beginning of 2023. Tech-layoffs were in full
            force, the market was slowing, and my whole department found
            ourselves in a similar position as so many others in the industry. A
            blessing in disguise, this was the fire I needed and I instantly enrolled
            in a course to start my career as a Software Engineer.
          </p>
          <p>
            Over the course of this program I have grown personally and
            professionally. I have learned about the fustrations and the joys of
            programming. I have leanred best practices, how to research new
            languages, and how to work with a team. I have learned that I am a
            problem solver, a team player, and a creator. I am proud to say that
            I am a Software Engineer.
          </p>
          <p>Lets get out there and create something TOGETHER!</p>
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
