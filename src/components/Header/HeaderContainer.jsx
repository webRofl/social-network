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
    fullName: state.auth.fullName,
    isAuth: state.auth.isAuth,
    profilePhoto: state.auth.profilePhoto,
  };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);
