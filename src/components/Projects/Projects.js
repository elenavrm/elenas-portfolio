import React from 'react';
import { Link } from 'react-router-dom';
import ProjectList from './ProjectList';
import style from './Projects.module.scss';

const Projects = () => {
  return (
    <section id="projects">
      <ProjectList showAll={true} />

      <div className={style.btnProject}>
        <Link to="/" 
        className={style.projectBtn}>go back
        </Link>
      </div>
    </section>
  );
};

export default Projects;