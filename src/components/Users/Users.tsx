import React from 'react';
import { UserType } from '../../types/types';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import classes from './Users.module.css';

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onChangePage: (pageNumber: number) => void
  users: Array<UserType>
  inProgressBtn: Array<number>
  toggleFollowTC: (user: UserType) => void
};

const Users: React.FC<PropsType> = (props) => {
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
