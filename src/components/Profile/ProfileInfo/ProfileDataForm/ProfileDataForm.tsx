import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import classes from './ProfileDataForm.module.css';
import { ProfileContactsType, ProfileType } from '../../../../types/types';

type PropType = {
  updateProfile: (profile: ProfileType, contacts: ProfileContactsType) => void;
  setEditMode: (bool: boolean) => void;
  errorForm: string[];
};

const ProfileDataForm: React.FC<PropType> = (props) => {
  const toCamelCase = (string: string): string => {
    const str = string.trim();
    const index = str.search(/( |_)/);
    if (index === -1) return str;
    return toCamelCase(
      str.slice(0, index) + str[index + 1].toUpperCase() + str.slice(index + 2)
    );
  };

  type ValuesMeType = {
    fullName: string;
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
  };

  type ValuesContactsType = {
    facebook: string;
    webSite: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
  };

  type ValuesType = ValuesMeType & ValuesContactsType;

  const autoField = (name: string) => {
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

  const handleSubmit = async (values: ValuesType) => {
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
    //@ts-ignore
    const resultCode = await props.updateProfile(profile, contacts);
    //@ts-ignore
    if (resultCode === 0) {
      props.setEditMode(false);
    }
  };

  const [isShowContacts, setShowContacts] = useState(false);

  const handleContacts = () => {
    setShowContacts(!isShowContacts);
  };

  return (
    <Formik
      initialValues={{
        //@ts-ignore
        fullName: props.fullName || '',
        //@ts-ignore
        aboutMe: props.aboutMe || '',
        //@ts-ignore
        lookingForAJob: props.lookingForAJob || false,
        //@ts-ignore
        lookingForAJobDescription: props.lookingForAJobDescription || '',
        //@ts-ignore
        facebook: props.contacts.facebook || '',
        //@ts-ignore
        webSite: props.contacts.webSite || '',
        //@ts-ignore
        vk: props.contacts.vk || '',
        //@ts-ignore
        twitter: props.contacts.twitter || '',
        //@ts-ignore
        instagram: props.contacts.instagram || '',
        //@ts-ignore
        youtube: props.contacts.youtube || '',
        //@ts-ignore
        github: props.contacts.github || '',
        //@ts-ignore
        mainLink: props.contacts.mainLink || '',
      }}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form className={classes.editProfile__modalForm}>
          {autoField('Full name')}

          {autoField('About me')}

          <div className={classes.editProfile__checkboxBlock}>
            <label>Looking for a job?</label>
            <Field
              type="checkbox"
              name="lookingForAJob"
              className={classes.editProfile__checkbox}
            />
          </div>

          <label>Skills</label>
          <Field
            type="text"
            name="lookingForAJobDescription"
            placeholder="Skills"
            disabled={!formikProps.values.lookingForAJob}
          />

          <input
            type="button"
            value="Show contacts"
            onClick={handleContacts}
            className={classes.editProfile__btn}
          />

          {isShowContacts ? (
            <>
              {autoField('Facebook')}
              {autoField('WebSite')}
              {autoField('Vk')}
              {autoField('Twitter')}
              {autoField('Instagram')}
              {autoField('Youtube')}
              {autoField('Github')}
              {autoField('MainLink')}
            </>
          ) : null}

          {props.errorForm ? <span>{props.errorForm}</span> : null}

          <button
            type="submit"
            className={`${classes.editProfile__btn} ${classes.editProfile__submitBtn}`}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDataForm;
