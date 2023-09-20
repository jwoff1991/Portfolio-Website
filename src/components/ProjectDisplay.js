import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../projectData/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Tooltip } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import './projectItem.css'
// import LinkIcon from '@mui/icons-material/Link';




function ProjectDisplay({ image, name }) {
    const { id } = useParams()
    const project = ProjectList[id]

    let externalLink;
    if(project && project.link) {
      externalLink =
        <Link to={project.link} name="Check out the live site!">
          <LanguageIcon />
        </Link>
    }


    return (
      <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.alt} />
        <div>
          <Link
            to={project.gitHub}
            name="Check out my sourcode for this project!"
          >
            <Tooltip title="Project Repo">
              <GitHubIcon />
            </Tooltip>
          </Link>
          <Tooltip title="Project Link">{externalLink}</Tooltip>
        </div>
        <h1>
          {" "}
          <b>Skills:</b> {project.skills}
        </h1>
        <h2>{project.details}</h2>
      </div>
    );
  }

  export default ProjectDisplay;
