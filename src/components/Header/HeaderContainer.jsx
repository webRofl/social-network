import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout, getMyData } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getMyData(this.props.id);
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    id: state.auth.userId,
    profilePhoto: state.auth.profilePhoto,
    fullName: state.auth.fullName,
  };
};

export default connect(mapStateToProps, { logout, getMyData })(HeaderContainer);
