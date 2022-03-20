import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('the field is required')
    .email('Email is incorrect'),
  password: yup
    .string()
    .required('the field is required')
    .min(6, 'the password must be 6 symbols'),
});
