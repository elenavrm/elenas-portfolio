import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { navigation } from '../data';
import style from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav>
      <ul className={style.navigation}>
        {Object.values(navigation).map(({ text, path }) => (
          <li key={path}>
            <HashLink 
            smooth to={`#${path}`} 
            className={style.navigationLink}>
              {text.toUpperCase()}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;