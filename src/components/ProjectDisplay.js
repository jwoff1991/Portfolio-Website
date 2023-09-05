import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../projectData/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from '@mui/icons-material/Language';
import LinkIcon from '@mui/icons-material/Link';




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
        <h1>
          {" "}
          <b>Skills:</b> {project.skills}
        </h1>
        <h2>{project.details}</h2>
        <Link
          to={project.gitHub}
          name="Check out my sourcode for this project!"
        >
          <GitHubIcon />
        </Link>
        {externalLink}
      </div>
    );
  }

  export default ProjectDisplay;
