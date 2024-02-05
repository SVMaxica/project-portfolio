import './Projects.css';
import projectsData from '../../../projects.json';
import { Buttons } from '../Buttons/Buttons';
import GithubIcon from '../../assets/github.svg';
import LiveDemoIcon from '../../assets/web.svg';
import { forwardRef } from 'react';

export const Projects = forwardRef((props, ref) => {
  const ProjectCard = ({ project }) => {
    return (
      <div ref={ref} className="project-card">
        <img
          src={project.image}
          alt={`Project thumbnail for ${project.name}`}
          className="project-image"
        />
        <div className="project-details">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="project-tags" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="project-buttons">
            <Buttons
              type="live-demo"
              text="Live Demo"
              icon={<img src={LiveDemoIcon} alt="Live demo icon" />}
              href={project.netlify}
            />
            <Buttons
              type="view-code"
              text="View the Code"
              icon={<img src={GithubIcon} alt="GitHub icon" />}
              href={project.github}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects-wrapper">
      <div className="project-content-wrapper">
        <h1 className="projects-title">Featured Projects</h1>
        {projectsData.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
});
