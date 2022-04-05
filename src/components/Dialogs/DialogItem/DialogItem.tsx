import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

type PropType = {
  path: string;
  name: string;
};

const DialogItem: React.FC<PropType> = (props) => {
  return (
    <NavLink
      to={props.path}
      //@ts-ignore
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
