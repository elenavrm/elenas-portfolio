import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { navigation } from '../data';
import style from './NavbarMobile.module.scss';
import useOverflowHidden from '../../../hooks/useOverflowHidden';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  useOverflowHidden(isOpen);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <button
        className={`${style.hamburger} 
        ${isOpen ? style.open : ''}`}
        onClick={toggleMenu}
        type="button"
      >
        <div className={style.lineTop}></div>
        <div className={style.lineMiddle}></div>
        <div className={style.lineBottom}></div>
      </button>
      {isOpen && (
        <ul className={style.menu}>
          {Object.values(navigation).map(({ text, path }) => (
            <li key={path} onClick={closeMenu}>
              <HashLink 
              smooth to={`#${path}`} 
              className={style.sectionHashLink}>
                {text.toUpperCase()}
              </HashLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavMobile;