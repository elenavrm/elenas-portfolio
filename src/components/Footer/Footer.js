import React from 'react';
import { FaGithub } from 'react-icons/fa';
import style from './Footer.module.scss';

const Footer = () => {
  const githubUrl = 'https://github.com/elenavrm'; 

  return (
    <footer className={style.footerContainer}>
    <div className={style.footerText}>
      <p>©2025 Elena V. All rights reserved <br/>
        Some materials were taken for educational purposes</p>
    </div>
    <div className={style.footerIcons}>
      <a href={githubUrl} 
      target="_blank" 
      rel="noopener noreferrer">
        <FaGithub 
        size={40} 
        style={{ 
            marginLeft: 10, 
            color: '#fff8ee' 
        }} />
      </a>
    </div>
    </footer>
  );
};

export default Footer;