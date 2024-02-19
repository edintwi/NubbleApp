import {useState, useEffect} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [error, setError] = useState<boolean | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [postList, setPostList] = useState<Post[]>([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState(1);

  async function fetchIntialData() {
    try {
      setLoading(true);
      const {data, meta} = await postService.getList(1);
      setPostList(data);
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
      const {data, meta} = await postService.getList(page);
      setPostList(prev => [...prev, ...data]);
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
    postList,
    error,
    isLoading,
    refresh: fetchIntialData,
    fetchNextPage,
  };
}
