import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type PropType = {};

const Profile: React.FC<PropType> = (props) => {
  return (
    <div>
      {/* @ts-ignore */}
      <ProfileInfo {...props} />
      {/* @ts-ignore */}
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
