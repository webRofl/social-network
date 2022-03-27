import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink
          to={'/profile/' + props.id}
          className={(navData) => (navData.isActive ? classes.active : null)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? classes.active : null)}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/users"
          className={(navData) => (navData.isActive ? classes.active : null)}
        >
          Users
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? classes.active : null)}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? classes.active : null)}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? classes.active : null)}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
