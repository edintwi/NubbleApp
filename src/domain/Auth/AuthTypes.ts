import {User, UserAPI} from '../User';

export interface AuthCredentials {
  token: string; //"MQ.e8NJWcUAzyODtili5-gmpdw84Kotir-dKn-65zlt0s2DihZ3AMd-IBULWsap
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; //"bearer",
    token: string; //"MQ.e8NJWcUAzyODtili5-gmpdw84Kotir-dKn-65zlt0s2DihZ3AMd-IBULWsap
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
