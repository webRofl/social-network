import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import MyPostForm from './MyPostForm/MyPostForm';

const MyPosts = (props) => {
  const postElements = props.myPostsState.posts.map((data, index) => (
    <Post name={data.name} likesCount={data.likesCount} key={index} />
  ));
  //my edits (key={index})

  return (
    <div>
      <div className={classes.addPost}>
        <MyPostForm addPost={props.addPost} />
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
