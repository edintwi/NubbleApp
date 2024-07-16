import {authService} from '@domain';
import axios from 'axios';
import {AuthCredentials} from 'src/domain/Auth/AuthTypes';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
});

interface InterceptorProps {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
}
export function registerInterceptor({
  authCredentials,
  removeCredentials,
  saveCredentials,
}: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async responseError => {
      const failedRequest = responseError.config;
      const hasNotRefreshToken = !authCredentials?.refreshToken;
      const isRefeshTokenRequest = await authService.isRefreshTokenRequest(
        failedRequest,
      );
      if (responseError.response.status === 401) {
        if (hasNotRefreshToken || isRefeshTokenRequest || failedRequest.sent) {
          removeCredentials();
          return Promise.reject(responseError);
        }

        failedRequest.sent = true;

        const newAuthCredentials = await authService.authenticateByRefreshToken(
          authCredentials?.refreshToken,
        );
        saveCredentials(newAuthCredentials);

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;

        return api(failedRequest);
      }

      return Promise.reject(responseError);
    },
  );

  // remove listener when component unmount
  return () => api.interceptors.response.eject(interceptor);
}
