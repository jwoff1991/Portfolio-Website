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
          <img src="images/johncode.png" alt="john yelling code" />
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
          Who am I?
          <p>
            I transitioned from tech recruiting to becoming a software engineer
            after earning my Marketing degree from Cal State Fullerton.
            Initially drawn to the tech sector, I discovered my passion for
            coding and wondered why I hadn't pursued it sooner.
          </p>
          <p>
            In early 2023, amidst widespread tech layoffs and a slowing market,
            my department, like many others, faced a similar situation. This
            turned out to be a blessing in disguise, igniting the motivation I
            needed to immediately enroll in a course to kickstart my career as a
            Software Engineer.
          </p>
          <p>
            Throughout this program and early in my career, I've experienced substantial
            personal and professional growth. From numerous Hackathon winning projects to
            migrating old projects,  I've encountered both the challenges and
            rewards of programming, learned best practices, mastered the art of
            researching new languages, and honed my teamwork skills. I've come
            to realize that I'm a natural problem solver, a collaborative team
            player, and a creative force. I'm proud to say that I am a Software
            Engineer.
          </p>
          <p>Lets get out there and build something TOGETHER!</p>
          <Link
            to="https://docs.google.com/document/d/e/2PACX-1vQkdh8XVHxCveXincec2iaGEO7Ww4kPvDDgu-Gx4de0SzZpbc8v2ohBsmDWdKR-XwLIzMzRcl9pmnBX/pub"
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
