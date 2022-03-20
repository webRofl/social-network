import Users from './Users';
import { connect } from 'react-redux';
import {
  toggleFollow,
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

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onChangePage = (pageNumber) => {
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
            toggleFollow={this.props.toggleFollow}
            inProgressBtn={this.props.inProgressBtn}
            setToggleIsProgress={this.props.setToggleIsProgress}
            toggleFollowTC={this.props.toggleFollowTC}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    inProgressBtn: getInProgressSelector(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    toggleFollow,
    setToggleIsProgress,
    getUsers,
    toggleFollowTC,
  }),
  withAuthRedirect
)(UsersContainer);
