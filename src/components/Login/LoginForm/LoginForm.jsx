import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import classes from './LoginForm.module.css';
import { validationSchema } from '../../../utils/validators/loginValidator';
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
  if (props.isAuth) return <Navigate to={'/profile/' + props.id} />;

  const handleSubmit = (values, actions) => {
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
