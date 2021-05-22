import * as Yup from 'yup';
import 'yup-phone';

export const signInSchema = Yup.object().shape({
  firstName: Yup.string().required("обов'язково до заповнення"),
  patronymic: Yup.string().required("обов'язково до заповнення"),
  secondName: Yup.string().required("обов'язково до заповнення"),
  password: Yup.string().required("обов'язково до заповнення"),
});

export const createUserSchema = Yup.object().shape({
  firstName: Yup.string().required("обов'язково до заповнення"),
  patronymic: Yup.string().required("обов'язково до заповнення"),
  secondName: Yup.string().required("обов'язково до заповнення"),
  position: Yup.object().nullable().required('виберіть посаду'),
  role: Yup.object().nullable().required('виберіть роль'),
  phone: Yup.string()
    .required("обов'язково до заповнення")
    .phone('UA', true, 'Номер телефону недійсний'),
  email: Yup.string()
    .required("обов'язково до заповнення")
    .email('перевірте правильність написання email'),
  password: Yup.string()
    .required("обов'язково до заповнення")
    .min(8, 'все ж таки, не менше 8 символів'),
});

export const resetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('перевірте правильність написання email')
    .required("обов'язково до заповнення"),
});
