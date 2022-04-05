import React from 'react';
import classes from './Message.module.css';

type PropType = {
  owner: string;
  message: string;
};

const Message: React.FC<PropType> = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <img
          src="https://im0-tub-ru.yandex.net/i?id=8d612cb897928ddfecd1b3d72260aa48-sr&n=13"
          alt="logo"
        />
      </div>
      <div className={classes.message}>
        <div className={classes.owner}>
          <span>{props.owner === 'me' ? null : props.owner}</span>
        </div>
        {props.message}
      </div>
    </div>
  );
};

export default Message;
