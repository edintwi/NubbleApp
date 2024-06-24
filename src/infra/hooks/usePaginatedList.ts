import {useInfiniteQuery} from '@tanstack/react-query';
import {Page} from '@types';
import {useEffect, useState} from 'react';

export interface usePaginatedListResult<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>,
): usePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);

  // const [error, setError] = useState<boolean | null>(null);
  // const [isLoading, setLoading] = useState(true);
  // const [hasNextPage, setHasNextPage] = useState(true);
  // const [page, setPage] = useState(1);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: ({meta}) =>
      meta.hasNextPage ? meta.currentPage + 1 : null,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);
      setList(newList);
    }
  }, [query.data]);

  return {
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}
