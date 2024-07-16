import {userAdapter} from '../User';
import {AuthCredentials, AuthCredentialsAPI} from './AuthTypes';

function toAuthCredentials(
  AuthCredentialsAPI: AuthCredentialsAPI,
): AuthCredentials {
  return {
    token: AuthCredentialsAPI.auth.token,
    refreshToken: AuthCredentialsAPI.auth.refreshToken,
    expires_at: AuthCredentialsAPI.auth.expires_at,
    user: userAdapter.toUser(AuthCredentialsAPI.user),
  };
}

export const authAdapter = {
  toAuthCredentials,
};
