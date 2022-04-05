import Users from './Users';
import { connect } from 'react-redux';
import {
  setToggleIsProgress,
  getUsers,
  toggleFollowTC,
} from '../../redux/usersReducer';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect/withAuthRedirect';
import { compose } from 'redux';
import {
  getUsersSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getCurrentPageSelector,
  getIsFetchingSelector,
  getInProgressSelector,
} from './../../redux/userSelectors';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsType = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalUsersCount: number;
  users: Array<UserType>;
  inProgressBtn: number[];
};

type MapDispatchToPropsType = {
  getUsers: (pageNumber: number, pageSize: number) => void;
  setToggleIsProgress: (isFollowProgress: boolean, id: number) => JSX.Element;
  toggleFollowTC: (user: UserType) => void;
};

type OwnPropType = {};

type PropType = MapStateToPropsType & MapDispatchToPropsType & OwnPropType;

class UsersContainer extends React.Component<PropType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onChangePage = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onChangePage={this.onChangePage}
            users={this.props.users}
            inProgressBtn={this.props.inProgressBtn}
            //@ts-ignore
            setToggleIsProgress={this.props.setToggleIsProgress}
            toggleFollowTC={this.props.toggleFollowTC}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    inProgressBtn: getInProgressSelector(state),
  };
};

export default compose<any>(
  //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
  connect<
    MapStateToPropsType,
    MapDispatchToPropsType,
    OwnPropType,
    AppStateType
  >(mapStateToProps, {
    //@ts-ignore
    setToggleIsProgress,
    getUsers,
    toggleFollowTC,
  }),
  withAuthRedirect
)(UsersContainer);
