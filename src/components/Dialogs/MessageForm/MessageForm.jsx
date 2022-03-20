import React from 'react';
import { Formik, Field, Form } from 'formik';
import classes from './MessageForm.module.css';

const MessageForm = (props) => {
  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={(values, actions) => {
        if (values.message.trim()) {
          props.addMessage(values.message);
        }
        actions.resetForm({ message: '' });
      }}
    >
      <Form className={classes.formContainer}>
        <Field name="message" placeholder="Type your message" type="text" />
        <button type="submit" className={'submit'}>
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default MessageForm;
