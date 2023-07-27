import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../projectData/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";



function ProjectDisplay({ image, name }) {
    const { id } = useParams()
    const project = ProjectList[id]
    return (
      <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <h1> <b>Skills:</b> {project.skills}</h1>
        <h2>{project.details}</h2>
        <Link to={project.gitHub} ><GitHubIcon /></Link>
      </div>
    );
  }

  export default ProjectDisplay;
