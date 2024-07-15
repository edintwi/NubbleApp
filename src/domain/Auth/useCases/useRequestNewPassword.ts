import {Options} from '@infra';
import {useMutation} from '@tanstack/react-query';
import {authService} from '../authService';

export function useAuthRequestNewPassword(options?: Options<void>) {
  const {mutate, isLoading} = useMutation<string, Error, string>({
    mutationFn: email => authService.requestNewPasword(email),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: () => {
      if (options?.onSucess) {
        options.onSucess();
      }
    },
  });

  return {
    requestNewPassword: (email: string) => mutate(email),
    isLoading,
  };
}
