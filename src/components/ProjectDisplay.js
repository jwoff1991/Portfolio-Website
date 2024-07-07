import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../projectData/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Tooltip } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import "../styles/projectItem.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  if (!project) {
    return <div>Project not found.</div>;
  }


  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img className='project-image' src={project.image} alt={project.alt} />

      <div className="project-display-links">
        <Link
          to={project.gitHub}
          name="Check out my sourcode for this project!"
          target="_blank"
        >
          <Tooltip title="Project Repo">
            <GitHubIcon />
          </Tooltip>
        </Link>
        {project.link && (
          <Tooltip title="Project Link">
            <a href={project.link} aria-label="Check out the live site!" target="_blank" rel="noopener noreferrer">
              <LanguageIcon />
            </a>
          </Tooltip>
        )}
      </div>
      <div className="project-display-skills">
        Languages used: {project.skills}
      </div>
      <div className="project-display-details-container">
        About this project:
        <div className="project-display-details">{project.details}</div>
      </div>
    </div>
  );
}

  export default ProjectDisplay;
