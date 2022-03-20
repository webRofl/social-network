import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <NavLink
      to={props.path}
      className={(navData) => (navData.isActive ? classes.active : null)}
    >
      <div className={classes.avatar}>
        <img
          src="https://im0-tub-ru.yandex.net/i?id=8d612cb897928ddfecd1b3d72260aa48-sr&n=13"
          alt="avatar"
        />
      </div>
      <div className={classes.dialogBlock}>{props.name}</div>
    </NavLink>
  );
};

export default DialogItem;
