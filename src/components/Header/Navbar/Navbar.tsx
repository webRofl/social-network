import { connect } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

type PropType = {
  id: number;
};

const Navbar: React.FC<PropType> = (props) => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink
          to={'/profile/' + props.id}
          //@ts-ignore
          className={(navData) => (navData.isActive ? classes.active : null)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          //@ts-ignore
          className={(navData) => (navData.isActive ? classes.active : null)}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/users"
          //@ts-ignore
          className={(navData) => (navData.isActive ? classes.active : null)}
        >
          Users
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          //@ts-ignore
          className={(navData) => (navData.isActive ? classes.active : null)}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          //@ts-ignore
          className={(navData) => (navData.isActive ? classes.active : null)}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          //@ts-ignore
          className={(navData) => (navData.isActive ? classes.active : null)}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
