import {Options, queryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';

export function usePostCommentCreate(
  postId: number,
  options?: Options<PostComment>,
) {
  const queryClient = useQueryClient();
  const {mutate, isLoading, isError} = useMutation<
    PostComment,
    unknown,
    {message: string}
  >({
    mutationFn: variables =>
      postCommentService.create(postId, variables.message),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.PostCommentList, postId],
      });
      if (options?.onSucess) {
        options?.onSucess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'Ocorreu um erro!');
      }
    },
  });
  // const {mutate, loading, error} = useMutation<{message: string}, PostComment>(
  //   ({message}) => postCommentService.create(postId, message),
  //   options,
  // );
  async function createComment(message: string) {
    await mutate({message});
  }

  return {
    createComment,
    isLoading,
    isError,
  };
}
