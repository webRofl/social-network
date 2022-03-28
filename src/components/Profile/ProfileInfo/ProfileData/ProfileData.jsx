import React from 'react';
import classes from './ProfileData.module.css';

const ProfileData = (props) => {
  const userInfoAutoComplete = (profileElement, nameOnPage) =>
    profileElement ? (
      <li>
        <b>{nameOnPage} : </b>
        <a href={profileElement} target="_blank" rel="noreferrer">
          {profileElement}
        </a>
      </li>
    ) : null;

  return (
    <>
      <ul className={classes.wrapper__profileDataBlock}>
        <li>
          <b>Name : </b> {props.fullName}
        </li>
        {props.aboutMe ? (
          <li>
            <b>About Me : </b> {props.aboutMe}
          </li>
        ) : null}
        {props.lookingForAJob ? (
          <li>
            <b>Looking For A Job</b>
          </li>
        ) : (
          <li>
            <b>Not Looking For A Job</b>
          </li>
        )}
        {props.lookingForAJobDescription && props.lookingForAJob ? (
          <li>
            <b>Job Description : </b> {props.lookingForAJobDescription}
          </li>
        ) : null}
        {userInfoAutoComplete(props.contacts.facebook, 'Facebook')}
        {userInfoAutoComplete(props.contacts.github, 'GitHub')}
        {userInfoAutoComplete(props.contacts.instagram, 'Instagram')}
        {userInfoAutoComplete(props.contacts.mainLink, 'My Link')}
        {userInfoAutoComplete(props.contacts.twitter, 'Twitter')}
        {userInfoAutoComplete(props.contacts.vk, 'Vk')}
        {userInfoAutoComplete(props.contacts.website, 'Personal Website')}
        {userInfoAutoComplete(props.contacts.youtube, 'Youtube')}
        {props.isOwner() && !props.editMode ? (
          <input
            type="button"
            value="Edit profile"
            onClick={props.editModeHandler}
            className={classes.wrapper__profileDataEditBtn}
          />
        ) : null}
      </ul>
    </>
  );
};

export default ProfileData;
