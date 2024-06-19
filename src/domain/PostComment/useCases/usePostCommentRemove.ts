import {Options, useMutation} from '@infra';
import {postCommentService} from '../postCommentService';

export function usePostCommentRemove(options?: Options<string>) {
  return useMutation<number, string>(
    postCommentId => postCommentService.remove(postCommentId),
    options,
  );
}
