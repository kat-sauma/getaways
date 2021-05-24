import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

const Header = () => {
  return (
    <header className={style.headerContainer}>
      <NavLink className={style.linkText} to="/">
                Places To Stay
      </NavLink>
      <h1 className={style.pageTitle}>lil getaways </h1>
      <h4 className={style.subtitle}>
          Find your next secret hiding spot + get a taste of something different.
      </h4>
    </header>
  );
};

export default Header;
