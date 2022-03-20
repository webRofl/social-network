import React from 'react';
import { connect } from 'react-redux';
import {
  getMyProfile,
  getStatus,
  setUserStatus,
  setStatus,
} from '../../redux/profileReducer';
import Profile from './Profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect/withAuthRedirect';
import { withUrlChecker } from '../../hoc/withUrlChecker/withUrlChecker';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getMyProfile(this.props.url.params.userId);
    this.props.getStatus(this.props.url.params.userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, {
    getMyProfile,
    getStatus,
    setUserStatus,
    setStatus,
  }),
  withAuthRedirect,
  withUrlChecker
)(ProfileContainer);
