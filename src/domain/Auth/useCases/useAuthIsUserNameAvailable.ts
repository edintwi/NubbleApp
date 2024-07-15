import {useDebounce} from '@hooks';
import {queryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';
import {authService} from '../authService';

interface Param {
  username: string;
}
export function useAuthIsUserNameAvailable({username}: Param) {
  const debouncedUsername = useDebounce(username, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [queryKeys.IsUserNameAvailable, debouncedUsername],
    queryFn: () => authService.isUserNameAvailable(debouncedUsername),
    retry: false,
    staleTime: 20000,
  });

  return {
    isAvailable: !!data,
    isFetching,
  };
}
