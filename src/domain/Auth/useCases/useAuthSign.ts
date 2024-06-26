import {Options} from '@infra';
import {useAuthCredentials} from '@services';
import {useMutation} from '@tanstack/react-query';
import {AuthCredentials} from '../AuthTypes';
import {authService} from '../authService';

interface Variables {
  email: string;
  password: string;
}

export function useAuthSignIn(options?: Options<AuthCredentials>) {
  const {saveCredentials} = useAuthCredentials();
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({email, password}) => authService.signIn(email, password),
    retry: false,
    onSuccess: authCredentials => {
      saveCredentials(authCredentials);
      authService.updateToken(authCredentials.token);
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  return {
    isLoading: mutation.isLoading,
    singIn: (variables: Variables) => mutation.mutate(variables),
  };
}
