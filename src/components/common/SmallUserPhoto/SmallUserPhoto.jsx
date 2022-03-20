import React from 'react';
import classes from './SmallUserPhoto.module.css';
import userPhoto from '../../../assets/images/userPhoto.png';

const SmallUserPhoto = (props) => {
  return (
    <div className={classes.userPhotoBlock}>
      <img
        src={props.profilePhoto ? props.userPhoto : userPhoto}
        alt="small user avatar"
      />
      <span>{props.fullName}</span>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
};

export default SmallUserPhoto;
