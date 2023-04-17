import React from 'react';
import logo from '../../logo.svg';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" />
      <h1 className={s.main_title}>MySpace</h1>
    </header>
  );
};
