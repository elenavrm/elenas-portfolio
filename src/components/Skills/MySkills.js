import React from 'react';
import { frontEndSkills, backEndSkills } from './data';
import style from './MySkills.module.scss';

const MySkills = () => {
  return (
    <div className={style.skillsProgress}>
      <div className={style.skills}>
        <p className={style.pSl}>Tech Stack</p>
        <ul className={style.skillList}>
          {frontEndSkills.map((skill, index) => (
            <li 
            className={style.skillItem} 
            key={index}>{skill}
            </li>
          ))}
        </ul>
      </div>

      <div className={style.skills}>
        <ul className={style.skillList}>
          {backEndSkills.map((skill, index) => (
            <li 
            className={style.skillItem} 
            key={index}>{skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MySkills;