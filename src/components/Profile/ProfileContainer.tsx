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
  InitialStateProfilePageType,
} from '../../redux/profileReducer';
import Profile from './Profile';
import { withAuthRedirect } from '../../hoc/withAuthRedirect/withAuthRedirect';
import { withUrlChecker } from '../../hoc/withUrlChecker/withUrlChecker';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';

type UrlCheckerType = {
  userId: number | string;
};

type UrlCheckerParamsType = {
  params: UrlCheckerType;
};

type OwnPropType = {
  url: UrlCheckerParamsType;
};

type MapStateToPropsType = InitialStateProfilePageType;

type MapDispatchToPropsType = {
  getMyProfile: (id: number | string) => void;
  getStatus: (id: number | string) => void;
  setUserStatus: () => void;
  setStatus: () => void;
  updatePhoto: () => void;
  updateProfile: () => void;
  setEditMode: () => void;
};

type PropType = OwnPropType & MapStateToPropsType & MapDispatchToPropsType;

class ProfileContainer extends React.Component<PropType> {
  refreshProfile() {
    this.props.getMyProfile(this.props.url.params.userId);
    this.props.getStatus(this.props.url.params.userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropType) {
    //@ts-ignore
    if (parseInt(this.props.url.params.userId) !== prevProps.profile?.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.userId,
    editMode: state.profilePage.editMode,
    errorForm: state.profilePage.errorForm,
  };
};

export default compose<any>(
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
