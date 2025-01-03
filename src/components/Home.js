import { Typewriter } from "react-simple-typewriter";
import "../styles/Home.css";
import "devicon/devicon.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="about-section-with-image">
        <div className="left-side-of-about">
          <div className="about-hello">Hello, I'm John Wofford</div>
          <div className="software-engineer">{"//"}Software Engineer</div>
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
          <img src="images/johncode.png" alt="john yelling code" style={{ filter: 'blur(10px)', transition: 'filter 0.3s ease' }}
  onLoad={e => e.target.style.filter = 'none'}  />
        </div>
      </div>
      <div className="about-me-and-skills">
        <div className="skills">
          {/* <div className="skills-heading">Skills</div>
          <div className="skills-title">Languages</div>
          <div className="list-for-languages">
            <div className="languages">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            </div>
            <div className="languages">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            </div>
          </div>
          <div className="list-for-frontend">
            <div className="skills-title">Frontend</div>
            <div className="div-for-frontend">
              <div className="languages">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              </div>
              <div className="languages">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
              </div>
              <div className="languages">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
              </div>
            </div>
          </div>
          <div className="list-for-backend">
            <div className="skills-title">Backend</div>
            <div className="div-for-backend">
              <div className="languages">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
              </div>
              <div className="languages">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
              </div>
              <div className="languages">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
              </div>
              <div className="languages">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" />
              </div>
              <div className="languages">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
              </div>
              <div className="languages">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" />
              </div>
            </div>
          </div> */}
          <img src="images/skills.png" alt="skills" />
        </div>
        <div className="about-me">
          <h2>Who am I?</h2>
          <p>
            I transitioned from tech recruiting to becoming a software engineer
            after earning my Marketing degree from Cal State Fullerton.
            Initially drawn to the tech sector, I discovered my passion for
            coding and wondered why I hadn't pursued it sooner.
          </p>
          <p>
          Armed with a Bachelor of Applied Science in Computer Science from California State University, Fullerton, my journey has led me to Ronchi SA, where I apply my expertise in React, JavaScript, and Azure to develop critical applications. At Ronchi SA, we've tackled environmental challenges by creating an app that monitors and tracks invasive plant species during eradication, combining my passion for technology with ecological sustainability.
          </p>
          <p>
          My tenure as a Software Engineer extends to self-driven projects, where I've honed user-centric software applications, emphasizing performance optimization and security enhancements. This dedication to continuous improvement and stakeholder collaboration has been pivotal in my development process, allowing me to deliver intuitive solutions that balance technical prowess with user-friendly design.
          </p>
          <p>Lets get out there and build something TOGETHER!</p>
          <Link
            to="https://drive.google.com/file/d/1N8oLqmBuTymLlD7hZHRfdmexKKQJG75A/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
