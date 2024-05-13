import {useEffect, useState} from 'react';

import {Page} from '@types';
export function usePaginatedList<Data>(
  getList: (page: number) => Promise<Page<Data>>,
) {
  const [error, setError] = useState<boolean | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [list, setList] = useState<Data[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState(1);

  async function fetchIntialData() {
    try {
      setLoading(true);
      const {data, meta} = await getList(1);
      setList(data);
      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
      // eslint-disable-next-line no-catch-shadow
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (isLoading || !hasNextPage) {
      return;
    }
    try {
      setLoading(true);
      const {data, meta} = await getList(page);
      setList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchIntialData();
  }, []);

  return {
    list,
    error,
    isLoading,
    refresh: fetchIntialData,
    fetchNextPage,
  };
}
