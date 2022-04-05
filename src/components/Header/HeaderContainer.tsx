import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout, getMyData } from '../../redux/authReducer';
import { AppStateType } from '../../redux/redux-store';

type PropType = {
  getMyData: (id: number) => void;
  id: number;
};

class HeaderContainer extends React.Component<PropType> {
  componentDidMount() {
    this.props.getMyData(this.props.id);
  }

  render() {
    //@ts-ignore
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    id: state.auth.userId,
    profilePhoto: state.auth.profilePhoto,
    fullName: state.auth.fullName,
  };
};

//@ts-ignore
export default connect<any>(mapStateToProps, { logout, getMyData })(
  HeaderContainer
);
