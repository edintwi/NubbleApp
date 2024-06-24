import {Options, queryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postCommentService} from '../postCommentService';

export function usePostCommentRemove(
  postId: number,
  options?: Options<string>,
) {
  const queryClient = useQueryClient();

  const mutation = useMutation<string, unknown, {postCommentId: number}>({
    mutationFn: ({postCommentId}) => postCommentService.remove(postCommentId),
    onSuccess: message => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.PostCommentList, postId],
      });
      if (options?.onSucess) {
        options.onSucess(message);
      }
    },
    onError: () => {
      if (options?.onError) {
        options?.onError(options.errorMessage || 'Erro');
      }
    },
  });

  return {
    mutate: mutation.mutate,
  };
}
