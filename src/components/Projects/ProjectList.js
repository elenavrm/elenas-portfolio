import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from './data';
import ProjectCard from './ProjectCard';
import style from './Projects.module.scss';

const ProjectList = ({ showAll }) => {
    const displayedProjects = showAll ? projects : projects.slice(0, 3);
  
    return (
      <section id="projects">
        <h3 className={style.title}>
        {showAll ? 'ALL PROJECTS' : 'MY PROJECTS'}
        </h3>
        <div className={style.cardsContainer}>
          {displayedProjects.map((project, index) => (
            <ProjectCard 
            key={index} 
            project={project} />
          ))}
        </div>
  
        {!showAll && (
          <div className={style.btnProject}>
            <Link to="/projects" 
            className={style.projectBtn}>view all
            </Link>
          </div>
        )}
      </section>
    );
  };
  
  export default ProjectList;