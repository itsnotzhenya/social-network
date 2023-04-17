import React from 'react';
import logo from '../logo.svg';

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <h1 className='main_title'>MySpace</h1>
    </header>
  );
};
