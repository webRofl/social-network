import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import userDefaultPhoto from '../../../assets/images/userPhoto.png';
import StatusComponent from './StatusComponent/StatusComponent';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const {
    aboutMe,
    contacts,
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    photos,
  } = props.profile;

  const userInfoAutoComplete = (profileElement, nameOnPage) =>
    profileElement ? (
      <li>
        <a
          href={'http://www.' + profileElement}
          target="_blank"
          rel="noreferrer"
        >
          {nameOnPage}
        </a>
      </li>
    ) : null;

  return (
    <div className={classes.wrapper}>
      <div className={classes.logoDiv}>
        <img
          className={classes.logo}
          src={photos.large ? photos.large : userDefaultPhoto}
          alt="big avatar"
        />
      </div>
      <div className={classes.description}>
        <ul>
          <li>Name: {fullName}</li>
          {aboutMe ? <li>About Me: {aboutMe}</li> : null}
          {lookingForAJob ? (
            <li>Looking For A Job</li>
          ) : (
            <li>Not Looking For A Job</li>
          )}
          {lookingForAJobDescription && lookingForAJob ? (
            <li>Job Description: {lookingForAJobDescription}</li>
          ) : null}
          {userInfoAutoComplete(contacts.facebook, 'Facebook')}
          {userInfoAutoComplete(contacts.github, 'GitHub')}
          {userInfoAutoComplete(contacts.instagram, 'Instagram')}
          {userInfoAutoComplete(contacts.mainLink, 'My Link')}
          {userInfoAutoComplete(contacts.twitter, 'Twitter')}
          {userInfoAutoComplete(contacts.vk, 'Vk')}
          {userInfoAutoComplete(contacts.website, 'Personal Website')}
          {userInfoAutoComplete(contacts.youtube, 'Youtube')}
        </ul>
        <StatusComponent status={props.status} setStatus={props.setStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
