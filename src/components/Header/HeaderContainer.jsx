import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    fullName: state.profilePage?.profile?.fullName,
    isAuth: state.auth.isAuth,
    profilePhoto: state.auth.profilePhoto,
    id: state.auth.userId,
    profilePhoto: state.profilePage.profile?.photos?.small,
  };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);
