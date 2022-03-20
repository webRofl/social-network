import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={classes.wrapper}>
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
