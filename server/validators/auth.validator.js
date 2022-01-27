import yup from 'yup';

export const createUserData = yup.object({
  login: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
});