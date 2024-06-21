import {queryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';
import {userService} from '../userService';

export function useUserGetById(id: number) {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [queryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 10, //10 seconds
    //cacheTime: 5000,
  });

  return {
    user: data,
    isError,
    isLoading,
    refetch,
    isFetching,
  };
}
