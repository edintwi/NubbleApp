import {useDebounce} from '@hooks';
import {queryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';
import {authService} from '../authService';

interface Param {
  username: string;
  enabled: boolean;
}
export function useAuthIsUserNameAvailable({username, enabled}: Param) {
  const debouncedUsername = useDebounce(username, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [queryKeys.IsUserNameAvailable, debouncedUsername],
    queryFn: () => authService.isUserNameAvailable(debouncedUsername),
    retry: false,
    staleTime: 20000,
    enabled: enabled && debouncedUsername.length > 0,
  });

  const isDebouncing = debouncedUsername !== username;
  return {
    isAvailable: !!data,
    isUnavailable: data === false,
    isFetching: isFetching || isDebouncing,
  };
}
