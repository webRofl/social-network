import React from 'react';
import classes from './SmallUserPhoto.module.css';
import userPhoto from '../../../assets/images/userPhoto.png';

type PropType = {
  profilePhoto: string;
  fullName: string;
  logout: () => void;
};

const SmallUserPhoto: React.FC<PropType> = (props) => {
  return (
    <div className={classes.userPhotoBlock}>
      <img
        src={props.profilePhoto ? props.profilePhoto : userPhoto}
        alt="small user avatar"
      />
      <span>{props.fullName}</span>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
};

export default SmallUserPhoto;
