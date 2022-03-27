import React from 'react';
import { connect } from 'react-redux';
import {
  getMyProfile,
  getStatus,
  setUserStatus,
  setStatus,
  updatePhoto,
  updateProfile,
  setEditMode,
} from '../../redux/profileReducer';
import Profile from './Profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect/withAuthRedirect';
import { withUrlChecker } from '../../hoc/withUrlChecker/withUrlChecker';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  refreshProfile() {
    this.props.getMyProfile(this.props.url.params.userId);
    this.props.getStatus(this.props.url.params.userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (parseInt(this.props.url.params.userId) !== prevProps.profile?.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.userId,
    editMode: state.profilePage.editMode,
    errorForm: state.profilePage.errorForm,
  };
};

export default compose(
  connect(mapStateToProps, {
    getMyProfile,
    getStatus,
    setUserStatus,
    setStatus,
    updatePhoto,
    updateProfile,
    setEditMode,
  }),
  withAuthRedirect,
  withUrlChecker
)(ProfileContainer);
