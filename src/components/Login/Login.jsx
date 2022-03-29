import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import classes from './Login.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { login } from '../../redux/authReducer';

const Login = (props) => {
  return (
    <div className={classes.wrapper}>
      <LoginForm {...props} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  id: state.auth.userId,
  errors: state.auth.errors,
  captchaUrl: state.auth.captchaUrl,
});

export default compose(connect(mapStateToProps, { login }))(Login);
