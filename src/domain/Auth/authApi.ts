import {api} from '@api';
import {UserAPI} from '../User';
import {
  AuthCredentialsAPI,
  FieldIsAvaibleAPI,
  SignUpDataAPI,
} from './AuthTypes';

const PATH = '/login';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await api.post(`${PATH}`, {
    email,
    password,
  });

  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get<string>('/profile/logout');

  return response.data;
}

async function signUp(data: SignUpDataAPI): Promise<UserAPI> {
  const response = await api.post<UserAPI>('register', data);
  return response.data;
}

async function isUserNameAvailable(params: {
  username: string;
}): Promise<FieldIsAvaibleAPI> {
  const response = await api.get<FieldIsAvaibleAPI>('validate-username', {
    params,
  });

  return response.data;
}

async function isEmailAvailable(params: {
  email: string;
}): Promise<FieldIsAvaibleAPI> {
  const response = await api.get<FieldIsAvaibleAPI>('validate-email', {
    params,
  });

  return response.data;
}
export const authApi = {
  signIn,
  signOut,
  signUp,
  isEmailAvailable,
  isUserNameAvailable,
};
