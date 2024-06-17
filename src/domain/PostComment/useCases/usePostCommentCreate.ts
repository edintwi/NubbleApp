import {useState} from 'react';
import {postCommentService} from '../postCommentService';

export function usePostCommentCreate(postId: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  function createComment(message: string) {
    try {
      setLoading(true);
      postCommentService.create(postId, message);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    createComment,
    loading,
    error,
  };
}
