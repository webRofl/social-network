import React from 'react';
import { Formik, Field, Form } from 'formik';
import classes from './LoginForm.module.css';
import { validationSchema } from '../../../utils/validators/loginValidator';
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
  if (props.isAuth) return <Navigate to={'/profile/' + props.id} />;

  const handleSubmit = (values, actions) => {
    props.login(values.email, values.password, values.rememberMe);
    actions.resetForm({ email: '', password: '' });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <Form className={classes.formContainer}>
          <div className={classes.fieldWrapper}>
            <label htmlFor="email">Email</label>

            {formikProps.touched.email && formikProps.errors.email && (
              <p className={classes.error}>{formikProps.errors.email}</p>
            )}
            <Field name="email" placeholder="Type your email" type="email" />
          </div>

          <div className={classes.fieldWrapper}>
            <label htmlFor="password">Password</label>
            {formikProps.touched.password && formikProps.errors.password && (
              <p className={classes.error}>{formikProps.errors.password}</p>
            )}
            <Field
              name="password"
              placeholder="Type your Password"
              type="password"
            />
          </div>

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
