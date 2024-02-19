import {useState, useEffect} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [error, setError] = useState<boolean | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [postList, setPostList] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

  async function fetchIntialData() {
    try {
      setLoading(true);
      const list = await postService.getList(1);
      setPostList(list);
      setPage(2);
      // eslint-disable-next-line no-catch-shadow
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (isLoading) {
      return;
    }
    try {
      setLoading(true);
      const list = await postService.getList(page);
      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
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
    postList,
    error,
    isLoading,
    refresh: fetchIntialData,
    fetchNextPage,
  };
}
