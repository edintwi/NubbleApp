import {useState, useEffect} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [error, setError] = useState<boolean | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [postList, setPostList] = useState<Post[]>();

  async function fetchData() {
    try {
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
      // eslint-disable-next-line no-catch-shadow
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    postList,
    error,
    isLoading,
    refetch: fetchData,
  };
}
