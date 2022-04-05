import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userDefaultPhoto from '../../../assets/images/userPhoto.png';
import StatusComponent from './StatusComponent/StatusComponent';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import { ProfileContactsType, ProfileType } from '../../../types/types';

type UrlCheckerType = {
  userId: string;
};

type UrlCheckerParamsType = {
  params: UrlCheckerType;
};

type PropType = {
  profile: ProfileType;
  setEditMode: (bool: boolean) => void;
  updatePhoto: (file: string) => void;
  id: number;
  url: UrlCheckerParamsType;
  status: string;
  setStatus: (status: string) => void;
  errorForm: string[];
  editMode: boolean;
  updateProfile: (profile: ProfileType, contacts: ProfileContactsType) => void;
};

const ProfileInfo: React.FC<PropType> = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const editModeHandler = () => {
    props.setEditMode(true);
  };

  const uploadPhoto = (event: React.FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    if (event.target.files.length) {
      //@ts-ignore
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
            <span>Upload photo</span>
            <input
              type="file"
              onChange={uploadPhoto}
              className={classes.profileLogo__uploadFileInput}
            />
          </div>
        ) : null}
      </div>
      <div>
        {/* @ts-ignore */}
        <StatusComponent status={props.status} setStatus={props.setStatus} />

        {props.editMode ? (
          <ProfileDataForm
            setEditMode={props.setEditMode}
            updateProfile={props.updateProfile}
            errorForm={props.errorForm}
            //@ts-ignore
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
