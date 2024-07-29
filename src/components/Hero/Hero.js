import React from 'react';
import Navbar from '../Navbar/Navbar/Navbar';
import NavMobile from '../Navbar/NavbarMobile/NavMobile';
import style from './Hero.module.scss';

const Hero = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
          <a href="/" className={style.ev}>
            <span className={style.e}>
            E</span>lena 
            <span className={style.v}>
            V</span>
          </a>
      </div>
      <NavMobile />
      <Navbar />
    </header>
  );
};

export default Hero;