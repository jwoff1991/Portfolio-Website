import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../projectData/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Tooltip } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  if (!project) {
    return <div>Project not found.</div>;
  }


  return (
<div className="project">
  {/* Left Column */}
  <div className="project-left">
    <h1>{project.name}</h1>
    <img className="project-image" src={project.image} alt={project.alt} />
    <div className="project-display-links">
      <Link to={project.gitHub} target="_blank">
        <Tooltip title="Project Repo">
          <GitHubIcon />
        </Tooltip>
      </Link>
      {project.link && (
        <Tooltip title="Project Link">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LanguageIcon />
          </a>
        </Tooltip>
      )}
    </div>
  </div>

  {/* Right Column */}
  <div className="project-right">
    <div className="project-display-details-container">
      <h2>About this project:</h2>
      <div>{project.details}</div>
    </div>
    <div className="project-display-skills">
      {project.skills.split(",").map((skill) => (
        <div className="project-skill" key={skill.trim()}>{skill.trim()}</div>
      ))}
    </div>
  </div>
</div>

  );
}

  export default ProjectDisplay;
