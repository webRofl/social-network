import React from 'react';
import classes from './User.module.css';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/images/userPhoto.png';
import { UserType } from '../../../types/types';

type PropType = {
  user: UserType;
  inProgressBtn: number[];
  toggleFollowTC: (user: UserType) => void;
};

const User: React.FC<PropType> = ({ user, ...props }) => {
  return (
    <div className={classes.wrapper}>
      <div>
        <button
          disabled={props.inProgressBtn.some((id: number) => id === user.id)}
          onClick={() => props.toggleFollowTC(user)}
        >
          {user.followed ? 'Unfollow' : 'Follow'}
        </button>
      </div>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img
            src={user.photos.small ? user.photos.small : userPhoto}
            alt="avatar"
            className={classes.photo}
          />
        </NavLink>
      </div>
      <div>
        <ul>
          <li>{user.name}</li>
          <li>{user.status}</li>
          <li>{'user.location.country'}</li>
          <li>{'user.location.city'}</li>
        </ul>
      </div>
    </div>
  );
};

export default User;
