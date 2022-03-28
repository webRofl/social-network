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
    <div className={classes.appWrapper__profileLogo}>
      <div className={classes.profileLogo__logoBlock}>
        <img
          className={classes.profileLogo__logo}
          src={
            props.profile.photos.large
              ? props.profile.photos.large
              : userDefaultPhoto
          }
          alt="big avatar"
        />
        {isOwner() ? (
          <div className={classes.profileLogo__inputBlock}>
            <span className={classes.profileLogo__uploadFileBtn}>
              Upload photo
            </span>
            <input
              type="file"
              onChange={uploadPhoto}
              className={classes.profileLogo__uploadFileInput}
            />
          </div>
        ) : null}
      </div>
      <div>
        <StatusComponent status={props.status} setStatus={props.setStatus} />

        {props.editMode ? (
          <ProfileDataForm
            setEditMode={props.setEditMode}
            updateProfile={props.updateProfile}
            errorForm={props.errorForm}
            contacts={props.profile.contacts}
            fullName={props.profile.fullName}
            lookingForAJob={props.profile.lookingForAJob}
            lookingForAJobDescription={props.profile.lookingForAJobDescription}
            aboutMe={props.profile.aboutMe}
          />
        ) : (
          <ProfileData
            aboutMe={props.profile.aboutMe}
            contacts={props.profile.contacts}
            fullName={props.profile.fullName}
            lookingForAJob={props.profile.lookingForAJob}
            lookingForAJobDescription={props.profile.lookingForAJobDescription}
            isOwner={isOwner}
            editModeHandler={editModeHandler}
            editMode={props.editMode}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
