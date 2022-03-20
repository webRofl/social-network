import React from 'react';
import classes from './Header.module.css';
import Navbar from './Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import SmallUserPhoto from '../common/SmallUserPhoto/SmallUserPhoto';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://i.pinimg.com/originals/16/de/5f/16de5f8dd1ffe99f9e169a0605a960b3.png"
        alt="logo img"
      />
      <Navbar />
      <div className={classes.authBlock}>
        {props.isAuth ? (
          <SmallUserPhoto
            profilePhoto={props.profilePhoto}
            fullName={props.fullName}
            logout={props.logout}
          />
        ) : (
          <NavLink
            to="/login"
            className={(navData) => (navData.isActive ? classes.active : null)}
          >
            <div className={classes.loginBlock}>Login</div>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
