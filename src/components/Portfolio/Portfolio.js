import React, { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import blue from '../../assets/images/blue.png'; 
import blueMobile from '../../assets/images/blue3.png';
import style from './Portfolio.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Portfolio = () => {
  const imgRef = useRef(null);
  const h1Ref = useRef(null);

  const handleImageIntersection = () => {
    imgRef.current.classList.add(style.slideIn);
  };

  const handleH1Intersection = () => {
    h1Ref.current.classList.add(style.slideInH1);
  };

  useIntersectionObserver(imgRef, handleImageIntersection, {
    threshold: 0.1, 
  });

  useIntersectionObserver(h1Ref, handleH1Intersection, {
    threshold: 0.1, 
  });

  return (
    <div className={style.topSection}>
      <div className={style.topLeft}>
        <h1 ref={h1Ref}>PORTFOLIO</h1>
        <p className={style.topP}>
          Hi! My name is Elena <br />
          and I am a <span className={style.topSpan}>
          software developer
        </span>
        </p>
        <button className={style.topBtn}>
          <HashLink smooth to="#contacts">
            contact me
          </HashLink>
        </button>
      </div>
      <div className={style.topRight}>
        <img
          ref={imgRef}
          className={`${style.topImg} ${style.desktopImg}`}
          src={blue}
          alt="hero img"
        />
        <img
          className={`${style.topImg} ${style.mobileImg}`}
          src={blueMobile}
          alt="hero img mobile"
        />
      </div>
    </div>
  );
};

export default Portfolio;