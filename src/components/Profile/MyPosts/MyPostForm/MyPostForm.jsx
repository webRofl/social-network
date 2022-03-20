import React from 'react';
import { Formik, Field, Form } from 'formik';
import classes from './MyPostForm.module.css';

const MyPostForm = (props) => {
  return (
    <Formik
      initialValues={{ postName: '' }}
      onSubmit={(values, actions) => {
        props.addPost(values.postName.trim());
        actions.resetForm({ postName: '' });
      }}
    >
      {() => (
        <Form className={classes.wrapper}>
          <Field
            name="postName"
            placeholder="Enter new post name"
            type="text"
          />
          <button type="submit">Add Post</button>
        </Form>
      )}
    </Formik>
  );
};

export default MyPostForm;
