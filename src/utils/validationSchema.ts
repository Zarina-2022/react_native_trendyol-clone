import * as Yup from 'yup';

// Define the type for the login form values
export interface LoginFormValues {
  username: string;
  password: string;
}

export const loginSchema: Yup.ObjectSchema<LoginFormValues> =
  Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must contain at least 6 characters'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*\d).{6,}$/,
        'It must contain at least 6 characters, one lowercase letter, any special characters and one number.',
      ),
  });
