import ProjectItem from "./ProjectItem";
import '../styles/Projects.css';
import { ProjectList } from "../projectData/ProjectList";

function Projects() {
  const hackathons = ProjectList.filter(project => project.tag === "hackathon").map(project => (
    <ProjectItem key={project.id} id={project.id} name={project.name} image={project.image} tag={project.tag} />
  ));

  const regularProjects = ProjectList.filter(project => project.tag === "project").map(project => (
    <ProjectItem key={project.id} id={project.id} name={project.name} image={project.image} tag={project.tag} />
  ));

  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div>
        <h2>Hackathon Projects</h2>
        <div className='projectList'>
          {hackathons}
        </div>
      </div>

      <div>
        <h2>Projects</h2>
        <div className='projectList'>
          {regularProjects}
        </div>
      </div>
    </div>
  );
}

export default Projects;
