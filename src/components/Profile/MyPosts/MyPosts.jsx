import React from 'react';
import Post from './Post/Post';
import MyPostForm from './MyPostForm/MyPostForm';

const MyPosts = (props) => {
  const postElements = props.myPostsState.posts.map((data, index) => (
    <Post name={data.name} likesCount={data.likesCount} key={index} />
  ));

  return (
    <div>
      <MyPostForm addPost={props.addPost} />
      {postElements}
    </div>
  );
};

export default MyPosts;
