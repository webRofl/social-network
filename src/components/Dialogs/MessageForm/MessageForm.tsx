import React from 'react';
import { Formik, Field, Form } from 'formik';
import classes from './MessageForm.module.css';

type PropType = {
  addMessage: (message: string) => void;
};

const MessageForm: React.FC<PropType> = (props) => {
  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={(values, actions) => {
        if (values.message.trim()) {
          props.addMessage(values.message);
        } //@ts-ignore
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
