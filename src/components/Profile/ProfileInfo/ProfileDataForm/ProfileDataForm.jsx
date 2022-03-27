import React from 'react';
import { Formik, Form, Field } from 'formik';
import classes from './ProfileDataForm.module.css';

const ProfileDataForm = (props) => {
  const toCamelCase = (string) => {
    const str = string.trim();
    const index = str.search(/( |_)/);
    if (index === -1) return str;
    return toCamelCase(
      str.slice(0, index) + str[index + 1].toUpperCase() + str.slice(index + 2)
    );
  };

  const autoField = (name) => {
    return (
      <>
        <label>{name}</label>
        <Field
          name={name[0].toLowerCase() + toCamelCase(name.slice(1))}
          placeholder={name}
          type="text"
        />
      </>
    );
  };

  const handleSubmit = async (values) => {
    const profile = {
      fullName: values.fullName,
      aboutMe: values.aboutMe,
      lookingForAJob: values.lookingForAJob,
      lookingForAJobDescription: values.lookingForAJobDescription,
    };
    const contacts = {
      facebook: values.facebook,
      webSite: values.webSite,
      vk: values.vk,
      twitter: values.twitter,
      instagram: values.instagram,
      youtube: values.youtube,
      github: values.github,
      mainLink: values.mainLink,
    };
    const resultCode = await props.updateProfile(profile, contacts);
    if (resultCode === 0) {
      props.setEditMode(false);
    }
  };

  return (
    <Formik
      initialValues={{
        fullName: '',
        aboutMe: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        facebook: '',
        webSite: '',
        vk: '',
        twitter: '',
        instagram: '',
        youtube: '',
        github: '',
        mainLink: '',
      }}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form className={classes.profileForm}>
          {autoField('Full name')}

          {autoField('About me')}

          <label>Looking for a job?</label>
          <Field type="checkbox" name="lookingForAJob" />

          <label>Skills</label>
          <Field
            type="text"
            name="lookingForAJobDescription"
            placeholder="Skills"
            disabled={!formikProps.values.lookingForAJob}
          />

          <h1>Contacts</h1>

          {autoField('Facebook')}
          {autoField('WebSite')}
          {autoField('Vk')}
          {autoField('Twitter')}
          {autoField('Instagram')}
          {autoField('Youtube')}
          {autoField('Github')}
          {autoField('MainLink')}

          {props.errorForm ? <span>{props.errorForm}</span> : null}

          <button type="submit" className={classes.profileForm__submit}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDataForm;
