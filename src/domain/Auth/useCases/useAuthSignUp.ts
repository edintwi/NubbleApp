import {Options} from '@infra';
import {useMutation} from '@tanstack/react-query';
import {authService} from '../authService';
import {SignUpData} from '../AuthTypes';

export function useAuthSignUp(options?: Options<void>) {
  const mutation = useMutation<void, Error, SignUpData>({
    mutationFn: signUpData => authService.signUp(signUpData),
    retry: false,
    onSuccess: () => {
      if (options?.onSucess) {
        options.onSucess();
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  function signUp(signUpData: SignUpData) {
    mutation.mutate(signUpData);
  }

  return {
    isLoading: mutation.isLoading,
    signUp,
  };
}
