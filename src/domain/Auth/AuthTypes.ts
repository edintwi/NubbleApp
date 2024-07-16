import {User, UserAPI} from '../User';

export interface AuthCredentials {
  token: string; //"MQ.e8NJWcUAzyODtili5-gmpdw84Kotir-dKn-65zlt0s2DihZ3AMd-IBULWsap
  user: User;
  refreshToken: string; //'c3f5f6123c9d60a535f306e3de920a9724e93342ca6b7289682ba5f5e4da2a8a';
  expires_at: string; //'2024-07-16T14:56:41.053+00:00';
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; //"bearer",
    token: string; //"MQ.e8NJWcUAzyODtili5-gmpdw84Kotir-dKn-65zlt0s2DihZ3AMd-IBULWsap
    refreshToken: string; //'c3f5f6123c9d60a535f306e3de920a9724e93342ca6b7289682ba5f5e4da2a8a';
    expires_at: string; //'2024-07-16T14:56:41.053+00:00';
  };
  user: UserAPI;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

export interface SignUpDataAPI {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}
export interface SignUpData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface FieldIsAvaibleAPI {
  message: string; // "email is not available",
  isAvailable: boolean; //false
}

export interface ForgotPasswordParam {
  email: string;
}
