import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { aboutMeData } from './data';
import style from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <section id="about">
      <div className={style.title}>
        <h3>{aboutMeData.title}</h3>
      </div>
      <div className={style.aboutContainer}>
        <div className={style.aboutLeft}>
          {aboutMeData.paragraphs.map((paragraph, index) => (
            <p key={index} className={style.aboutP}>
              {paragraph}
            </p>
          ))}
          <HashLink smooth to={aboutMeData.linkTo} className={style.aboutA}>
            {aboutMeData.linkText}
          </HashLink>{' '}
          <span className={style.linkSuffix}>
            {aboutMeData.linkSuffix}
          </span>    
        </div>
      </div>
      <br />
    </section>
  );
};

export default AboutMe;