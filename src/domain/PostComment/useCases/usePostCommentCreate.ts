import {Options, useMutation} from '@infra';
import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';

export function usePostCommentCreate(
  postId: number,
  options?: Options<PostComment>,
) {
  const {mutate, loading, error} = useMutation<{message: string}, PostComment>(
    ({message}) => postCommentService.create(postId, message),
    options,
  );
  async function createComment(message: string) {
    await mutate({message});
  }

  return {
    createComment,
    loading,
    error,
  };
}
