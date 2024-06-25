import {Options} from '@infra';
import {useMutation} from '@tanstack/react-query';
import {AuthCredentials} from '../AuthTypes';
import {authService} from '../authService';

interface Variables {
  email: string;
  password: string;
}

export function useAuthSignIn(options?: Options<AuthCredentials>) {
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({email, password}) => authService.signIn(email, password),
    retry: false,
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
