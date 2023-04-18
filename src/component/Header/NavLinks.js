import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = ({setDraweIsopen}) => {

  const closeDrawer = props => {
    setDraweIsopen(false);
  };

  return <ul className="nav-links">
    <li onClick={() => closeDrawer()}>
      <NavLink to="/" exact>HOME</NavLink>
    </li>
    {/* <li onClick={() => closeDrawer()} >
      <NavLink to="/service">SERVICES</NavLink>
    </li> */}
    <li onClick={() => closeDrawer()}>
      <NavLink to="/project">PROJECT</NavLink>
    </li>
    <li onClick={() => closeDrawer()}>
      <NavLink to="/about">ABOUT</NavLink>
    </li>
    <li onClick={() => closeDrawer()}>
      <NavLink to="/contect">CONTACT</NavLink>
    </li>
  </ul>
};

export default NavLinks;