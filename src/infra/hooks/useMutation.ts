import {useState} from 'react';

export interface Options<TData> {
  onSucess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

/**
 *
 * @deprecated use useMutation from @tanStack/reactQuery
 *
 */

export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: Options<TData>,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function mutate(variables: TVariables) {
    try {
      setLoading(true);
      setError(null);
      const data = await mutationFn(variables);
      if (options?.onSucess) {
        options.onSucess(data);
      }
    } catch (error) {
      if (options?.onError) {
        options.onError(options?.errorMessage || '');
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    mutate,
    loading,
    error,
  };
}
