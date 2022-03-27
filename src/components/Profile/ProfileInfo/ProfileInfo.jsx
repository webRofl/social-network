import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userDefaultPhoto from '../../../assets/images/userPhoto.png';
import StatusComponent from './StatusComponent/StatusComponent';
import ProfileData from './ProfileData/ProfileData';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const uploadPhoto = (event) => {
    if (event.target.files.length) {
      props.updatePhoto(event.target.files[0]);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.logoDiv}>
        <img
          className={classes.logo}
          src={
            props.profile.photos.large
              ? props.profile.photos.large
              : userDefaultPhoto
          }
          alt="big avatar"
        />
        {props.id === parseInt(props.url.params.userId) ? (
          <input type="file" onChange={uploadPhoto} />
        ) : null}
      </div>
      <div>
        <StatusComponent status={props.status} setStatus={props.setStatus} />
        <ProfileData
          aboutMe={props.profile.aboutMe}
          contacts={props.profile.contacts}
          fullName={props.profile.fullName}
          lookingForAJob={props.profile.lookingForAJob}
          lookingForAJobDescription={props.profile.lookingForAJobDescription}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
