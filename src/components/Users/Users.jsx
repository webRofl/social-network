import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import classes from './Users.module.css';

const Users = (props) => {
  return (
    <div className={classes.wrapper}>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onChangePage={props.onChangePage}
      />
      {props.users.map((user) => (
        <User
          key={user.id}
          inProgressBtn={props.inProgressBtn}
          user={user}
          toggleFollowTC={props.toggleFollowTC}
        />
      ))}
    </div>
  );
};

export default Users;
