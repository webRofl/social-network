import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import classes from './LoginForm.module.css';
import { validationSchema } from '../../../utils/validators/loginValidator';
import { Navigate } from 'react-router-dom';

type PropType = {
  isAuth: boolean;
  id: number;
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void;
  captchaUrl: string;
  errors: Array<string>;
};

const LoginForm: React.FC<PropType> = (props) => {
  if (props.isAuth) return <Navigate to={'/profile/' + props.id} />;

  type InitialStateType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
  };

  type ActionType = {
    resetForm: (arg0: { email: string; password: string }) => void;
  };

  const handleSubmit = (values: InitialStateType, actions: ActionType) => {
    props.login(
      values.email,
      values.password,
      values.rememberMe,
      values.captcha
    );
    actions.resetForm({ email: '', password: '' });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
        captcha: '',
      }}
      //@ts-ignore
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <Form className={classes.formContainer}>
          <div className={classes.fieldWrapper}>
            <label htmlFor="email">Email</label>

            <p>Test e-mail: test_job_js@mail.ru</p>

            <Field name="email" placeholder="Type your email" type="email" />
          </div>

          {formikProps.touched.email && formikProps.errors.email && (
            <p className={classes.error}>{formikProps.errors.email}</p>
          )}

          <div className={classes.fieldWrapper}>
            <label htmlFor="password">Password</label>

            <p>Test password: testpassword</p>

            <Field
              name="password"
              placeholder="Type your Password"
              type="password"
            />
          </div>

          {formikProps.touched.password && formikProps.errors.password && (
            <p className={classes.error}>{formikProps.errors.password}</p>
          )}

          <div className={classes.fieldWrapper}>
            <label htmlFor="checkbox" className={classes.rememberMe}>
              Remember Me
            </label>
            <Field
              name="rememberMe"
              type="checkbox"
              className={classes.checkbox}
            />
          </div>

          {props.captchaUrl && (
            <div className={classes.loginCaptchaBlock}>
              <img src={props.captchaUrl} alt="captcha" />
              <Field
                name="captcha"
                type="text"
                className={classes.loginCaptchaField}
              />
            </div>
          )}

          {props.errors && (
            <div className={classes.errorLogin}>
              <span>{props.errors}</span>
            </div>
          )}

          <button type="submit" className={classes.submit}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
