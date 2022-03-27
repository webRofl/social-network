import React from 'react';
import classes from './ProfileData.module.css';

const ProfileData = (props) => {
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
    <div className={classes.description}>
      <ul>
        <li>Name: {props.fullName}</li>
        {props.aboutMe ? <li>About Me: {props.aboutMe}</li> : null}
        {props.lookingForAJob ? (
          <li>Looking For A Job</li>
        ) : (
          <li>Not Looking For A Job</li>
        )}
        {props.lookingForAJobDescription && props.lookingForAJob ? (
          <li>Job Description: {props.lookingForAJobDescription}</li>
        ) : null}
        {userInfoAutoComplete(props.contacts.facebook, 'Facebook')}
        {userInfoAutoComplete(props.contacts.github, 'GitHub')}
        {userInfoAutoComplete(props.contacts.instagram, 'Instagram')}
        {userInfoAutoComplete(props.contacts.mainLink, 'My Link')}
        {userInfoAutoComplete(props.contacts.twitter, 'Twitter')}
        {userInfoAutoComplete(props.contacts.vk, 'Vk')}
        {userInfoAutoComplete(props.contacts.website, 'Personal Website')}
        {userInfoAutoComplete(props.contacts.youtube, 'Youtube')}
      </ul>
    </div>
  );
};

export default ProfileData;
