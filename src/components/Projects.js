import ProjectItem from "./ProjectItem";
import '../styles/Projects.css'
import { ProjectList } from "../projectData/ProjectList";

function Projects() {
  const Projects = ProjectList.map((project) => {

    return (
      <ProjectItem  key={project.id} id={project.id} name={project.name} image={project.image}/>
    )
  })
  console.log(Projects)
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className ='projectList'>
        {Projects}
      </div>
    </div>
  );
}

export default Projects;
