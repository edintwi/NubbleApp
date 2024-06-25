import {userAdapter} from '../User';
import {AuthCredentials, AuthCredentialsAPI} from './AuthTypes';

function toAuthCredentials(
  AuthCredentialsAPI: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: AuthCredentialsAPI.auth.token,
    user: userAdapter.toUser(AuthCredentialsAPI.user),
  };
}

export const authAdapter = {
  toAuthCredentials,
};
