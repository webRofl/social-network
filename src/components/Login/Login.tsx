import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import classes from './Login.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { login } from '../../redux/authReducer';
import { AppStateType } from '../../redux/redux-store';

type PropType = {};

const Login: React.FC<PropType> = (props) => {
  return (
    <div className={classes.wrapper}>
      {/* @ts-ignore */}
      <LoginForm {...props} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  id: state.auth.userId,
  errors: state.auth.errors,
  captchaUrl: state.auth.captchaUrl,
});

export default compose(connect(mapStateToProps, { login }))(Login);
