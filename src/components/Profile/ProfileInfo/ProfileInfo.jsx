import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userDefaultPhoto from '../../../assets/images/userPhoto.png';
import StatusComponent from './StatusComponent/StatusComponent';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const editModeHandler = () => {
    props.setEditMode(true);
  };

  const uploadPhoto = (event) => {
    if (event.target.files.length) {
      props.updatePhoto(event.target.files[0]);
    }
  };

  const isOwner = () => props.id === parseInt(props.url.params.userId);

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
        {isOwner() ? <input type="file" onChange={uploadPhoto} /> : null}
      </div>
      <div className={classes.description}>
        <StatusComponent status={props.status} setStatus={props.setStatus} />

        {isOwner() && !props.editMode ? (
          <input type="button" value="Edit profile" onClick={editModeHandler} />
        ) : null}

        {props.editMode ? (
          <ProfileDataForm
            setEditMode={props.setEditMode}
            updateProfile={props.updateProfile}
            errorForm={props.errorForm}
          />
        ) : (
          <ProfileData
            aboutMe={props.profile.aboutMe}
            contacts={props.profile.contacts}
            fullName={props.profile.fullName}
            lookingForAJob={props.profile.lookingForAJob}
            lookingForAJobDescription={props.profile.lookingForAJobDescription}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
